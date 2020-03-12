const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const log = require('../../util/log');
const cast = require('../../util/cast');
const formatMessage = require('format-message');
const BLE = require('../../io/ble');
const Base64Util = require('../../util/base64-util');

/**
 * Icon png to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = 'data:image/png;base64,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';

/**
 * Enum for micro:bit BLE command protocol.
 * https://github.com/LLK/scratch-microbit-firmware/blob/master/protocol.md
 * @readonly
 * @enum {number}
 */
const BLECommand = {
    CMD_PIN_CONFIG: 0x80,
    CMD_DISPLAY_TEXT: 0x81,
    CMD_DISPLAY_LED: 0x82,
    CMD_PIN_INPUT: 0x90,
    CMD_PIN_OUTPUT: 0x91,
    CMD_PIN_PWM: 0x92,
    CMD_PIN_SERVO: 0x93,
    CMD_SHARED_DATA_SET: 0xA0
};

const MBitMoreDataFormat = {
    MIX_01: 0x01,
    MIX_02: 0x02,
    MIX_03: 0x03,
    IO: 0x11,
    ANSLOG_IN: 0x12,
    LIGHT_SENSOR: 0x13,
    ACCELEROMETER: 0x14,
    MAGNETOMETER: 0x15,
    SHARED_DATA: 0x16
};

/**
 * A time interval to wait (in milliseconds) before reporting to the BLE socket
 * that data has stopped coming from the peripheral.
 */
const BLETimeout = 4500;

/**
 * A time interval to wait (in milliseconds) while a block that sends a BLE message is running.
 * @type {number}
 */
const BLESendInterval = 100;

/**
 * A string to report to the BLE socket when the micro:bit has stopped receiving data.
 * @type {string}
 */
const BLEDataStoppedError = 'Microbit More extension stopped receiving data';

/**
 * Enum for micro:bit protocol.
 * https://github.com/LLK/scratch-microbit-firmware/blob/master/protocol.md
 * @readonly
 * @enum {string}
 */
const MICROBIT_SERVICE = {
    ID: 0xf005,
    RX: '5261da01-fa7e-42ab-850b-7c80220097cc',
    TX: '5261da02-fa7e-42ab-850b-7c80220097cc'
};

const MBITMORE_SERVICE = {
    ID: 'a62d574e-1b34-4092-8dee-4151f63b2865',
    CONFIG: 'a62d0001-1b34-4092-8dee-4151f63b2865',
    IO: 'a62d0002-1b34-4092-8dee-4151f63b2865',
    ANSLOG_IN: 'a62d0003-1b34-4092-8dee-4151f63b2865',
    LIGHT_SENSOR: 'a62d0004-1b34-4092-8dee-4151f63b2865',
    ACCELEROMETER: 'a62d0005-1b34-4092-8dee-4151f63b2865',
    MAGNETOMETER: 'a62d0006-1b34-4092-8dee-4151f63b2865',
    SHARED_DATA: 'a62d0007-1b34-4092-8dee-4151f63b2865'
};

/**
 * The unit-value of the gravitational acceleration from Micro:bit.
 * @type {number}
 */
const G = 1024;

/**
 * Manage communication with a MicroBit peripheral over a Scrath Link client socket.
 */
class MbitMore {

    /**
     * Construct a MicroBit communication object.
     * @param {Runtime} runtime - the Scratch 3.0 runtime
     * @param {string} extensionId - the id of the extension
     */
    constructor (runtime, extensionId) {

        /**
         * The Scratch 3.0 runtime used to trigger the green flag button.
         * @type {Runtime}
         * @private
         */
        this._runtime = runtime;

        /**
         * The BluetoothLowEnergy connection socket for reading/writing peripheral data.
         * @type {BLE}
         * @private
         */
        this._ble = null;
        this._runtime.registerPeripheralExtension(extensionId, this);

        /**
         * The id of the extension this peripheral belongs to.
         */
        this._extensionId = extensionId;

        /**
         * The most recently received value for each sensor.
         * @type {Object.<string, number>}
         * @private
         */
        this._sensors = {
            tiltX: 0,
            tiltY: 0,
            buttonA: 0,
            buttonB: 0,
            touchPins: [0, 0, 0],
            gestureState: 0,
            ledMatrixState: new Uint8Array(5),
            lightLevel: 0,
            compassHeading: 0,
            magneticForce: {},
            analogValue: {},
            digitalValue: {},
            sharedData: [0, 0, 0, 0]
        };

        this.analogIn = [0, 1, 2];
        this.analogIn.forEach(pinIndex => {
            this._sensors.analogValue[pinIndex] = 0;
        });
        this.gpio = [
            0, 1, 2,
            8,
            13, 14, 15, 16
        ];
        this.gpio.forEach(pinIndex => {
            this._sensors.digitalValue[pinIndex] = 0;
        });
        this.sharedDataLength = this._sensors.sharedData.length;

        /**
         * The most recently received value for each gesture.
         * @type {Object.<string, Object>}
         * @private
         */
        this._gestures = {
            moving: false,
            move: {
                active: false,
                timeout: false
            },
            shake: {
                active: false,
                timeout: false
            },
            jump: {
                active: false,
                timeout: false
            }
        };

        /**
         * Interval ID for data reading timeout.
         * @type {number}
         * @private
         */
        this._timeoutID = null;

        /**
         * A flag that is true while we are busy sending data to the BLE socket.
         * @type {boolean}
         * @private
         */
        this._busy = false;

        /**
         * ID for a timeout which is used to clear the busy flag if it has been
         * true for a long time.
         */
        this._busyTimeoutID = null;

        this.reset = this.reset.bind(this);
        this._onConnect = this._onConnect.bind(this);
        this._updateMicrobitService = this._updateMicrobitService.bind(this);
        this._useMbitMoreService = true;

        this.ioUpdateInterval = 50; // milli-seconds
        this.analogInUpdateInterval = 50; // milli-seconds
        this.lightSensorUpdateInterval = 50; // milli-seconds
        this.accelerometerUpdateInterval = 50; // milli-seconds
        this.magnetometerUpdateInterval = 50; // milli-seconds
    }

    /**
     * @param {string} text - the text to display.
     * @return {Promise} - a Promise that resolves when writing to peripheral.
     */
    displayText (text) {
        const output = new Uint8Array(text.length);
        for (let i = 0; i < text.length; i++) {
            output[i] = text.charCodeAt(i);
        }
        return this.send(BLECommand.CMD_DISPLAY_TEXT, output);
    }

    /**
     * @param {Uint8Array} matrix - the matrix to display.
     * @return {Promise} - a Promise that resolves when writing to peripheral.
     */
    displayMatrix (matrix) {
        return this.send(BLECommand.CMD_DISPLAY_LED, matrix);
    }

    setPinInput (pinIndex, util) {
        this.send(BLECommand.CMD_PIN_INPUT, new Uint8Array([pinIndex]), util);
    }

    setPinOutput (pinIndex, level, util) {
        this.send(BLECommand.CMD_PIN_OUTPUT, new Uint8Array([pinIndex, level]), util);
    }

    setPinPWM (pinIndex, level, util) {
        const dataView = new DataView(new ArrayBuffer(2));
        dataView.setUint16(0, level, true);
        this.send(BLECommand.CMD_PIN_PWM,
            new Uint8Array([
                pinIndex,
                dataView.getUint8(0),
                dataView.getUint8(1)]),
            util);
    }

    setPinServo (pinIndex, angle, range, center, util) {
        if (!range || range < 0) range = 0;
        if (!center || center < 0) center = 0;
        const dataView = new DataView(new ArrayBuffer(4));
        dataView.setUint16(0, range, true);
        dataView.setUint16(2, center, true);
        this.send(BLECommand.CMD_PIN_SERVO,
            new Uint8Array([
                pinIndex,
                angle,
                dataView.getUint8(0),
                dataView.getUint8(1),
                dataView.getUint8(2),
                dataView.getUint8(3)]),
            util);
    }

