import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import{RouterModule,Routes}  from'@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './menu/home/home.component';
import { HotelsComponent } from './menu/home/hotels/hotels.component';
import { FootrComponent } from './footr/footr.component';
import { ImgComponent } from './img/img.component';
import { HelpComponent } from './help/help.component';
import { DateComponent } from './date/date.component';
import { CarComponent } from './car/car.component';
import { RegistrationComponent } from './registration/registration.component';

const myPath : Routes =[
  {
    path : "hotels", component :HotelsComponent,
  },
  {
    path :"help",component : HelpComponent
  },
  {
    path:"home",component:HomeComponent
  }
  ,{
    path:"car",component:CarComponent
  }
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(myPath) ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, HomeComponent, HotelsComponent, FootrComponent, ImgComponent, HelpComponent, DateComponent, CarComponent, RegistrationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
