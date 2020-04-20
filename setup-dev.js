const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process')

const ExtRoot = path.resolve(__dirname);
const VmRoot = path.resolve(__dirname, '../scratch-vm');
const GuiRoot = path.resolve(__dirname, '../scratch-gui');
const DesktopRoot = path.resolve(__dirname, '../scratch-desktop');

const ScratchDesktopIcnsFile = path.join('buildResources', 'ScratchDesktop.icns');
const ScratchDesktopIcoFile = path.join('buildResources', 'ScratchDesktop.ico');
const ScratchDesktopSvgFile = path.join('src', 'icon', 'ScratchDesktop.svg');
const ProvisionProfile = path.join('embedded.provisionprofile');

let stdout;

const args = process.argv.slice(2);

let desktop = false;
switch (args[0]) {
    case 'desktop':
        desktop = true;
        break;
    default:
        break;
}

// Make symbolic link in scratch-vm. 
try {
    fs.unlinkSync(path.join(GuiRoot, 'node_modules', 'scratch-vm'));
    fs.symlinkSync(VmRoot, path.join(GuiRoot, 'node_modules', 'scratch-vm'));
    console.log(`Make link: ${path.join(GuiRoot, 'node_modules', 'scratch-vm')} -> ${VmRoot}`);
} catch (err) {
    console.log(err);
}

// Make symbolic link from scratch-vm for ESLint.
try {
    fs.symlinkSync(path.resolve(path.join(VmRoot, 'node_modules')), path.resolve(path.join(ExtRoot, 'scratch-vm', 'node_modules')));
    console.log(`Make link: ${path.resolve(path.join(ExtRoot, 'scratch-vm', 'node_modules'))}`);
} catch (err) {
    console.log(`Already exists link: ${path.resolve(path.join(ExtRoot, 'scratch-vm', 'node_modules'))}`);
}

try {
    fs.symlinkSync(path.resolve(path.join(VmRoot, 'src', '.eslintrc.js')), path.resolve(path.join(ExtRoot, 'scratch-vm', 'src', '.eslintrc.js')));
    console.log(`Make link: ${path.resolve(path.join(ExtRoot, 'scratch-vm', 'src', '.eslintrc.js'))}`);
} catch (err) {
    console.log(`Already exists link: ${path.resolve(path.join(ExtRoot, 'scratch-vm', 'src', '.eslintrc.js'))}`);
}

// Install this extension.
try {
    stdout = execSync(`cd ${ExtRoot} && node install.js --gui=${GuiRoot} -L`);
    console.log(`stdout: ${stdout.toString()}`);
} catch (err) {
    console.error(err);
}

if (desktop) {
    // Make symbolic link in scratch-gui. 
    try {
        fs.unlinkSync(path.join(DesktopRoot, 'node_modules', 'scratch-gui'));
        fs.symlinkSync(GuiRoot, path.join(DesktopRoot, 'node_modules', 'scratch-gui'));
        console.log(`Make link: ${path.join(DesktopRoot, 'node_modules', 'scratch-gui')} -> ${GuiRoot}`);
    } catch (err) {
        console.log(err);
    }

    // Applay patch to scratch-vm
    try {
        stdout = execSync(`cd ${VmRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.join(ExtRoot, 'offline-websoket.patch')}`);
        console.log(`stdout: ${stdout.toString()}`);
    } catch (err) {
        // already applyed
        console.error(err);
    }

    // Change logo image of scratch-desktop
    fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-desktop', ScratchDesktopIcnsFile)), path.resolve(path.join(DesktopRoot, ScratchDesktopIcnsFile)));
    fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-desktop', ScratchDesktopIcoFile)), path.resolve(path.join(DesktopRoot, ScratchDesktopIcoFile)));
    fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-desktop', ScratchDesktopSvgFile)), path.resolve(path.join(DesktopRoot, ScratchDesktopSvgFile)));

    // Set provision profile for Mac app
    fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-desktop', ProvisionProfile)), path.resolve(path.join(DesktopRoot, ProvisionProfile)));

    // Apply patch to scratch-desktop
    try {
        stdout = execSync(`cd ${DesktopRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.join(ExtRoot, 'scratch-desktop.patch')}`);
        console.log(`stdout: ${stdout.toString()}`);
    } catch (err) {
        // already applyed
        console.error(err);
    }
}