import { Injectable } from '@angular/core';
import { Http , Headers , Response } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private client_id ='20b2c84641aa4d31b2c45d3f8a16d532';
  private client_secret = '153ce17625974737867ba6190dfe7ea8';
  private searchURL: string;
  private artistURL: string;
  private albumsURL: string;
  private singleAlbumURL: string;
  private encoded = btoa(this.client_id + ':' + this.client_secret);
  
  constructor( private http: Http ) {

  }
  getToken(){
     var params = ('grant_type=client_credentials');

     var headers = new Headers();
     headers.append( 'Authorization', 'Basic ' + this.encoded);
     headers.append('Content-Type' , 'application/x-www-form-urlencoded');

     return this.http.post('https://accounts.spotify.com/api/token', params, {headers : headers} )
     .map(res=> res.json());
  }
  //Need to install Allow-Control-Allow-Origin: extension on Chrome. Otherwise it won't work

  searchMusic(str:string, type='artist',token:string){
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    this.searchURL = 'https://api.spotify.com/v1/search?q=' + str + '&offset=0&&limit=20&type=' +type;
    return this.http.get(this.searchURL, {headers : headers}).map((res:Response) => res.json()); 
  }

  getArtist(id:string, token:string){
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    this.artistURL = 'https://api.spotify.com/v1/artists/' + id;
    return this.http.get(this.artistURL, {headers : headers}).map((res:Response) => res.json()); 
  }

  getAlbums(id:string, token:string){
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    this.albumsURL = 'https://api.spotify.com/v1/artists/' + id + '/albums';
    return this.http.get(this.albumsURL, {headers : headers}).map((res:Response) => res.json()); 
  }

  getSingleAlbum(id:string, token:string){
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    this.singleAlbumURL = 'https://api.spotify.com/v1/albums/' + id;
    return this.http.get(this.singleAlbumURL, {headers : headers}).map((res:Response) => res.json()); 
  }

  searchApi(query:string) {
    const urlApi = `http://localhost:3000/${query}`;
    // console.log(urlApi + " en search api");
    return this.http.get(urlApi);
  }

  getArtistApi(){
    return this.searchApi("getJson").map(data => data.json());
  }

  addArtist(param:string) {
    return this.searchApi(`search/${param}`);
  }
}
