const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${Date.now()}: ${message}`);
    }
}

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello world');