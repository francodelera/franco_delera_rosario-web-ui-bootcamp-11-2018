import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../../Artist';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {

  searchinput: string;
  searchResult : Artist[];

  constructor(private _spotifyService: SpotifyService) { }

  searchMusic(){
       this._spotifyService.getToken()
         .subscribe(res => {
             this._spotifyService.searchMusic(this.searchinput ,'artist' , res.access_token)
               .subscribe(res=> {
                 this.searchResult = res.artists.items;
                 this.setDataApi(this.searchinput);
                //  console.log("searchmusic" + this.searchinput);
            })
         })
         
    }  

    getDataApi(){
      this._spotifyService.getArtistApi()
      .subscribe(data => {
        console.log(data);
      });
    }

    setDataApi(param:string){
      this._spotifyService.addArtist(param).subscribe();

    }
    
  ngOnInit() {
    this.getDataApi();
  }

}
