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
        console.log(this.events[eventName]);
        if (this.events[eventName]) {
              this.events[eventName].push(callback);  //then we push to this array the function that we want to execute when someone emits the event.
          } else {
              this.events[eventName] = [callback]; 
          }
          console.log(this.events[eventName]);
      }
      
      emit(eventName, ...rest){
        console.log(this.events[eventName]);
          if(this.events[eventName]) {
              this.events[eventName].forEach(cb => cb.apply(null, rest))
          }
          console.log(this.events[eventName]);
      }

      off(eventName, callback){
     /*   if (this.events[eventName]) {
            this.events[eventName].pop(callback);
        } else {
            this.events[eventName] = [callback];
        }
      }*/
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

  const ee = new EventEmitter();

  ee.on('change', () => {
      console.log('hello there!');
  })

  ee.emit('change');