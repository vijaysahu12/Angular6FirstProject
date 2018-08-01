import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http:HttpClient) { }

readonly urlAlbums = 'https://jsonplaceholder.typicode.com/photos';

  getAlbums(){
    return this.http.get(this.urlAlbums);
  }
}
