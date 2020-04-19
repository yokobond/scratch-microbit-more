const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process')

const ExtRoot = path.resolve(__dirname);
const VmRoot = path.resolve(__dirname, '../scratch-vm');
const GuiRoot = path.resolve(__dirname, '../scratch-gui');
const DesktopRoot = path.resolve(__dirname, '../scratch-desktop');

const ExtId = 'microbitMore';
const VmExtDirName = 'microbitMore';

const VmExtPath = path.join('src', 'extensions', VmExtDirName);
const GuiExtPath = path.join('src', 'lib', 'libraries', 'extensions', ExtId);
const VmExtManager = path.join('src', 'extension-support', 'extension-manager.js');
const GuiExtIndex = path.join('src', 'lib', 'libraries', 'extensions', 'index.jsx');
const GuiExtIndexConfig = fs.readFileSync(path.join(ExtRoot, 'gui_ext_index-code.jsx'), 'utf-8');
const GuiMenuBarLogoFile = path.join('src', 'components', 'menu-bar', 'scratch-logo.svg');
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
    fs.symlinkSync(path.resolve(path.join(ExtRoot, 'scratch-vm', VmExtPath)), path.resolve(path.join(VmRoot, VmExtPath)));
    console.log(`Make link: ${path.resolve(path.join(VmRoot, VmExtPath))}`);
} catch (err) {
    console.log(`Already exists link: ${path.resolve(path.join(VmRoot, VmExtPath))}`);
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

// Add the extension to extension manager of scratch-vm. 
let managerCode = fs.readFileSync(path.resolve(path.join(VmRoot, VmExtManager)), 'utf-8');
if (managerCode.includes(ExtId)) {
    console.log(`Already registered in manager: ${ExtId}`);
} else {
    fs.copyFileSync(path.resolve(path.join(VmRoot, VmExtManager)), path.resolve(path.join(VmRoot, `${VmExtManager}_orig`)));
    managerCode = managerCode.replace(/builtinExtensions = {[\s\S]*?};/, `$&\n\nbuiltinExtensions.${ExtId} = () => require('../extensions/${VmExtDirName}');`);
    fs.writeFileSync(path.resolve(path.join(VmRoot, VmExtManager)), managerCode);
    console.log(`Registered in manager: ${ExtId}`);
}

// Applay patch to scratch-vm
try {
    stdout = execSync(`cd ${VmRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.join(ExtRoot, 'offline-websoket.patch')}`);
    console.log(`stdout: ${stdout.toString()}`);
} catch (err) {
    // already applyed
    console.error(err);
}

// Make symbolic link in scratch-gui. 
try {
    fs.symlinkSync(path.resolve(path.join(ExtRoot, 'scratch-gui', GuiExtPath)), path.resolve(path.join(GuiRoot, GuiExtPath)));
    console.log(`Make link: ${path.resolve(path.join(GuiRoot, GuiExtPath))}`);
} catch (err) {
    console.log(`Already exists link: ${path.resolve(path.join(GuiRoot, GuiExtPath))}`);
}

// Add the extension to list of scratch-gui. 
let indexCode = fs.readFileSync(path.resolve(path.join(GuiRoot, GuiExtIndex)), 'utf-8');
if (indexCode.includes(ExtId)) {
    console.log(`Already added to extrnsion list: ${ExtId}`);
} else {
    fs.copyFileSync(path.resolve(path.join(GuiRoot, GuiExtIndex)), path.resolve(path.join(GuiRoot, `${GuiExtIndex}_orig`)));
    indexCode = indexCode.replace(/^.*export default\s+\[\s*$/m,
        `${GuiExtIndexConfig.match(/<icon>.*[\r\n]+([\s\S]*)$[\r\n].*<\/icon>/mi)[1]
        }\n\n$&\n${
            GuiExtIndexConfig.match(/<configuration>.*[\r\n]+([\s\S]*)$[\r\n].*<\/configuration>/mi)[1]}`);
    fs.writeFileSync(path.resolve(path.join(GuiRoot, GuiExtIndex)), indexCode);
    console.log(`Added to extrnsion list: ${ExtId}`);
}

// Change logo image of scratch-gui
fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-gui', GuiMenuBarLogoFile)), path.resolve(path.join(GuiRoot, GuiMenuBarLogoFile)));

// Use local repositories.
stdout = execSync(`cd ${VmRoot} && npm link`);
console.log(`stdout: ${stdout.toString()}`);

stdout = execSync(`cd ${GuiRoot} && npm link`);
console.log(`stdout: ${stdout.toString()}`);

stdout = execSync(`cd ${GuiRoot} && npm link scratch-vm`);
console.log(`stdout: ${stdout.toString()}`);

if (desktop) {
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

    stdout = execSync(`cd ${DesktopRoot} && npm link scratch-gui`);
    console.log(`stdout: ${stdout.toString()}`);
}