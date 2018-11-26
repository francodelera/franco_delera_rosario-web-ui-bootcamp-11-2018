import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../Album';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  singleAlbum: Album[];
  constructor(private _spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.map(params => params['id'])
    .subscribe((id) => { this._spotifyService.getToken()
      .subscribe(data => { this._spotifyService.getSingleAlbum(id, data.access_token)
        .subscribe(singleAlbum => {this.singleAlbum = singleAlbum;})

     this._spotifyService.getSingleAlbum(id, data.access_token)
                    .subscribe(singleAlbum => {
                      this.singleAlbum = singleAlbum.items; })
          
      })
    })
  }

}
