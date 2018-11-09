export class EventEmitter { 
    constructor() { 
        this.events = {};
    }

    on(eventName, callback) { 
        if (this.events[eventName]) { 
            this.events[eventName].push(callback);  
        } else {
            this.events[eventName] = [callback]; 
        }
    }

    emit(eventName, movieName) {
        const event = this.events[eventName]; 
        if (event) { 
            event.forEach(func => {
                func.call(null, movieName); 
            });
        }
        else {
            console.log(`The event ${eventName} doesn't exist`);
        }
    }

    off(eventName, toRemove) {
        if (!!this.events[eventName]) {
            this.events[eventName].forEach((movieObj, index) => { 
                if (movieObj.movieName === toRemove) { 
                    this.events[eventName].splice(index, 1);
                }
            })
        }
    }
}