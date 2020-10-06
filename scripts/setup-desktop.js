const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const ExtRoot = path.resolve(__dirname, '../');
const GuiRoot = path.resolve(__dirname, '../../scratch-gui');
const DesktopRoot = path.resolve(__dirname, '../../scratch-desktop');

const ScratchDesktopIcnsFile = path.join('buildResources', 'ScratchDesktop.icns');
const ScratchDesktopIcoFile = path.join('buildResources', 'ScratchDesktop.ico');
const ScratchDesktopSvgFile = path.join('src', 'icon', 'ScratchDesktop.svg');
const ProvisionProfile = path.join('embedded.provisionprofile');

let stdout;

// Install base GUI
stdout = execSync(`cd ${DesktopRoot} && npm install yokobond/scratch-gui#xcratch-desktop`);
console.log(`stdout: ${stdout.toString()}`);

// Change logo image of scratch-desktop
fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-desktop', ScratchDesktopIcnsFile)), path.resolve(path.join(DesktopRoot, ScratchDesktopIcnsFile)));
fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-desktop', ScratchDesktopIcoFile)), path.resolve(path.join(DesktopRoot, ScratchDesktopIcoFile)));
fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-desktop', ScratchDesktopSvgFile)), path.resolve(path.join(DesktopRoot, ScratchDesktopSvgFile)));

// Set provision profile for Mac app
if (process.platform === 'darwin') {
    fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-desktop', ProvisionProfile)), path.resolve(path.join(DesktopRoot, ProvisionProfile)));
}

// Apply patch to scratch-desktop
try {
    stdout = execSync(`cd ${DesktopRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.join(ExtRoot, 'scripts', 'scratch-desktop.patch')}`);
    console.log(`stdout: ${stdout.toString()}`);
} catch (err) {
    console.log('Already applyed: scratch-desktop.patch');
    // console.error(err);
}
