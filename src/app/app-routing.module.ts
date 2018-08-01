import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceComponent } from './service/service.component';
import { RegionComponent } from './region/region.component';
import { PlannedEventsComponent } from './planned-events/planned-events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumsComponent } from './albums/albums.component';

const routes :Routes=[
  {path:'', component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'album',component:AlbumsComponent},
  {path:'region',component:RegionComponent},
  {path:'PlannedEventsComponent',component:PlannedEventsComponent},
  {path:'service',component:ServiceComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

