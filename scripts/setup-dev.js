const path = require('path');
const fs = require('fs');

const VmRoot = path.resolve(__dirname, '../../scratch-vm');
const GuiRoot = path.resolve(__dirname, '../../scratch-gui');

// Use local scratch-vm in scratch-gui
try {
    const VmModulePath = path.resolve(GuiRoot, './node_modules/scratch-vm');
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
