import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {

  result:string;

  constructor(private _spotifyService: SpotifyService) { }

  getDataApi(){
    this._spotifyService.getArtistApi()
    .subscribe(data => {
      this.result = JSON.stringify(data, null, 2);
    });
  }
  

  ngOnInit() {
    this.getDataApi();
  }

}
