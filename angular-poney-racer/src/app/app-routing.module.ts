import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RaceComponent } from './race/race.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { LoginComponent } from './login/login.component';
import { NewRaceComponent } from './new-race/new-race.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'race', component: RaceComponent },
  { path: 'newRace', component: NewRaceComponent },
  { path: 'raceDetail/:id', component: RaceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
