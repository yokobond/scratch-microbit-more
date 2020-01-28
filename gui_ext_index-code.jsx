// <icon>
import mbitMoreIconURL from './mbitMore/mbitMore.png';
import mbitMoreInsetIconURL from './mbitMore/mbitMore-small.svg';
import mbitMoreConnectionIconURL from './mbitMore/mbitMore-illustration.svg';
import mbitMoreConnectionSmallIconURL from './mbitMore/mbitMore-small.svg';
// </icon>

export default [
    // <configuration>
    {
        name: 'Mbit More',
        extensionId: 'mbitMore',
        collaborator: 'Yengawa Lab',
        iconURL: mbitMoreIconURL,
        insetIconURL: mbitMoreInsetIconURL,
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
        connectionIconURL: mbitMoreConnectionIconURL,
        connectionSmallIconURL: mbitMoreConnectionSmallIconURL,
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
