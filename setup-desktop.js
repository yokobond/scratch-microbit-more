const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process')

const ExtRoot = path.resolve(__dirname);
const GuiRoot = path.resolve(__dirname, '../scratch-gui');
const VmRoot = path.resolve(__dirname, '../scratch-vm');
const DesktopRoot = path.resolve(__dirname, '../scratch-desktop');

const ScratchDesktopIcnsFile = path.join('buildResources', 'ScratchDesktop.icns');
const ScratchDesktopIcoFile = path.join('buildResources', 'ScratchDesktop.ico');
const ScratchDesktopSvgFile = path.join('src', 'icon', 'ScratchDesktop.svg');
const ProvisionProfile = path.join('embedded.provisionprofile');

let stdout;

// Use local scratch-gui in scratch-desktop.
const GuiModulePath = path.join(DesktopRoot, 'node_modules', 'scratch-gui');
try {
    const stats = fs.lstatSync(GuiModulePath);
    if (stats.isSymbolicLink()) {
        console.log(`Already exists link: ${GuiModulePath} -> ${fs.readlinkSync(GuiModulePath)}`);
    } else {
        fs.renameSync(GuiModulePath, `${GuiModulePath}_orig`);
    }
} catch (err) {
    console.log(err);
}
fs.symlinkSync(GuiRoot, GuiModulePath);
console.log(`Make link: ${GuiModulePath} -> ${fs.readlinkSync(GuiModulePath)}`);

// Applay patch to scratch-vm
try {
    stdout = execSync(`cd ${VmRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.join(ExtRoot, 'offline-websoket.patch')}`);
    console.log(`stdout: ${stdout.toString()}`);
} catch (err) {
    // already applyed
    // console.error(err);
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
    // console.error(err);
}
