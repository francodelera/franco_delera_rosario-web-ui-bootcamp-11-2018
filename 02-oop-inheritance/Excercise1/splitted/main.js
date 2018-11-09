import { EventEmitter } from 'eventEmitter.js';
import { Movie } from 'movie.js';
import { Actor } from 'actor.js';
import { Logger } from 'logger.js';

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
console.log(`The full cast from ${movie.name} is `);
for(i=0; i < movie.castList.length; i++){
console.log(movie.castList[i]);
}
}

viewcast(starwars);
viewcast(terminator);


let logger = new Logger();
terminator.on("play", logger.log);
terminator.on("pause", logger.log);
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
