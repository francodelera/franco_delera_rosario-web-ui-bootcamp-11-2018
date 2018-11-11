import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Movie Listing App';

  msg:string = '';

  movies = [
    { 'title' : 'Terminator', 'year' : '1985', 'duration': '60 min'},
    { 'title' : 'Back to the Future', 'year' : '1985', 'duration': '116 min'},
    { 'title' : 'Star Wars', 'year' : '1977', 'duration': '121 min'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addMovie():void {
    this.movies.push(this.model);
    this.msg = 'Movie has been successfully added.';
  }

  deleteMovie(i):void {
    let answer = confirm('Are you sure you want to delete this item?');

    if (answer) {
      this.movies.splice(i, 1);
    }

    this.msg = 'The movie has been successfully removed.';
  }

  myValue;
  editMovie(i):void {
    this.model2.title = this.movies[i].title;
    this.model2.year = this.movies[i].year;
    this.model2.duration = this.movies[i].duration;
    this.myValue = i;
    this.hideUpdate = false;
  }

  updateMovie():void {
  let i = this.myValue;
  for(let j = 0; j < this.movies.length ; j++){
    if( i == j) {
      this.movies[i] = this.model2;
      this.msg = 'Movie has been successfully updated.'
      this.model2 = {};
    }
  } 
  }

  closeAlert():void {
    this.msg = '';
  }
}
