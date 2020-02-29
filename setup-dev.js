const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process')

const VmRoot = '../scratch-vm';
const GuiRoot = '../scratch-gui';

const ExtId = 'microbitMore';
const VmExtDirName = 'microbitMore';

const VmExtPath = 'src/extensions/' + VmExtDirName;
const GuiExtPath = 'src/lib/libraries/extensions/' + ExtId;
const VmExtManager = 'src/extension-support/extension-manager.js'
const GuiExtIndex = 'src/lib/libraries/extensions/index.jsx'
const GuiExtIndexConfig = fs.readFileSync('./gui_ext_index-code.jsx', 'utf-8');

// Make symbolic link in scratch-vm. 
try {
    fs.symlinkSync(path.resolve(path.join('./scratch-vm', VmExtPath)), path.resolve(path.join(VmRoot, VmExtPath)));
    console.log(`Make link: ${path.resolve(path.join(VmRoot, VmExtPath))}`);
} catch (err) {
    console.log(`Already exists link: ${path.resolve(path.join(VmRoot, VmExtPath))}`);
};

// Add the extension to extension manager of scratch-vm. 
let managerCode = fs.readFileSync(path.resolve(path.join(VmRoot, VmExtManager)), 'utf-8');
if (managerCode.includes(ExtId)) {
    console.log(`Already registered in manager: ${ExtId}`);
} else {
    fs.copyFileSync(path.resolve(path.join(VmRoot, VmExtManager)), path.resolve(path.join(VmRoot, VmExtManager + '_orig')));
    managerCode = managerCode.replace(/builtinExtensions = {[\s\S]*?};/, `$&\n\nbuiltinExtensions.${ExtId} = () => require('../extensions/${VmExtDirName}');`);
    fs.writeFileSync(path.resolve(path.join(VmRoot, VmExtManager)), managerCode);
    console.log(`Registered in manager: ${ExtId}`);
}

// Make symbolic link in scratch-gui. 
try {
    fs.symlinkSync(path.resolve(path.join('./scratch-gui', GuiExtPath)), path.resolve(path.join(GuiRoot, GuiExtPath)));
    console.log(`Make link: ${path.resolve(path.join(GuiRoot, GuiExtPath))}`);
} catch (err) {
    console.log(`Already exists link: ${path.resolve(path.join(GuiRoot, GuiExtPath))}`);
};

// Add the extension to list of scratch-gui. 
let indexCode = fs.readFileSync(path.resolve(path.join(GuiRoot, GuiExtIndex)), 'utf-8');
if (indexCode.includes(ExtId)) {
    console.log(`Already added to extrnsion list: ${ExtId}`);
} else {
    fs.copyFileSync(path.resolve(path.join(GuiRoot, GuiExtIndex)), path.resolve(path.join(GuiRoot, GuiExtIndex + '_orig')));
    indexCode = indexCode.replace(/^.*export default\s+\[\s*$/m,
        GuiExtIndexConfig.match(/<icon>.*[\r\n]+([\s\S]*)$[\r\n].*<\/icon>/mi)[1]
        + '\n\n$&\n'
        + GuiExtIndexConfig.match(/<configuration>.*[\r\n]+([\s\S]*)$[\r\n].*<\/configuration>/mi)[1]);
    fs.writeFileSync(path.resolve(path.join(GuiRoot, GuiExtIndex)), indexCode);
    console.log(`Added to extrnsion list: ${ExtId}`);
}

// Use local repositories.
let stdout = execSync(`cd ${VmRoot} && npm link`);
console.log(`stdout: ${stdout.toString()}`);

stdout = execSync(`cd ${GuiRoot} && npm link scratch-vm`);
console.log(`stdout: ${stdout.toString()}`);
