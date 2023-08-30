import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { RaceModel } from '../models/race.model';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css'],
})
export class RaceComponent implements OnInit {
  races$?: Observable<RaceModel[]>;
  token: boolean = false;

  // £ utilisation des services
  constructor(
    private raceService: RaceService,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.races$ = this.raceService.getRaces();
    this.token = this.loginService.token;
  }
  delete(id: number) {
    this.raceService.delete(id);
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