    /**
     * @return {number} - the latest value received for the tilt sensor's tilt about the X axis.
     */
    get tiltX () {
        return this._sensors.tiltX;
    }

    /**
     * @return {number} - the latest value received for the tilt sensor's tilt about the Y axis.
     */
    get tiltY () {
        return this._sensors.tiltY;
    }

    /**
     * @return {boolean} - the latest value received for the A button.
     */
    get buttonA () {
        return this._sensors.buttonA;
    }

    /**
     * @return {boolean} - the latest value received for the B button.
     */
    get buttonB () {
        return this._sensors.buttonB;
    }

    /**
     * @return {number} - the latest value received for the motion gesture states.
     */
    get gestureState () {
        return this._sensors.gestureState;
    }

    /**
     * @return {Uint8Array} - the current state of the 5x5 LED matrix.
     */
    get ledMatrixState () {
        return this._sensors.ledMatrixState;
    }

    /**
     * Update data of the analog input.
     * @return {Promise} - a Promise that resolves sensors which updated data of the analog input.
     */
    updateAnalogIn () {
        if ((Date.now() - this.analogInLastUpdated) < this.analogInUpdateInterval) {
            return Promise.resolve(this._sensors);
        }
        return this._ble.read(
            MBITMORE_SERVICE.ID,
            MBITMORE_SERVICE.ANSLOG_IN,
            false)
            .then(result => {
                const data = Base64Util.base64ToUint8Array(result.message);
                const dataView = new DataView(data.buffer, 0);
                this._sensors.analogValue[this.analogIn[0]] = dataView.getUint16(0, true);
                this._sensors.analogValue[this.analogIn[1]] = dataView.getUint16(2, true);
                this._sensors.analogValue[this.analogIn[2]] = dataView.getUint16(4, true);
                this.analogInLastUpdated = Date.now();
                return this._sensors;
            });
    }

