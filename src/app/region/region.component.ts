import { Component, OnInit } from '@angular/core';
import { RegionService } from './region.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
 

export class RegionComponent implements OnInit {
  
  records : any;

  constructor(private regionService:RegionService) { }

  ngOnInit() {
    console.log("Constructor Called");
    debugger;
    this.regionService.getViewData().subscribe(data=>{
         console.log("We Got ", data);
         this.records = data;
       }); // just a way to hand async call;
  }
}
