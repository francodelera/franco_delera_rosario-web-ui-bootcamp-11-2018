import { Component } from '@angular/core';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies App';

  selectedMovie: Movie = new Movie();
   
  moviesArray: Movie[] = [
    {index: 1, title: 'Terminator', year:'1985', duration: '90 min'},
    {index: 2, title: 'StarWars', year:'1984', duration: '60 min'},
    {index: 3, title: 'Ironman', year:'2009', duration: '95 min'}
  ]

  addOrEdit():void {

    if(this.selectedMovie.index === 0) {
      this.selectedMovie.index = this.moviesArray.length + 1;
      this.moviesArray.push(this.selectedMovie);
    }
    this.selectedMovie = new Movie();
  }

  openForEdit(movie: Movie) {
    this.selectedMovie = movie;
  }

  delete():void {
    if( confirm("Are you sure you want to delete this item?") ){
    this.moviesArray = this.moviesArray.filter(x => x != this.selectedMovie);
    this.selectedMovie = new Movie();
  }
  }

  }

