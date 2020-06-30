const EventEmmiter = require('events');

// const emmiter = new EventEmmiter();

// emmiter.on('anything', data => {
//     console.log('ON: anything', data);
// })

// emmiter.emit('anything', {a:1});
// emmiter.emit('anything', {b:1});

class Dispatcher extends EventEmmiter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]');
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]');
        this.emit(eventName, data)
    }
}


