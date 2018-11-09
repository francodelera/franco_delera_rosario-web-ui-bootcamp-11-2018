
class EventEmitter { //We start by creating the EventEmitter class and initialize the events property as an empty object
    constructor() { //The purpose of the events property is to store our events name as the key and the value as an array of things (i.e., functions).
        this.events = {};
    }

    on(eventName, callback) { //takes the event name, and the function to call when someone emits ( or screaming ) the event.
        if (this.events[eventName]) { //if the event exists
            this.events[eventName].push(callback);  //then we push to this array the function that we want to execute when someone emits the event.
        } else {
            this.events[eventName] = [callback]; //if it doesn't exist stores the function on the array events
        }
    }

    emit(eventName, movieName) {
        const event = this.events[eventName]; //The emit function takes the event name that we want to “scream” and the data that we want to send with this event
        if (event) { //If the event exists in our events map
            event.forEach(func => {
                func.call(null, movieName); //we are looping over the functions that we registered in the "on()" method and call them with the data.
            });
        }
        else {
            console.log(`The event ${eventName} doesn't exist`);
        }
    }

    off(eventName, toRemove) {
        if (!!this.events[eventName]) {
            this.events[eventName].forEach((movieObj, index) => { //we are looping over the values that are on the array this.events, with its current value and index
                if (movieObj.movieName === toRemove) { //if the value we had is the same as the one we are passing through (and want to remove)
                    this.events[eventName].splice(index, 1); //then remove that event which is located in that index
                }
            })
        }
    }
}

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
    



class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Logger {
    constructor() {}

    log(info){
        console.log(`The ${info} event has been emitted`);
        }
}

let social  = {

    share: function (friendname){
        console.log(`${friendname} shared your movie ${this.name}`);
    },

    like: function (friendname) {
        console.log(`${friendname} liked your movie ${this.name}`);
    }
};

//Movies
let bfuture = new Movie("Back to the Future", "1985", "116 min");
let lordrings = new Movie("Lord of the Rings: The fellowship of the Ring", "2001", "178 min");
let starwars = new Movie("StarWars", "1977", "121 min");
const terminator = new Movie('Terminator I', 1985, 60);


//Actors
let michaelfox = new Actor("Michael J. Fox", "57");
let viggoMortensen = new Actor("Viggo Mortensen", "60");
let harrisonford = new Actor("Harrison Ford", "76");
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actorsArr = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

//Testing
bfuture.on("play", function() {console.log("Playing movie")});
bfuture.play(); //Playing movie
bfuture.pause(); //The event pause doesn't exist
lordrings.on("pause", function() {console.log("Movie paused")});
lordrings.pause(); //Movie paused

starwars.addCast(harrisonford);
terminator.addCast(arnold);
terminator.addCast(actorsArr);
console.log(starwars.castList[0]); //Harrison Ford
console.log(terminator.castList[0]);//Arnold Schwarzenegger

//This function below is just for testing, not asked
function viewcast(movie) {
for(i=0; i < movie.castList.length; i++){
console.log(`The cast from ${movie.name} is `, movie.castList[i]);
}
}

viewcast(starwars);
viewcast(terminator);


let logger = new Logger();
terminator.on("play", logger.log);
terminator.play();
terminator.pause();

const ironman = new Movie("Ironman", "2010", "120 min");
Object.assign(ironman, social);
ironman.share("Pedro");
ironman.like("Pablo");

//Calling the EventEmitter with inputs and buttons

let input = document.getElementById('mn');
let input2 = document.getElementById('evt');

let emitter = new EventEmitter();

document.getElementById('addButton').addEventListener('click', () => {
    emitter.on(input2.value, data => {
        console.log(`Movie Added: ${data.movieName}`);
    });

    document.getElementById('emitButton').addEventListener('click', () => {
        emitter.emit(input2.value, { movieName: input.value });
    });

    document.getElementById('removeButton').addEventListener('click', () => {
        emitter.off(input2.value, { movieName: input.value });
    });
});
