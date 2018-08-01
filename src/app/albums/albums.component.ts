import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumData : any;
  constructor(private albumService : AlbumService) { }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum(){
    this.albumService.getAlbums().subscribe(data=>{
      console.log(data);
      this.albumData = data;
    });
  }
}