    /**
     * Read analog input from the pin [0, 1, 2].
     * @param {number} pin - the pin to read.
     * @return {Promise} - a Promise that resolves analog input value of the pin.
     */
    readAnalogIn (pin) {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(this._sensors.analogValue[pin]);
        }
        return this.updateAnalogIn()
            .then(() => this._sensors.analogValue[pin]);
    }

    /**
     * Update data of the light sensor.
     * @return {Promise} - a Promise that resolves sensors which updated data of the light sensor.
     */
    updateLightSensor () {
        if ((Date.now() - this.lightSensorLastUpdated) < this.lightSensorUpdateInterval) {
            return Promise.resolve(this._sensors);
        }
        return this._ble.read(
            MBITMORE_SERVICE.ID,
            MBITMORE_SERVICE.LIGHT_SENSOR,
            false)
            .then(result => {
                const data = Base64Util.base64ToUint8Array(result.message);
                const dataView = new DataView(data.buffer, 0);
                this._sensors.lightLevel = dataView.getUint8(0);
                this.lightSensorLastUpdated = Date.now();
                return this._sensors;
            });
    }

    /**
     * Read light level from the light sensor.
     * @return {Promise} - a Promise that resolves light level.
     */
    readLightLevel () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(this._sensors.lightLevel);
        }
        return this.updateLightSensor()
            .then(() => this._sensors.lightLevel);
    }

    /**
     * Update data of the magnetometer.
     * @return {Promise} - a Promise that resolves sensors which updated data of the magnetometer.
     */
    updateMagnetometer () {
        if ((Date.now() - this.magnetometerLastUpdated) < this.magnetometerUpdateInterval) {
            return Promise.resolve(this._sensors);
        }
        return this._ble.read(
            MBITMORE_SERVICE.ID,
            MBITMORE_SERVICE.MAGNETOMETER,
            false)
            .then(result => {
                const data = Base64Util.base64ToUint8Array(result.message);
                const dataView = new DataView(data.buffer, 0);
                this._sensors.compassHeading = dataView.getUint16(0, true);
                this._sensors.magneticForce[0] = dataView.getInt16(2, true);
                this._sensors.magneticForce[1] = dataView.getInt16(4, true);
                this._sensors.magneticForce[2] = dataView.getInt16(6, true);
                this._sensors.magneticStrength = Math.round(
                    Math.sqrt(
                        (this._sensors.magneticForce[0] ** 2) +
                        (this._sensors.magneticForce[1] ** 2) +
                        (this._sensors.magneticForce[2] ** 2)
                    )
                );
                this.magnetometerLastUpdated = Date.now();
                return this._sensors;
            });
    }

    /**
     * Read the angle (degrees) of heading direction from the north.
     * @return {Promise} - a Promise that resolves compass heading.
     */
    readCompassHeading () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(this._sensors.compassHeading);
        }
        return this.updateMagnetometer()
            .then(() => this._sensors.compassHeading);
    }

    /**
     * Read magnetic field X [micro teslas].
     * @return {Promise} - a Promise that resolves magnetic field strength.
     */
    readMagneticForceX () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(this._sensors.magneticForce[0]);
        }
        return this.updateMagnetometer()
            .then(() => this._sensors.magneticForce[0]);
    }

    /**
     * Read magnetic field Y [micro teslas].
     * @return {Promise} - a Promise that resolves magnetic field strength.
     */
    readMagneticForceY () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(this._sensors.magneticForce[1]);
        }
        return this.updateMagnetometer()
            .then(() => this._sensors.magneticForce[2]);
    }

    /**
     * Read magnetic field X [micro teslas].
     * @return {Promise} - a Promise that resolves magnetic field strength.
     */
    readMagneticForceZ () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(this._sensors.magneticForce[2]);
        }
        return this.updateMagnetometer()
            .then(() => this._sensors.magneticForce[2]);
    }

    /**
     * Read magnetic field strength [micro teslas].
     * @return {Promise} - a Promise that resolves magnetic field strength.
     */
    readMagneticStrength () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(this._sensors.magneticStrength);
        }
        return this.updateMagnetometer()
            .then(() => this._sensors.magneticStrength);
    }

    /**
     * Update data of the accelerometer.
     * @return {Promise} - a Promise that resolves sensors which updated data of the magnetometer.
     */
    updateAccelerometer () {
        if ((Date.now() - this.accelerometerLastUpdated) < this.accelerometerUpdateInterval) {
            return Promise.resolve(this._sensors);
        }
        return this._ble.read(
            MBITMORE_SERVICE.ID,
            MBITMORE_SERVICE.ACCELEROMETER,
            false)
            .then(result => {
                const data = Base64Util.base64ToUint8Array(result.message);
                const dataView = new DataView(data.buffer, 0);
                this._sensors.accelerationX = dataView.getInt16(0, true);
                this._sensors.accelerationY = dataView.getInt16(2, true);
                this._sensors.accelerationZ = dataView.getInt16(4, true);
                this._sensors.accelerationStrength = Math.round(
                    Math.sqrt(
                        (this._sensors.accelerationX ** 2) +
                        (this._sensors.accelerationY ** 2) +
                        (this._sensors.accelerationZ ** 2)
                    )
                );
                this.accelerometerLastUpdated = Date.now();
                return this._sensors;
            });
    }

    /**
     * Read the value of gravitational acceleration [milli-g] for X axis.
     * @return {Promise} - a Promise that resolves acceleration.
     */
    readAccelerationX () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(1000 * this._sensors.accelerationX / G);
        }
        return this.updateAccelerometer()
            .then(() => (1000 * this._sensors.accelerationX / G));
    }

    /**
     * Read the value of gravitational acceleration [milli-g] for Y axis.
     * @return {Promise} - a Promise that resolves acceleration.
     */
    readAccelerationY () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(1000 * this._sensors.accelerationY / G);
        }
        return this.updateAccelerometer()
            .then(() => (1000 * this._sensors.accelerationY / G));
    }

    /**
     * Read the value of gravitational acceleration [milli-g] for Z axis.
     * @return {Promise} - a Promise that resolves acceleration.
     */
    readAccelerationZ () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(1000 * this._sensors.accelerationZ / G);
        }
        return this.updateAccelerometer()
            .then(() => (1000 * this._sensors.accelerationZ / G));
    }

    /**
     * Read magnetic field strength [micro teslas].
     * @return {Promise} - a Promise that resolves magnetic field strength.
     */
    readAccelerationStrength () {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(1000 * this._sensors.accelerationStrength / G);
        }
        return this.updateAccelerometer()
            .then(() => 1000 * this._sensors.accelerationStrength / G);
    }

    /**
     * Called by the runtime when user wants to scan for a peripheral.
     */
    scan () {
        if (this._ble) {
            this._ble.disconnect();
        }
        this._ble = new BLE(this._runtime, this._extensionId, {
            filters: [
                {services: [MICROBIT_SERVICE.ID]}
            ],
            optionalServices: [MBITMORE_SERVICE.ID]
        }, this._onConnect, this.reset);
    }

    /**
     * Called by the runtime when user wants to connect to a certain peripheral.
     * @param {number} id - the id of the peripheral to connect to.
     */
    connect (id) {
        if (this._ble) {
            this._ble.getServices = () => this._ble.sendRemoteRequest('getServices')
                .catch(e => {
                    this._ble._handleRequestError(e);
                });
            this._ble.connectPeripheral(id);
            this.peripheralId = id;
        }
    }

    /**
     * Disconnect from the micro:bit.
     */
    disconnect () {
        if (this._ble) {
            this._ble.disconnect();
        }

        this.reset();
    }

    /**
     * Reset all the state and timeout/interval ids.
     */
    reset () {
        if (this._timeoutID) {
            window.clearTimeout(this._timeoutID);
            this._timeoutID = null;
        }
    }

    /**
     * Return true if connected to the micro:bit.
     * @return {boolean} - whether the micro:bit is connected.
     */
    isConnected () {
        let connected = false;
        if (this._ble) {
            connected = this._ble.isConnected();
        }
        return connected;
    }

    /**
     * Send a message to the peripheral BLE socket.
     * @param {number} command - the BLE command hex.
     * @param {Uint8Array} message - the message to write
     * @param {object} util - utility object provided by the runtime.
     */
    send (command, message, util) {
        if (!this.isConnected()) return;
        if (this._busy) {
            if (util) util.yield();
            return;
        }

        // Set a busy flag so that while we are sending a message and waiting for
        // the response, additional messages are ignored.
        this._busy = true;

        // Set a timeout after which to reset the busy flag. This is used in case
        // a BLE message was sent for which we never received a response, because
        // e.g. the peripheral was turned off after the message was sent. We reset
        // the busy flag after a while so that it is possible to try again later.
        this._busyTimeoutID = window.setTimeout(() => {
            this._busy = false;
        }, 5000);

        const output = new Uint8Array(message.length + 1);
        output[0] = command; // attach command to beginning of message
        for (let i = 0; i < message.length; i++) {
            output[i + 1] = message[i];
        }
        const data = Base64Util.uint8ArrayToBase64(output);

        this._ble.write(MICROBIT_SERVICE.ID, MICROBIT_SERVICE.TX, data, 'base64', true).then(
            () => {
                this._busy = false;
                window.clearTimeout(this._busyTimeoutID);
            }
        );
    }

    /**
     * Starts reading data from peripheral after BLE has connected to it.
     * @private
     */
    _onConnect () {
        this._ble.getServices()
            .then(services => {
                this._ble.startNotifications(MICROBIT_SERVICE.ID, MICROBIT_SERVICE.RX, this._updateMicrobitService);
                // Workaround for ScratchLink v.1.3.0 MacOS returns service id as distorted format,
                // such as "0000A62D574E-1B34-4092-8DEE-4151F63B2865-0000-1000-8000-00805f9b34fb".
                this._useMbitMoreService = typeof services.find(
                    element => element.toLowerCase().indexOf(MBITMORE_SERVICE.ID) !== -1) !== 'undefined';
                if (this._useMbitMoreService) {
                    // Microbit More service is available.
                    const config = Base64Util.uint8ArrayToBase64(Uint8Array.of(1)); // protocol ver.1.
                    this._ble.write(MBITMORE_SERVICE.ID, MBITMORE_SERVICE.CONFIG, config, 'base64', false);
                    this._ble.startNotifications(
                        MBITMORE_SERVICE.ID,
                        MBITMORE_SERVICE.SHARED_DATA,
                        this._updateMicrobitService);
                }
            });
        this._timeoutID = window.setTimeout(
            () => this._ble.handleDisconnectError(BLEDataStoppedError),
            BLETimeout
        );
    }

    /**
     * Process the sensor data from the incoming BLE characteristic.
     * @param {string} msg - the incoming BLE data.
     * @private
     */
    _updateMicrobitService (msg) {
        const data = Base64Util.base64ToUint8Array(msg);
        const dataView = new DataView(data.buffer, 0);
        const dataFormat = dataView.getInt8(19);
        if (dataFormat !== MBitMoreDataFormat.IO &&
            dataFormat !== MBitMoreDataFormat.ANSLOG_IN &&
            dataFormat !== MBitMoreDataFormat.LIGHT_SENSOR &&
            dataFormat !== MBitMoreDataFormat.ACCELEROMETER &&
            dataFormat !== MBitMoreDataFormat.MAGNETOMETER &&
            dataFormat !== MBitMoreDataFormat.SHARED_DATA) {
            // Read original micro:bit data.
            this._sensors.tiltX = data[1] | (data[0] << 8);
            if (this._sensors.tiltX > (1 << 15)) this._sensors.tiltX -= (1 << 16);
            this._sensors.tiltY = data[3] | (data[2] << 8);
            if (this._sensors.tiltY > (1 << 15)) this._sensors.tiltY -= (1 << 16);
    
            this._sensors.buttonA = dataView.getUint8(4);
            this._sensors.buttonB = dataView.getUint8(5);
    
            this._sensors.touchPins[0] = dataView.getUint8(6);
            this._sensors.touchPins[1] = dataView.getUint8(7);
            this._sensors.touchPins[2] = dataView.getUint8(8);
    
            this._sensors.gestureState = dataView.getUint8(9);
        }

        switch (dataView.getUint8(19)) {
        case MBitMoreDataFormat.MIX_01: {
            this._sensors.analogValue[this.analogIn[0]] = dataView.getUint16(10, true);
            this._sensors.analogValue[this.analogIn[1]] = dataView.getUint16(12, true);
            this._sensors.analogValue[this.analogIn[2]] = dataView.getUint16(14, true);
            this._sensors.compassHeading = dataView.getUint16(16, true);
            this._sensors.lightLevel = dataView.getUint8(18);
            break;
        }
        case MBitMoreDataFormat.MIX_02: {
            this._sensors.sharedData[0] = dataView.getInt16(10, true);
            this._sensors.sharedData[1] = dataView.getInt16(12, true);
            this._sensors.sharedData[2] = dataView.getInt16(14, true);
            this._sensors.sharedData[3] = dataView.getInt16(16, true);
            const gpioData = dataView.getUint8(18);
            for (let i = 0; i < this.gpio.length; i++) {
                this._sensors.digitalValue[this.gpio[i]] = (gpioData >> i) & 1;
            }
            break;
        }
        case MBitMoreDataFormat.MIX_03: {
            this._sensors.magneticStrength = dataView.getUint16(10, true);
            this._sensors.accelerationX = dataView.getInt16(12, true);
            this._sensors.accelerationY = dataView.getInt16(14, true);
            this._sensors.accelerationZ = dataView.getInt16(16, true);
            break;
        }
        case MBitMoreDataFormat.IO: {
            const gpioData = dataView.getUint8(0);
            for (let i = 0; i < this.gpio.length; i++) {
                this._sensors.digitalValue[this.gpio[i]] = (gpioData >> i) & 1;
            }
            break;
        }
        case MBitMoreDataFormat.ANSLOG_IN: {
            this._sensors.analogValue[this.analogIn[0]] = dataView.getUint16(0, true);
            this._sensors.analogValue[this.analogIn[1]] = dataView.getUint16(2, true);
            this._sensors.analogValue[this.analogIn[2]] = dataView.getUint16(4, true);
            break;
        }
        case MBitMoreDataFormat.LIGHT_SENSOR: {
            this._sensors.lightLevel = dataView.getUint8(0);
            break;
        }
        case MBitMoreDataFormat.ACCELEROMETER: {
            this._sensors.accelerationX = dataView.getInt16(0, true);
            this._sensors.accelerationY = dataView.getInt16(2, true);
            this._sensors.accelerationZ = dataView.getInt16(4, true);
            break;
        }
        case MBitMoreDataFormat.MAGNETOMETER: {
            this._sensors.compassHeading = dataView.getUint16(0, true);
            this._sensors.magneticStrength = dataView.getUint16(2, true);
            break;
        }
        case MBitMoreDataFormat.SHARED_DATA: {
            this._sensors.sharedData[0] = dataView.getInt16(0, true);
            this._sensors.sharedData[1] = dataView.getInt16(2, true);
            this._sensors.sharedData[2] = dataView.getInt16(4, true);
            this._sensors.sharedData[3] = dataView.getInt16(6, true);
            break;
        }
        default:
            break;
        }
        this.resetDisconnectTimeout();
    }

    /**
     * Cancel disconnect timeout and start counting again.
     */
    resetDisconnectTimeout () {
        window.clearTimeout(this._timeoutID);
        this._timeoutID = window.setTimeout(() => this._ble.handleDisconnectError(BLEDataStoppedError), BLETimeout);
    }

    /**
     * @param {number} pin - the pin to check touch state.
     * @return {number} - the latest value received for the touch pin states.
     * @private
     */
    _checkPinState (pin) {
        if (pin > 2) {
            return this.getDititalValue(pin);
        }
        return this._sensors.touchPins[pin];
    }

    /**
     * Return the digital value of the pin.
     * @param {number} pin - the pin to check.
     * @return {Promise} - Promise to get the latest value of digital input.
     */
    getDititalValue (pin) {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(this._sensors.digitalValue[pin]);
        }
        return new Promise(resolve => {
            this._ble.read(
                MBITMORE_SERVICE.ID,
                MBITMORE_SERVICE.IO,
                false)
                .then(result => {
                    const data = Base64Util.base64ToUint8Array(result.message);
                    const dataView = new DataView(data.buffer, 0);
                    const gpioData = dataView.getUint8(0);
                    for (let i = 0; i < this.gpio.length; i++) {
                        this._sensors.digitalValue[this.gpio[i]] = (gpioData >> i) & 1;
                    }
                    resolve(this._sensors.digitalValue[pin]);
                });
        });
    }

    /**
     * Return the analog value of the pin.
     * @param {number} pin - the pin to check.
     * @return {Promise} - Promise to get the latest value of analog input.
     */
    getAnalogValue (pin) {
        if (!this.isConnected()) {
            return Promise.resolve(0);
        }
        if (!this._useMbitMoreService) {
            return Promise.resolve(this._sensors.analogValue[pin]);
        }
        return new Promise(resolve => {
            this._ble.read(
                MBITMORE_SERVICE.ID,
                MBITMORE_SERVICE.ANSLOG_IN,
                false)
                .then(result => {
                    const data = Base64Util.base64ToUint8Array(result.message);
                    const dataView = new DataView(data.buffer, 0);
                    this._sensors.analogValue[this.analogIn[0]] = dataView.getUint16(0, true);
                    this._sensors.analogValue[this.analogIn[1]] = dataView.getUint16(2, true);
                    this._sensors.analogValue[this.analogIn[2]] = dataView.getUint16(4, true);
                    resolve(this._sensors.analogValue[pin]);
                });
        });
    }

    /**
     * Return the value of the shared data.
     * @param {number} index - the shared data index.
     * @return {number} - the latest value received for the shared data.
     */
    getSharedData (index) {
        return this._sensors.sharedData[index];
    }

    setSharedData (sharedDataIndex, sharedDataValue, util) {
        const dataView = new DataView(new ArrayBuffer(2));
        dataView.setInt16(0, sharedDataValue, true);
        this.send(BLECommand.CMD_SHARED_DATA_SET,
            new Uint8Array([
                sharedDataIndex,
                dataView.getUint8(0),
                dataView.getUint8(1)]),
            util);
        this._sensors.sharedData[sharedDataIndex] = sharedDataValue;
    }
}

