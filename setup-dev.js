const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process')

const ExtRoot = path.resolve(__dirname);
const VmRoot = path.resolve(__dirname, '../scratch-vm');
const GuiRoot = path.resolve(__dirname, '../scratch-gui');

let stdout;

// Use local scratch-vm in scratch-gui
try {
    const VmModulePath = path.join(GuiRoot, 'node_modules', 'scratch-vm');
    const stats = fs.lstatSync(VmModulePath);
    if (stats.isSymbolicLink()) {
        console.log(`Already exists link: ${VmModulePath} -> ${fs.readlinkSync(VmModulePath)}`);
    } else {
        fs.renameSync(VmModulePath, `${VmModulePath}_orig`);
        fs.symlinkSync(VmRoot, VmModulePath);
        console.log(`Make link: ${VmModulePath} -> ${fs.readlinkSync(VmModulePath)}`);
    }
} catch (err) {
    console.log(err);
}

// Install this extension.
try {
    stdout = execSync(`cd ${ExtRoot} && node install.js --gui=${GuiRoot} -L -C`);
    console.log(`stdout: ${stdout.toString()}`);
} catch (err) {
    console.error(err);
}


// Setup for ESLint.
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
