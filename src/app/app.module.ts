import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { RegionComponent } from './region/region.component';
import { PlannedEventsComponent } from './planned-events/planned-events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module'
import {HttpClientModule} from '@angular/common/http'
import { RegionService } from './region/region.service';
import { AlbumsComponent } from './albums/albums.component';
@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    RegionComponent,
    PlannedEventsComponent,
    DashboardComponent,
    AlbumsComponent
    
  ],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule],
  providers: [RegionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