/**
 * Enum for tilt sensor direction.
 * @readonly
 * @enum {string}
 */
const MicroBitTiltDirection = {
    FRONT: 'front',
    BACK: 'back',
    LEFT: 'left',
    RIGHT: 'right',
    ANY: 'any'
};

/**
 * Enum for micro:bit gestures.
 * @readonly
 * @enum {string}
 */
const MicroBitGestures = {
    MOVED: 'moved',
    SHAKEN: 'shaken',
    JUMPED: 'jumped'
};

/**
 * Enum for micro:bit buttons.
 * @readonly
 * @enum {string}
 */
const MicroBitButtons = {
    A: 'A',
    B: 'B',
    ANY: 'any'
};

/**
 * Enum for micro:bit pin states.
 * @readonly
 * @enum {string}
 */
const MicroBitPinState = {
    ON: 'on',
    OFF: 'off'
};

const DigitalValue = {
    LOW: '0',
    HIGH: '1'
};


/**
 * Enum for axis menu options.
 * @readonly
 * @enum {string}
 */
const AxisValues = {
    X: 'x',
    Y: 'y',
    Z: 'z',
    Absolute: 'absolute'
};

/**
 * Scratch 3.0 blocks to interact with a MicroBit peripheral.
 */
class MbitMoreBlocks {

    /**
     * @return {string} - the name of this extension.
     */
    static get EXTENSION_NAME () {
        return 'micro:bit more';
    }

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID () {
        return 'microbitMore';
    }

    /**
     * @return {number} - the tilt sensor counts as "tilted" if its tilt angle meets or exceeds this threshold.
     */
    static get TILT_THRESHOLD () {
        return 15;
    }

    /**
     * @return {array} - text and values for each buttons menu element
     */
    get BUTTONS_MENU () {
        return [
            {
                text: 'A',
                value: MicroBitButtons.A
            },
            {
                text: 'B',
                value: MicroBitButtons.B
            },
            {
                text: formatMessage({
                    id: 'microbit.buttonsMenu.any',
                    default: 'any',
                    description: 'label for "any" element in button picker for micro:bit extension'
                }),
                value: MicroBitButtons.ANY
            }
        ];
    }

