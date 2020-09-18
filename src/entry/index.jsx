import React from 'react';
import {FormattedMessage} from 'react-intl';

import microbitMoreIconURL from './microbitMore.png';
import microbitMoreInsetIconURL from './microbitMore-small.svg';
import microbitMoreConnectionIconURL from './microbitMore-illustration.svg';
import microbitMoreConnectionSmallIconURL from './microbitMore-small.svg';

const version = 'v0.5';

const translationMap = {
    'ja': {
        'gui.extension.microbitMore.name': 'micro:bit MORE {version}',
        'gui.extension.microbitMore.description': 'micro:bitのすべての機能で遊ぶ。'
    },
    'ja-Hira': {
        'gui.extension.microbitMore.name': 'マイクロビット モア {version}',
        'gui.extension.microbitMore.description': 'マイクロビットのすべてのきのうであそぶ。'
    }
};

const entry = {
    name: (
        <FormattedMessage
            defaultMessage="micro:bit MORE {version}"
            description="Name for the 'microbit MORE' extension selector"
            id="gui.extension.microbitMore.name"
            values={{version: version}}
        />
    ),
    extensionId: 'microbitMore',
    collaborator: 'Yengawa Lab',
    iconURL: microbitMoreIconURL,
    insetIconURL: microbitMoreInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Play with all functions of micro:bit."
            description="Description for the 'micro:bit MORE' extension"
            id="gui.extension.microbitMore.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: microbitMoreConnectionIconURL,
    connectionSmallIconURL: microbitMoreConnectionSmallIconURL,
    connectingMessage: (
        <FormattedMessage
            defaultMessage="Connecting"
            description="Message to help people connect to their micro:bit."
            id="gui.extension.microbit.connectingMessage"
        />
    ),
    helpLink: 'https://lab.yengawa.com/project/scratch-microbit-more/',
    translationMap: translationMap
};

export { entry }; // loadable-extension needs this line.
export default entry;