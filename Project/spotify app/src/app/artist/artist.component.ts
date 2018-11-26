import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];
  constructor(private _spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.map(params => params['id'])
    .subscribe((id) => { this._spotifyService.getToken()
      .subscribe(data => { this._spotifyService.getArtist(id, data.access_token)
        .subscribe(artist => {this.artist = artist;})

     this._spotifyService.getAlbums(id, data.access_token)
                    .subscribe(albums => {
                      this.albums = albums.items; })
          
      })
    })
  }
}