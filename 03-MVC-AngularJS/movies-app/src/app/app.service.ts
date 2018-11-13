import { Injectable } from '@angular/core';
import { Movie } from './models/movie';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  moviesArray: Movie[] = [
    {index: 1, title: 'Terminator', year:'1985', duration: '90 min'},
    {index: 2, title: 'StarWars', year:'1984', duration: '60 min'},
    {index: 3, title: 'Ironman', year:'2009', duration: '95 min'}
  ]
  constructor() { }
}

