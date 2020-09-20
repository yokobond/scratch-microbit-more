const path = require('path');
const fs = require('fs-extra');
const commandLineArgs = require('command-line-args');
const rollup = require('rollup');
const babel = require('@rollup/plugin-babel').default;
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const nodeBuiltins = require('rollup-plugin-node-builtins');
const nodeGlobals = require('rollup-plugin-node-globals');
const importImage = require('@rollup/plugin-image');

const optionDefinitions = [
    {
        name: 'name',
        type: String
    },
    {
        name: 'block',
        type: String
    },
    {
        name: 'entry',
        type: String
    },
    {
        name: 'vm',
        type:String,
        defaultValue: '../scratch-vm'
    },
    {
        name: 'gui',
        type:String,
        defaultValue: '../scratch-gui'
    },
    {
        name: 'output',
        type:String,
        defaultValue: './build'
    }
];

// Read options
const options = commandLineArgs(optionDefinitions);
if (!options['name']) {
    throw('set --name <module name>');
}
const moduleName = options['name'];
if (!options['block']) {
    throw('set --block <source directory>');
}
const extSrcDir = path.resolve(__dirname, options['block']);
if (!options['entry']) {
    throw('set --entry <entry directory>');
}
const entrySrcDir = path.resolve(__dirname, options['entry']);
const VmRoot = path.resolve(__dirname, options['vm']);
console.log(`vm = ${VmRoot}`);
const GuiRoot = path.resolve(__dirname, options['gui']);
console.log(`gui = ${GuiRoot}`);
const outputDir = path.resolve(__dirname, options['output']);
console.log(`output = ${outputDir}`);

const blockWorkingDir = path.resolve(VmRoot, `src/extensions/_${moduleName}`);
const blockFile = path.resolve(blockWorkingDir, 'index.js');
const blockModuleFile = path.resolve(__dirname, outputDir, `${moduleName}.mjs`);
const entryWorkingDir = path.resolve(GuiRoot, `src/lib/libraries/extensions/_${moduleName}`);
const entryFile = path.resolve(entryWorkingDir, 'index.jsx');
const entryModuleFile = path.resolve(__dirname, outputDir, `${moduleName}.entry.mjs`);

const blockRollupOptions = {
    inputOptions: {
        input: blockFile,
        plugins: [
            // multi(),
            importImage(),
            nodeResolve({browser: true, preferBuiltins: true}),
            commonjs({
            }),
            nodeBuiltins(),
            nodeGlobals(),
            babel({
                babelrc: false,
                presets: [
                    ['@babel/preset-env',
                        {
                            "modules": false,
                            targets: {
                                browsers: [
                                    'last 3 versions',
                                    'Safari >= 8',
                                    'iOS >= 8']
                            }
                        }
                    ]
                ],
                babelHelpers: 'bundled',
            }),
        ]
    },
    outputOptions: {
        file: blockModuleFile,
        format: 'es',
    }
}

const entryRollupOptions = {
    inputOptions: {
        input: entryFile,
        plugins: [
            // multi(),
            importImage(),
            nodeResolve({browser: true, preferBuiltins: true}),
            commonjs({
            }),
            nodeBuiltins(),
            nodeGlobals(),
            babel({
                babelrc: false,
                presets: [
                    ['@babel/preset-env',
                        {
                            "modules": false,
                            targets: {
                                browsers: [
                                    'last 3 versions',
                                    'Safari >= 8',
                                    'iOS >= 8']
                            }
                        }
                    ],
                    '@babel/preset-react'
                ],
                babelHelpers: 'bundled',
                plugins: [
                    '@babel/plugin-transform-react-jsx'
                ]
            }),
        ]
    },
    outputOptions: {
        file: entryModuleFile,
        format: 'es',
    }
}

async function build() {
    // Copy module sources
    fs.copySync(extSrcDir, blockWorkingDir);
    fs.copySync(entrySrcDir, entryWorkingDir);
    console.log('copy source to working dir');

    // Build block module.
    const blockBundle = await rollup.rollup(blockRollupOptions.inputOptions);
    console.log(blockBundle.watchFiles); // an array of file names this bundle depends on
    // show contents of the module
    blockBundle.generate(blockRollupOptions.outputOptions)
        .then(res => {
            for (const chunkOrAsset of  res.output) {
                if (chunkOrAsset.type === 'asset') {
                    console.log('Asset', chunkOrAsset);
                } else {
                    console.log('Chunk', chunkOrAsset.modules);
                }
            }
        })
    // or write the bundle to disk
    await blockBundle.write(blockRollupOptions.outputOptions);

    // Build block module.
    const entryBundle = await rollup.rollup(entryRollupOptions.inputOptions);
    console.log(entryBundle.watchFiles); // an array of file names this bundle depends on
    // show contents of the module
    entryBundle.generate(entryRollupOptions.outputOptions)
        .then(res => {
            for (const chunkOrAsset of  res.output) {
                if (chunkOrAsset.type === 'asset') {
                    console.log('Asset', chunkOrAsset);
                } else {
                    console.log('Chunk', chunkOrAsset.modules);
                }
            }
        })
    // or write the bundle to disk
    await entryBundle.write(entryRollupOptions.outputOptions);

    // Clean up
    fs.removeSync(blockWorkingDir);
    fs.removeSync(entryWorkingDir);
    console.log('removed working dir');
}

try {
    build();
} catch (err) {
    console.error(err)
}
