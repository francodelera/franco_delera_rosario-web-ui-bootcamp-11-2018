class Movie {

    constructor(name, year, duration) {
      this.name = name;
      this.year = year;
      this.duration = duration;
    }
  
    play() {
      console.log("Movie: " + this.name + " is now playing.");
    }

    pause() {
        console.log("Movie: " + this.name + " is paused.");
      }

    resume(){
        console.log("Movie: " + this.name + " is resumed.");
    }
  
  }

  class Actor {
      constructor(name, age) {
          this.name = name;
          this.age = age;
      }
  }

  class EventEmitter { //We start by creating the EventEmitter class and initialize the events property as an empty object
      constructor(){ //The purpose of the events property is to store our events name as the key and the value as an array of things (i.e., functions).
          this.events = {};
      }

      on(eventName, callback){ //takes the event name, and the function to call when someone emits ( or screaming ) the event.
              if (this.events[eventName]) { //if the event exists
              this.events[eventName].push(callback);  //then we push to this array the function that we want to execute when someone emits the event.
          } else {
              this.events[eventName] = [callback]; //if it doesn't exist stores the function on the array events
          }
      }
      
      emit(eventName, movieName){
        const event = this.events[eventName]; //The emit function takes the event name that we want to “scream” and the data that we want to send with this event
        if( event ) { //If the event exists in our events map
          event.forEach(func => {
             func.call(null, movieName); //we are looping over the functions that we registered in the "on()" method and call them with the data.
           });
         }
      }

      off(eventName, toRemove){
        if(!!events[eventName]) {
            events[eventName].forEach((movieObj, index) => { //we are looping over the values that are on the array events, with its current value and index
                if (movieObj.movieName === toRemove) { //if the value we had is the same as the one we are passing through (and want to remove)
                    events[eventName].splice(index, 1); //then remove that event which is located in that index
                }
            })
        }
  }
}
  
  //Movies
  let bfuture = new Movie("Back to the Future", "1985", "116 min");
  let lordrings = new Movie("Lord of the Rings: The fellowship of the Ring", "2001", "178 min");
  let interstellar = new Movie("Interstellar", "2014", "169 min");
  let starwars = new Movie("StarWars", "1977", "121 min");

  //Actors
  let michaelfox = new Actor("Michael J. Fox", "57");
  let viggoMortensen = new Actor("Viggo Mortensen", "60");
  let harrisonford = new Actor("Harrison Ford", "76");
  let matthew = new Actor("Matthew McConaughey","49");

  //Testing
  console.log(bfuture.year);
  bfuture.play();
  bfuture.pause();
  console.log("La pelicula: " + lordrings.name + " se filmó en: " + lordrings.year + " y tiene una duración de: " + lordrings.duration);
  console.log("La pelicula: " + interstellar.name + " se filmó en: " + interstellar.year + " y tiene una duración de: " + interstellar.duration);

  
  //Calling the EventEmitter


  document.addEventListener("DOMContentLoaded", function(event) {

  let input = document.querySelector('input[type="text"]');
  let button = document.querySelector('button');
  let h1 = document.querySelector('h1');

  button.addEventListener('click', () => {
  emitter.emit('event:playMovie', {name: input.value});
    });

    let emitter = new EventEmitter();
  emitter.on('event:playMovie', data => {
    h1.innerHTML = `The movie you are playing is: ${data.name}`;
  });

  });