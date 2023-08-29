import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyComponent } from './pony/pony.component';
import { RaceComponent } from './race/race.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { LoginComponent } from './login/login.component';
import { NewRaceComponent } from './new-race/new-race.component';

@NgModule({
  declarations: [
    AppComponent,
    PonyComponent,
    RaceComponent,
    DashboardComponent,
    RaceDetailComponent,
    LoginComponent,
    NewRaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
