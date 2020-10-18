const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const ExtRoot = path.resolve(__dirname, '../');
const DesktopRoot = path.resolve(__dirname, '../../scratch-desktop');

const IcnsFilePath = path.join('buildResources', 'ScratchDesktop.icns');
const IcoFilePath = path.join('buildResources', 'ScratchDesktop.ico');
const SvgFilePath = path.join('src', 'icon', 'ScratchDesktop.svg');
const ProvisionProfilePath = path.join('embedded.provisionprofile');

let stdout;

// Install base GUI
stdout = execSync(`cd ${DesktopRoot} && npm install yokobond/scratch-gui#xcratch-desktop`);
console.log(`stdout: ${stdout.toString()}`);

// Change logo image of scratch-desktop
fs.copyFileSync(
    path.join(ExtRoot, 'scratch-desktop', IcnsFilePath),
    path.join(DesktopRoot, IcnsFilePath)
);
fs.copyFileSync(
    path.join(ExtRoot, 'scratch-desktop', IcoFilePath),
    path.join(DesktopRoot, IcoFilePath)
);
fs.copyFileSync(
    path.join(ExtRoot, 'scratch-desktop', SvgFilePath),
    path.join(DesktopRoot, SvgFilePath)
);

// Set provision profile for Mac app
if (process.platform === 'darwin') {
    fs.copyFileSync(
        path.join(ExtRoot, 'scratch-desktop', ProvisionProfilePath),
        path.join(DesktopRoot, ProvisionProfilePath));
}

// Apply patch to scratch-desktop
try {
    stdout = execSync(`cd ${DesktopRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.join(ExtRoot, 'scripts', 'scratch-desktop.patch')}`);
    console.log(`stdout: ${stdout.toString()}`);
} catch (err) {
    console.log('Already applyed: scratch-desktop.patch');
}
