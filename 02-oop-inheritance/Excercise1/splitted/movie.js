import { EventEmitter } from 'eventEmitter.js'

class Movie extends EventEmitter{

    constructor(name, year, duration) {
        super();
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.castList = [];
    }

    play() {
        super.emit('play');
    }

    pause() {
        super.emit('pause');
    }

    resume() {
        super.emit('resume');
    }

    addCast(cast){
            if (cast instanceof Actor) { //if the actor we are passing through is an object of the class Actor
                this.castList.push(cast); //then add it to the castList of that movie
            }
            else if (Array.isArray(cast)) { //if it's not just one, but some of them at the same time (array)
                for (let i = 0; i < cast.length; i++) {
                    if (cast[i] instanceof Actor) { //if that actor of that index is an object of the class Actor
                        this.castList.push(cast[i]); //then add it to the classList of that movie
                    }
                    else {
                        console.log(`Error: ${cast[i]} isn't an actor`); //if it's not an array of Actors
                    }
                }
            }
            else {
                console.log(`Error: ${cast} isn't an actor`); //if it's not just a simple Actor
            }
        }
    }
