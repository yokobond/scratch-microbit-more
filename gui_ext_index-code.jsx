// <icon>
import microbitMoreIconURL from './microbitMore/microbitMore.png';
import microbitMoreInsetIconURL from './microbitMore/microbitMore-small.svg';
import microbitMoreConnectionIconURL from './microbitMore/microbitMore-illustration.svg';
import microbitMoreConnectionSmallIconURL from './microbitMore/microbitMore-small.svg';
// </icon>

export default [
    // <configuration>
    {
        name: 'micro:bit MORE',
        extensionId: 'microbitMore',
        collaborator: 'Yengawa Lab',
        iconURL: microbitMoreIconURL,
        insetIconURL: microbitMoreInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
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
        helpLink: 'https://lab.yengawa.com/project/scratch-microbit-more/'
    },
    // </configuration>
];
