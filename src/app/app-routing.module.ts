import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{path:"navbar",component:NavbarComponent},
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"appointment", component:AppointmentComponent},
  {path:"viewappointment", component:ViewappointmentComponent},
  {path:"about", component:AboutComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