    /**
     * @return {array} - text and values for each gestures menu element
     */
    get GESTURES_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microbit.gesturesMenu.moved',
                    default: 'moved',
                    description: 'label for moved gesture in gesture picker for micro:bit extension'
                }),
                value: MicroBitGestures.MOVED
            },
            {
                text: formatMessage({
                    id: 'microbit.gesturesMenu.shaken',
                    default: 'shaken',
                    description: 'label for shaken gesture in gesture picker for micro:bit extension'
                }),
                value: MicroBitGestures.SHAKEN
            },
            {
                text: formatMessage({
                    id: 'microbit.gesturesMenu.jumped',
                    default: 'jumped',
                    description: 'label for jumped gesture in gesture picker for micro:bit extension'
                }),
                value: MicroBitGestures.JUMPED
            }
        ];
    }

    /**
     * @return {array} - text and values for each pin state menu element
     */
    get PIN_STATE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microbit.pinStateMenu.on',
                    default: 'on',
                    description: 'label for on element in pin state picker for micro:bit extension'
                }),
                value: MicroBitPinState.ON
            },
            {
                text: formatMessage({
                    id: 'microbit.pinStateMenu.off',
                    default: 'off',
                    description: 'label for off element in pin state picker for micro:bit extension'
                }),
                value: MicroBitPinState.OFF
            }
        ];
    }

    /**
     * @return {array} - text and values for each tilt direction menu element
     */
    get TILT_DIRECTION_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microbit.tiltDirectionMenu.front',
                    default: 'front',
                    description: 'label for front element in tilt direction picker for micro:bit extension'
                }),
                value: MicroBitTiltDirection.FRONT
            },
            {
                text: formatMessage({
                    id: 'microbit.tiltDirectionMenu.back',
                    default: 'back',
                    description: 'label for back element in tilt direction picker for micro:bit extension'
                }),
                value: MicroBitTiltDirection.BACK
            },
            {
                text: formatMessage({
                    id: 'microbit.tiltDirectionMenu.left',
                    default: 'left',
                    description: 'label for left element in tilt direction picker for micro:bit extension'
                }),
                value: MicroBitTiltDirection.LEFT
            },
            {
                text: formatMessage({
                    id: 'microbit.tiltDirectionMenu.right',
                    default: 'right',
                    description: 'label for right element in tilt direction picker for micro:bit extension'
                }),
                value: MicroBitTiltDirection.RIGHT
            }
        ];
    }

    /**
     * @return {array} - text and values for each tilt direction (plus "any") menu element
     */
    get TILT_DIRECTION_ANY_MENU () {
        return [
            ...this.TILT_DIRECTION_MENU,
            {
                text: formatMessage({
                    id: 'microbit.tiltDirectionMenu.any',
                    default: 'any',
                    description: 'label for any direction element in tilt direction picker for micro:bit extension'
                }),
                value: MicroBitTiltDirection.ANY
            }
        ];
    }

    get ANALOG_IN_MENU () {
        return this._peripheral.analogIn.map(pinIndex => pinIndex.toString());
    }

    get SHARED_DATA_INDEX_MENU () {
        const menu = [];
        for (let i = 0; i < this._peripheral.sharedDataLength; i++) {
            menu.push(i.toString());
        }
        return menu;
    }

    get GPIO_MENU () {
        return this._peripheral.gpio.map(pinIndex => pinIndex.toString());
    }

    get DIGITAL_VALUE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'mbitMore.digitalValueMenu.Low',
                    default: 'Low',
                    description: 'label for low value in digital output menu for microbit more extension'
                }),
                value: DigitalValue.LOW
            },
            {
                text: formatMessage({
                    id: 'mbitMore.digitalValueMenu.High',
                    default: 'High',
                    description: 'label for high value in digital output menu for microbit more extension'
                }),
                value: DigitalValue.HIGH}
        ];
    }

    get AXIS_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'mbitMore.axisMenu.x',
                    default: 'x',
                    description: 'label of X axis.'
                }),
                value: AxisValues.X
            },
            {
                text: formatMessage({
                    id: 'mbitMore.axisMenu.y',
                    default: 'y',
                    description: 'label of Y axis.'
                }),
                value: AxisValues.Y
            },
            {
                text: formatMessage({
                    id: 'mbitMore.axisMenu.z',
                    default: 'z',
                    description: 'label of Z axis.'
                }),
                value: AxisValues.Z
            },
            {
                text: formatMessage({
                    id: 'mbitMore.axisMenu.absolute',
                    default: 'absolute',
                    description: 'label of absolute value.'
                }),
                value: AxisValues.Absolute
            }
        ];
    }


    /**
     * Construct a set of MicroBit blocks.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        // Create a new MicroBit peripheral instance
        this._peripheral = new MbitMore(this.runtime, MbitMoreBlocks.EXTENSION_ID);
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        this.setupTranslations();
        return {
            id: MbitMoreBlocks.EXTENSION_ID,
            name: MbitMoreBlocks.EXTENSION_NAME,
            blockIconURI: blockIconURI,
            showStatusButton: true,
            blocks: [
                {
                    opcode: 'whenButtonPressed',
                    text: formatMessage({
                        id: 'microbit.whenButtonPressed',
                        default: 'when [BTN] button pressed',
                        description: 'when the selected button on the micro:bit is pressed'
                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                        BTN: {
                            type: ArgumentType.STRING,
                            menu: 'buttons',
                            defaultValue: MicroBitButtons.A
                        }
                    }
                },
                {
                    opcode: 'isButtonPressed',
                    text: formatMessage({
                        id: 'microbit.isButtonPressed',
                        default: '[BTN] button pressed?',
                        description: 'is the selected button on the micro:bit pressed?'
                    }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        BTN: {
                            type: ArgumentType.STRING,
                            menu: 'buttons',
                            defaultValue: MicroBitButtons.A
                        }
                    }
                },
                '---',
                {
                    opcode: 'whenGesture',
                    text: formatMessage({
                        id: 'microbit.whenGesture',
                        default: 'when [GESTURE]',
                        description: 'when the selected gesture is detected by the micro:bit'
                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                        GESTURE: {
                            type: ArgumentType.STRING,
                            menu: 'gestures',
                            defaultValue: MicroBitGestures.MOVED
                        }
                    }
                },
                '---',
                {
                    opcode: 'displaySymbol',
                    text: formatMessage({
                        id: 'microbit.displaySymbol',
                        default: 'display [MATRIX]',
                        description: 'display a pattern on the micro:bit display'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        MATRIX: {
                            type: ArgumentType.MATRIX,
                            defaultValue: '0101010101100010101000100'
                        }
                    }
                },
                {
                    opcode: 'displayText',
                    text: formatMessage({
                        id: 'microbit.displayText',
                        default: 'display text [TEXT]',
                        description: 'display text on the micro:bit display'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'microbit.defaultTextToDisplay',
                                default: 'Hello!',
                                description: `default text to display.
                                IMPORTANT - the micro:bit only supports letters a-z, A-Z.
                                Please substitute a default word in your language
                                that can be written with those characters,
                                substitute non-accented characters or leave it as "Hello!".
                                Check the micro:bit site documentation for details`
                            })
                        }
                    }
                },
                {
                    opcode: 'displayClear',
                    text: formatMessage({
                        id: 'microbit.clearDisplay',
                        default: 'clear display',
                        description: 'display nothing on the micro:bit display'
                    }),
                    blockType: BlockType.COMMAND
                },
                '---',
                {
                    opcode: 'whenTilted',
                    text: formatMessage({
                        id: 'microbit.whenTilted',
                        default: 'when tilted [DIRECTION]',
                        description: 'when the micro:bit is tilted in a direction'
                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                        DIRECTION: {
                            type: ArgumentType.STRING,
                            menu: 'tiltDirectionAny',
                            defaultValue: MicroBitTiltDirection.ANY
                        }
                    }
                },
                {
                    opcode: 'isTilted',
                    text: formatMessage({
                        id: 'microbit.isTilted',
                        default: 'tilted [DIRECTION]?',
                        description: 'is the micro:bit is tilted in a direction?'
                    }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        DIRECTION: {
                            type: ArgumentType.STRING,
                            menu: 'tiltDirectionAny',
                            defaultValue: MicroBitTiltDirection.ANY
                        }
                    }
                },
                {
                    opcode: 'getTiltAngle',
                    text: formatMessage({
                        id: 'microbit.tiltAngle',
                        default: 'tilt angle [DIRECTION]',
                        description: 'how much the micro:bit is tilted in a direction'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        DIRECTION: {
                            type: ArgumentType.STRING,
                            menu: 'tiltDirection',
                            defaultValue: MicroBitTiltDirection.FRONT
                        }
                    }
                },
                '---',
                {
                    opcode: 'whenPinConnected',
                    text: formatMessage({
                        id: 'microbit.whenPinConnected',
                        default: 'when pin [PIN] connected',
                        description: 'when the pin detects a connection to Earth/Ground'

                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                        PIN: {
                            type: ArgumentType.STRING,
                            menu: 'gpio',
                            defaultValue: '0'
                        }
                    }
                },
                '---',
                {
                    opcode: 'isPinConnected',
                    text: formatMessage({
                        id: 'mbitMore.isPinConnected',
                        default: '[PIN] pin connected?',
                        description: 'is the selected pin connected to Earth/Ground?'
                    }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        PIN: {
                            type: ArgumentType.STRING,
                            menu: 'gpio',
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'getLightLevel',
                    text: formatMessage({
                        id: 'mbitMore.lightLevel',
                        default: 'light intensity',
                        description: 'how much the amount of light falling on the LEDs on micro:bit'
                    }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getCompassHeading',
                    text: formatMessage({
                        id: 'mbitMore.compassHeading',
                        default: 'angle with the North',
                        description: 'angle from the North to the micro:bit heading direction'
                    }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getMagneticForce',
                    text: formatMessage({
                        id: 'mbitMore.magneticForce',
                        default: 'magnetic force',
                        description: 'value of magnetic force (micro tesla)'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        AXIS: {
                            type: ArgumentType.STRING,
                            menu: 'axis',
                            defaultValue: formatMessage({
                                id: 'mbitMore.axisMenu.absolute',
                                default: 'absolute',
                                description: 'label of absolute value.'
                            })
                        }
                    }
                },
                {
                    opcode: 'getAcceleration',
                    text: formatMessage({
                        id: 'mbitMore.acceleration',
                        default: 'acceleration [AXIS]',
                        description: 'value of acceleration on the axis (milli-g)'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        AXIS: {
                            type: ArgumentType.STRING,
                            menu: 'axis',
                            defaultValue: AxisValues.X
                        }
                    }
                },
                {
                    opcode: 'getAnalogValue',
                    text: formatMessage({
                        id: 'mbitMore.analogValue',
                        default: 'analog in pin [PIN]',
                        description: 'analog input value of the pin'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        PIN: {
                            type: ArgumentType.STRING,
                            menu: 'analogIn',
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'getSharedData',
                    text: formatMessage({
                        id: 'mbitMore.getSharedData',
                        default: 'shared data [INDEX]',
                        description: 'value of the shared data'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        INDEX: {
                            type: ArgumentType.STRING,
                            menu: 'sharedDataIndex',
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'setSharedData',
                    text: formatMessage({
                        id: 'mbitMore.setSharedData',
                        default: 'shared data [INDEX] to [VALUE]',
                        description: 'set value into the shared data'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        INDEX: {
                            type: ArgumentType.STRING,
                            menu: 'sharedDataIndex',
                            defaultValue: '0'
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setInput',
                    text: formatMessage({
                        id: 'mbitMore.setInput',
                        default: 'set [PIN] Input',
                        description: 'set pin to Input mode'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        PIN: {
                            type: ArgumentType.STRING,
                            menu: 'gpio',
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'setOutput',
                    text: formatMessage({
                        id: 'mbitMore.setOutput',
                        default: 'set [PIN] Digital [LEVEL]',
                        description: 'set pin to Digtal Output mode and the level(0 or 1)'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        PIN: {
                            type: ArgumentType.STRING,
                            menu: 'gpio',
                            defaultValue: '0'
                        },
                        LEVEL: {
                            type: ArgumentType.STRING,
                            menu: 'digitalValue',
                            defaultValue: DigitalValue.LOW
                        }
                    }
                },
                {
                    opcode: 'setPWM',
                    text: formatMessage({
                        id: 'mbitMore.setPWM',
                        default: 'set [PIN] PWM [LEVEL]',
                        description: 'set pin to PWM mode and the level(0 to 1023)'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        PIN: {
                            type: ArgumentType.STRING,
                            menu: 'gpio',
                            defaultValue: '0'
                        },
                        LEVEL: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setServo',
                    text: formatMessage({
                        id: 'mbitMore.setServo',
                        default: 'set [PIN] Servo [ANGLE]',
                        description: 'set pin to Servo mode and the angle(0 to 180)'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        PIN: {
                            type: ArgumentType.STRING,
                            menu: 'gpio',
                            defaultValue: '0'
                        },
                        ANGLE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        RANGE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2000
                        },
                        CENTER: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1500
                        }
                    }
                }
            ],
            menus: {
                buttons: {
                    acceptReporters: true,
                    items: this.BUTTONS_MENU
                },
                gestures: {
                    acceptReporters: true,
                    items: this.GESTURES_MENU
                },
                pinState: {
                    acceptReporters: true,
                    items: this.PIN_STATE_MENU
                },
                tiltDirection: {
                    acceptReporters: true,
                    items: this.TILT_DIRECTION_MENU
                },
                tiltDirectionAny: {
                    acceptReporters: true,
                    items: this.TILT_DIRECTION_ANY_MENU
                },
                analogIn: {
                    acceptReporters: true,
                    items: this.ANALOG_IN_MENU
                },
                digitalValue: {
                    acceptReporters: true,
                    items: this.DIGITAL_VALUE_MENU
                },
                sharedDataIndex: {
                    acceptReporters: true,
                    items: this.SHARED_DATA_INDEX_MENU
                },
                gpio: {
                    acceptReporters: true,
                    items: this.GPIO_MENU
                },
                axis: {
                    acceptReporters: true,
                    items: this.AXIS_MENU
                }
            }
        };
    }

    /**
     * Test whether the A or B button is pressed
     * @param {object} args - the block's arguments.
     * @return {boolean} - true if the button is pressed.
     */
    whenButtonPressed (args) {
        if (args.BTN === 'any') {
            return this._peripheral.buttonA | this._peripheral.buttonB;
        } else if (args.BTN === 'A') {
            return this._peripheral.buttonA;
        } else if (args.BTN === 'B') {
            return this._peripheral.buttonB;
        }
        return false;
    }

    /**
     * Test whether the A or B button is pressed
     * @param {object} args - the block's arguments.
     * @return {boolean} - true if the button is pressed.
     */
    isButtonPressed (args) {
        if (args.BTN === 'any') {
            return (this._peripheral.buttonA | this._peripheral.buttonB) !== 0;
        } else if (args.BTN === 'A') {
            return this._peripheral.buttonA !== 0;
        } else if (args.BTN === 'B') {
            return this._peripheral.buttonB !== 0;
        }
        return false;
    }

    /**
     * Test whether the micro:bit is moving
     * @param {object} args - the block's arguments.
     * @return {boolean} - true if the micro:bit is moving.
     */
    whenGesture (args) {
        const gesture = cast.toString(args.GESTURE);
        if (gesture === 'moved') {
            return (this._peripheral.gestureState >> 2) & 1;
        } else if (gesture === 'shaken') {
            return this._peripheral.gestureState & 1;
        } else if (gesture === 'jumped') {
            return (this._peripheral.gestureState >> 1) & 1;
        }
        return false;
    }

    /**
     * Display a predefined symbol on the 5x5 LED matrix.
     * @param {object} args - the block's arguments.
     * @return {Promise} - a Promise that resolves after a tick.
     */
    displaySymbol (args) {
        const symbol = cast.toString(args.MATRIX).replace(/\s/g, '');
        const reducer = (accumulator, c, index) => {
            const value = (c === '0') ? accumulator : accumulator + Math.pow(2, index);
            return value;
        };
        const hex = symbol.split('').reduce(reducer, 0);
        if (hex !== null) {
            this._peripheral.ledMatrixState[0] = hex & 0x1F;
            this._peripheral.ledMatrixState[1] = (hex >> 5) & 0x1F;
            this._peripheral.ledMatrixState[2] = (hex >> 10) & 0x1F;
            this._peripheral.ledMatrixState[3] = (hex >> 15) & 0x1F;
            this._peripheral.ledMatrixState[4] = (hex >> 20) & 0x1F;
            this._peripheral.displayMatrix(this._peripheral.ledMatrixState);
        }

        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, BLESendInterval);
        });
    }

    /**
     * Display text on the 5x5 LED matrix.
     * @param {object} args - the block's arguments.
     * @return {Promise} - a Promise that resolves after the text is done printing.
     * Note the limit is 19 characters
     * The print time is calculated by multiplying the number of horizontal pixels
     * by the default scroll delay of 120ms.
     * The number of horizontal pixels = 6px for each character in the string,
     * 1px before the string, and 5px after the string.
     */
    displayText (args) {
        const text = String(args.TEXT).substring(0, 19);
        if (text.length > 0) this._peripheral.displayText(text);
        const yieldDelay = 120 * ((6 * text.length) + 6);

        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, yieldDelay);
        });
    }

    /**
     * Turn all 5x5 matrix LEDs off.
     * @return {Promise} - a Promise that resolves after a tick.
     */
    displayClear () {
        for (let i = 0; i < 5; i++) {
            this._peripheral.ledMatrixState[i] = 0;
        }
        this._peripheral.displayMatrix(this._peripheral.ledMatrixState);

        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, BLESendInterval);
        });
    }

    /**
     * Test whether the tilt sensor is currently tilted.
     * @param {object} args - the block's arguments.
     * @property {TiltDirection} DIRECTION - the tilt direction to test (front, back, left, right, or any).
     * @return {boolean} - true if the tilt sensor is tilted past a threshold in the specified direction.
     */
    whenTilted (args) {
        return this._isTilted(args.DIRECTION);
    }

    /**
     * Test whether the tilt sensor is currently tilted.
     * @param {object} args - the block's arguments.
     * @property {TiltDirection} DIRECTION - the tilt direction to test (front, back, left, right, or any).
     * @return {boolean} - true if the tilt sensor is tilted past a threshold in the specified direction.
     */
    isTilted (args) {
        return this._isTilted(args.DIRECTION);
    }

    /**
     * @param {object} args - the block's arguments.
     * @property {TiltDirection} DIRECTION - the direction (front, back, left, right) to check.
     * @return {number} - the tilt sensor's angle in the specified direction.
     * Note that getTiltAngle(front) = -getTiltAngle(back) and getTiltAngle(left) = -getTiltAngle(right).
     */
    getTiltAngle (args) {
        return this._getTiltAngle(args.DIRECTION);
    }

    /**
     * Test whether the tilt sensor is currently tilted.
     * @param {TiltDirection} direction - the tilt direction to test (front, back, left, right, or any).
     * @return {boolean} - true if the tilt sensor is tilted past a threshold in the specified direction.
     * @private
     */
    _isTilted (direction) {
        switch (direction) {
        case MicroBitTiltDirection.ANY:
            return (Math.abs(this._peripheral.tiltX / 10) >= MbitMoreBlocks.TILT_THRESHOLD) ||
                (Math.abs(this._peripheral.tiltY / 10) >= MbitMoreBlocks.TILT_THRESHOLD);
        default:
            return this._getTiltAngle(direction) >= MbitMoreBlocks.TILT_THRESHOLD;
        }
    }

    /**
     * @param {TiltDirection} direction - the direction (front, back, left, right) to check.
     * @return {number} - the tilt sensor's angle in the specified direction.
     * Note that getTiltAngle(front) = -getTiltAngle(back) and getTiltAngle(left) = -getTiltAngle(right).
     * @private
     */
    _getTiltAngle (direction) {
        switch (direction) {
        case MicroBitTiltDirection.FRONT:
            return Math.round(this._peripheral.tiltY / -10);
        case MicroBitTiltDirection.BACK:
            return Math.round(this._peripheral.tiltY / 10);
        case MicroBitTiltDirection.LEFT:
            return Math.round(this._peripheral.tiltX / -10);
        case MicroBitTiltDirection.RIGHT:
            return Math.round(this._peripheral.tiltX / 10);
        default:
            log.warn(`Unknown tilt direction in _getTiltAngle: ${direction}`);
        }
    }

    /**
     * @param {object} args - the block's arguments.
     * @return {boolean} - the touch pin state.
     * @private
     */
    whenPinConnected (args) {
        const pin = parseInt(args.PIN, 10);
        if (isNaN(pin)) return;
        if (!this.GPIO_MENU.includes(pin.toString())) return false;
        return this._peripheral._checkPinState(pin);
    }

    // Mbit More extended functions

    /**
     * Test the selected pin is connected to the ground.
     * @param {object} args - the block's arguments.
     * @return {boolean} - true if the pin is connected.
     */
    isPinConnected (args) {
        const pin = parseInt(args.PIN, 10);
        if (isNaN(pin)) return false;
        if (!this.GPIO_MENU.includes(pin.toString())) return false;
        return this._peripheral._checkPinState(pin);
    }

    /**
     * Get amount of light (0 - 255) on the LEDs.
     * @return {Promise} - a Promise that resolves light level.
     */
    getLightLevel () {
        return this._peripheral.readLightLevel();
    }

    /**
     * Return angle from the north to the micro:bit heading direction.
     * @return {Promise} - a Promise that resolves compass heading angle from the north (0 - 359 degrees).
     */
    getCompassHeading () {
        return this._peripheral.readCompassHeading();
    }

    /**
     * Return analog value of the pin.
     * @param {object} args - the block's arguments.
     * @return {Promise} - a Promise that resolves analog input value of the pin.
     */
    getAnalogValue (args) {
        const pin = parseInt(args.PIN, 10);
        if (isNaN(pin)) return 0;
        if (pin < 0 || pin > 2) return 0;
        return this._peripheral.readAnalogIn(pin);
    }

    /**
     * Return value of the shared data.
     * @param {object} args - the block's arguments.
     * @property {string} args.INDEX - index of the shared data.
     * @return {number} - analog value of the shared data.
     */
    getSharedData (args) {
        const sharedDataIndex = parseInt(args.INDEX, 10);
        if (Number.isNaN(sharedDataIndex)) return 0;
        if (!this.SHARED_DATA_INDEX_MENU.includes(sharedDataIndex.toString())) return 0;
        return this._peripheral.getSharedData(sharedDataIndex);
    }

    /**
     * Set the shared data value.
     * @param {object} args - the block's arguments.
     * @property {string} args.INDEX - index of the shared data.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */
    setSharedData (args, util) {
        const sharedDataIndex = parseInt(args.INDEX, 10);
        if (Number.isNaN(sharedDataIndex)) return;
        if (!this.SHARED_DATA_INDEX_MENU.includes(sharedDataIndex.toString())) return;
        const sharedDataValue = parseInt(args.VALUE, 10);
        if (Number.isNaN(sharedDataValue)) return;
        this._peripheral.setSharedData(sharedDataIndex, sharedDataValue, util);
    }

    /**
     * Set the pin to Input mode.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */
    setInput (args, util) {
        const pin = parseInt(args.PIN, 10);
        if (isNaN(pin)) return;
        if (pin < 0 || pin > 20) return;
        this._peripheral.setPinInput(pin, util);
    }

    /**
     * Set the pin to Output mode and level.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */
    setOutput (args, util) {
        const pin = parseInt(args.PIN, 10);
        if (isNaN(pin)) return;
        if (pin < 0 || pin > 20) return;
        let level = parseInt(args.LEVEL, 10);
        if (isNaN(level)) return;
        level = Math.max(0, level);
        level = Math.min(level, 1);
        this._peripheral.setPinOutput(pin, level, util);
    }

    /**
     * Set the pin to PWM mode and level.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */
    setPWM (args, util) {
        const pin = parseInt(args.PIN, 10);
        if (isNaN(pin)) return;
        if (pin < 0 || pin > 20) return;
        let level = parseInt(args.LEVEL, 10);
        if (isNaN(level)) return;
        level = Math.max(0, level);
        level = Math.min(level, 1023);
        this._peripheral.setPinPWM(pin, level, util);
    }

    /**
     * Set the pin to Servo mode and angle.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @return {undefined}
     */
    setServo (args, util) {
        const pin = parseInt(args.PIN, 10);
        if (isNaN(pin)) return;
        if (pin < 0 || pin > 20) return;
        let angle = parseInt(args.ANGLE, 10);
        if (isNaN(angle)) return;
        angle = Math.max(0, angle);
        angle = Math.min(angle, 180);
        // let range = parseInt(args.RANGE, 10);
        // if (isNaN(range)) range = 0;
        // range = Math.max(0, range);
        // let center = parseInt(args.CENTER, 10);
        // if (isNaN(center)) range = 0;
        // center = Math.max(0, center);
        this._peripheral.setPinServo(pin, angle, null, null, util);
    }

    /**
     * Return the value of magnetic force [micro tesla] on axis.
     * @param {object} args - the block's arguments.
     * @property {AxisValues} AXIS - the axis (X, Y, Z, Absolute).
     * @return {Promise} -  a Promise that resolves value of magnetic force.
     */
    getMagneticForce (args) {
        switch (args.AXIS) {
        case AxisValues.X:
        case this.AXIS_MENU.find(item => (item.value === AxisValues.X)).text:
            return this._peripheral.readMagneticForceX();
        case AxisValues.Y:
        case this.AXIS_MENU.find(item => (item.value === AxisValues.Y)).text:
            return this._peripheral.readMagneticForceY();
        case AxisValues.Z:
        case this.AXIS_MENU.find(item => (item.value === AxisValues.Z)).text:
            return this._peripheral.readMagneticForceZ();
        case AxisValues.Absolute:
        case this.AXIS_MENU.find(item => (item.value === AxisValues.Absolute)).text:
            return this._peripheral.readMagneticStrength();
        default:
            log.warn(`Unknown axis in getMagneticForce: ${args.AXIS}`);
        }
    }

    /**
     * Return the value of acceleration on the specified axis.
     * @param {object} args - the block's arguments.
     * @property {AxisValues} AXIS - the axis (X, Y, Z).
     * @return {Promise} - a Promise that resolves acceleration on the axis [milli-g].
     */
    getAcceleration (args) {
        switch (args.AXIS) {
        case AxisValues.X:
        case this.AXIS_MENU.find(item => (item.value === AxisValues.X)).text:
            return this._peripheral.readAccelerationX();
        case AxisValues.Y:
        case this.AXIS_MENU.find(item => (item.value === AxisValues.Y)).text:
            return this._peripheral.readAccelerationY();
        case AxisValues.Z:
        case this.AXIS_MENU.find(item => (item.value === AxisValues.Z)).text:
            return this._peripheral.readAccelerationZ();
        case AxisValues.Absolute:
        case this.AXIS_MENU.find(item => (item.value === AxisValues.Absolute)).text:
            return this._peripheral.readAccelerationStrength();
        default:
            log.warn(`Unknown axis in getAcceleration: ${args.AXIS}`);
        }
    }

    setupTranslations () {
        const localeSetup = formatMessage.setup();
        const extTranslations = {
            'ja': {
                'mbitMore.isPinConnected': 'ピン [PIN] がつながっているか?',
                'mbitMore.lightLevel': '明るさ',
                'mbitMore.compassHeading': '北からの角度',
                'mbitMore.magneticForce': '磁力 [AXIS]',
                'mbitMore.acceleration': '加速度 [AXIS]',
                'mbitMore.analogValue': 'ピン [PIN] のアナログレベル',
                'mbitMore.getSharedData': '共有データ [INDEX]',
                'mbitMore.setSharedData': '共有データ [INDEX] を [VALUE] にする',
                'mbitMore.setInput': 'ピン [PIN] を入力モードにする',
                'mbitMore.setOutput': 'ピン [PIN] をデジタルレベル [LEVEL] にする',
                'mbitMore.setPWM': 'ピン [PIN] をアナログレベル [LEVEL] にする',
                'mbitMore.setServo': 'ピン [PIN] をサーボ [ANGLE] 度にする',
                'mbitMore.digitalValueMenu.Low': 'Low',
                'mbitMore.digitalValueMenu.High': 'High',
                'mbitMore.axisMenu.x': 'x',
                'mbitMore.axisMenu.y': 'y',
                'mbitMore.axisMenu.z': 'z',
                'mbitMore.axisMenu.absolute': '大きさ'
            },
            'ja-Hira': {
                'mbitMore.isPinConnected': 'ピン [PIN] がつながっているか?',
                'mbitMore.lightLevel': 'あかるさ',
                'mbitMore.compassHeading': 'きたからのかくど',
                'mbitMore.magneticForce': 'じりょく [AXIS]',
                'mbitMore.acceleration': 'かそくど [AXIS]',
                'mbitMore.analogValue': 'ピン [PIN] のアナログレベル',
                'mbitMore.getSharedData': 'きょうゆうデータ [INDEX]',
                'mbitMore.setSharedData': 'きょうゆうデータ [INDEX] を [VALUE] にする',
                'mbitMore.setInput': 'ピン [PIN] をにゅうりょくモードにする',
                'mbitMore.setOutput': 'ピン [PIN] をデジタルレベル [LEVEL] にする',
                'mbitMore.setPWM': 'ピン [PIN] をアナログレベル [LEVEL] にする',
                'mbitMore.setServo': 'ピン [PIN] をサーボ [ANGLE] どにする',
                'mbitMore.digitalValueMenu.Low': 'ロー',
                'mbitMore.digitalValueMenu.High': 'ハイ',
                'mbitMore.axisMenu.x': 'x',
                'mbitMore.axisMenu.y': 'y',
                'mbitMore.axisMenu.z': 'z',
                'mbitMore.axisMenu.absolute': 'おおきさ'
            },
            'pt-br': {
                'mbitMore.isPinConnected': 'O Pino[PIN] está conectado?',
                'mbitMore.lightLevel': 'Intensidade da Luz',
                'mbitMore.compassHeading': 'Está em direção ao Norte',
                'mbitMore.magneticForce': 'Força Magnética [AXIS]',
                'mbitMore.acceleration': 'Aceleração no Eixo[AXIS]',
                'mbitMore.analogValue': 'Ler Pino Analógico [PIN]',
                'mbitMore.getSharedData': 'Dados compartilhados [INDEX]',
                'mbitMore.setSharedData': 'Definir dados compartilhados [INDEX] com valor [VALUE]',
                'mbitMore.setInput': 'Definir Pino[PIN] como entrada',
                'mbitMore.setOutput': 'Definir pino digital[PIN] como:[LEVEL]',
                'mbitMore.setPWM': 'Definir pino PWM[PIN]com[LEVEL]',
                'mbitMore.setServo': 'Definir Servo no pino [PIN]com ângulo de [ANGLE]॰',
                'mbitMore.digitalValueMenu.Low': 'desligado',
                'mbitMore.digitalValueMenu.High': 'ligado'
            },
            'pt': {
                'mbitMore.isPinConnected': 'O Pino[PIN] está conectado?',
                'mbitMore.lightLevel': 'Intensidade da Luz',
                'mbitMore.compassHeading': 'Está em direção ao Norte',
                'mbitMore.magneticForce': 'Força Magnética [AXIS]',
                'mbitMore.acceleration': 'Aceleração no Eixo[AXIS]',
                'mbitMore.analogValue': 'Ler Pino Analógico [PIN]',
                'mbitMore.getSharedData': 'Dados compartilhados [INDEX]',
                'mbitMore.setSharedData': 'Definir dados compartilhados [INDEX] com valor [VALUE]',
                'mbitMore.setInput': 'Definir Pino[PIN] como entrada',
                'mbitMore.setOutput': 'Definir pino digital[PIN] como:[LEVEL]',
                'mbitMore.setPWM': 'Definir pino PWM[PIN]com[LEVEL]',
                'mbitMore.setServo': 'Definir Servo no pino [PIN]com ângulo de [ANGLE]॰',
                'mbitMore.digitalValueMenu.Low': 'desligado',
                'mbitMore.digitalValueMenu.High': 'ligado'
            }
        };
        for (const locale in extTranslations) {
            if (!localeSetup.translations[locale]) {
                localeSetup.translations[locale] = {};
            }
            Object.assign(localeSetup.translations[locale], extTranslations[locale]);
        }
    }
}

module.exports = MbitMoreBlocks;
