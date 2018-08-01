import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RegionService {

  readonly root_url = "https://jsonplaceholder.typicode.com";
  posts: any;

  constructor(private http: HttpClient) { }
 
  getViewData(){
    return this.http.get(this.root_url+ "/posts");
  }
}

