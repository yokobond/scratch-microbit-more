const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process')

function getArgs () {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .forEach( arg => {
            if (arg.slice(0,2) === '--') {
                // long arg
                const longArg = arg.split('=');
                const longArgFlag = longArg[0].slice(2,longArg[0].length);
                const longArgValue = longArg.length > 1 ? longArg[1] : true;
                args[longArgFlag] = longArgValue;
            }
            else if (arg[0] === '-') {
                // flags
                const flags = arg.slice(1,arg.length).split('');
                flags.forEach(flag => {
                    args[flag] = true;
                });
            }
        });
    return args;
}

const args = getArgs();

const ExtRoot = path.resolve(__dirname);
const GuiRoot = path.resolve(__dirname, args['gui'] ? args['gui'] : '../scratch-gui');
const VmRoot = path.join(GuiRoot, 'node_modules', 'scratch-vm');

const ExtId = 'microbitMore';
const ExtDirName = 'microbitMore';

const VmExtPath = path.join('src', 'extensions', ExtDirName);
const GuiExtPath = path.join('src', 'lib', 'libraries', 'extensions', ExtId);
const VmExtManager = path.join('src', 'extension-support', 'extension-manager.js');
const VmVirtualMachineFile = path.join('src', 'virtual-machine.js');
const GuiExtIndex = path.join('src', 'lib', 'libraries', 'extensions', 'index.jsx');
const GuiExtIndexConfig = fs.readFileSync(path.join(ExtRoot, 'scripts', 'gui_ext_index-code.jsx'), 'utf-8');
const GuiMenuBarLogoFile = path.join('src', 'components', 'menu-bar', 'scratch-logo.svg');

let stdout;

// Make symbolic link in scratch-vm. 
try {
    fs.symlinkSync(path.resolve(path.join(ExtRoot, 'scratch-vm', VmExtPath)), path.resolve(path.join(VmRoot, VmExtPath)));
    console.log(`Make link: ${path.resolve(path.join(VmRoot, VmExtPath))}`);
} catch (err) {
    console.log(`Already exists link: ${path.resolve(path.join(VmRoot, VmExtPath))}`);
}

// Add the extension to extension manager of scratch-vm. 
let managerCode = fs.readFileSync(path.resolve(path.join(VmRoot, VmExtManager)), 'utf-8');
if (managerCode.includes(ExtId)) {
    console.log(`Already registered in manager: ${ExtId}`);
} else {
    fs.copyFileSync(path.resolve(path.join(VmRoot, VmExtManager)), path.resolve(path.join(VmRoot, `${VmExtManager}_orig`)));
    managerCode = managerCode.replace(/builtinExtensions = {[\s\S]*?};/, `$&\n\nbuiltinExtensions.${ExtId} = () => require('../extensions/${ExtDirName}');`);
    fs.writeFileSync(path.resolve(path.join(VmRoot, VmExtManager)), managerCode);
    console.log(`Registered in manager: ${ExtId}`);
}

if (args['C']) {
    // Add the extension as a core extension. 
    let vmCode = fs.readFileSync(path.resolve(path.join(VmRoot, VmVirtualMachineFile)), 'utf-8');
    if (vmCode.includes(ExtId)) {
        console.log(`Already added as a core extension: ${ExtId}`);
    } else {
        fs.copyFileSync(path.resolve(path.join(VmRoot, VmVirtualMachineFile)), path.resolve(path.join(VmRoot, `${VmVirtualMachineFile}_orig`)));
        vmCode = vmCode.replace(/CORE_EXTENSIONS = \[[\s\S]*?\];/, `$&\n\nCORE_EXTENSIONS.push('${ExtId}');`);
        fs.writeFileSync(path.resolve(path.join(VmRoot, VmVirtualMachineFile)), vmCode);
        console.log(`Add as a core extension: ${ExtId}`);
    }
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
    indexCode = indexCode.replace(/^.*export default\s+\[/m, 'const extensions = [');
    indexCode += `\n// Injected for extra extension ${ExtId}`;
    indexCode += `\nimport ${ExtId} from './${ExtDirName}/entry.jsx';`;
    indexCode += `\nextensions.unshift(${ExtId});`;
    indexCode += '\nexport default extensions;\n';
    fs.writeFileSync(path.resolve(path.join(GuiRoot, GuiExtIndex)), indexCode);
    console.log(`Added to extrnsion list: ${ExtId}`);
}

if (args['L']) {
    // Change logo image of scratch-gui
    fs.copyFileSync(path.resolve(path.join(ExtRoot, 'scratch-gui', GuiMenuBarLogoFile)), path.resolve(path.join(GuiRoot, GuiMenuBarLogoFile)));

    // Applay patch to scratch-gui
    try {
        stdout = execSync(`cd ${GuiRoot} && patch -p1 -N -s --no-backup-if-mismatch < ${path.join(ExtRoot, 'scripts', 'scratch-gui-logo.patch')}`);
        console.log(`stdout: ${stdout.toString()}`);
    } catch (err) {
        // already applyed
        console.error(err);
    }
}