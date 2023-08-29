import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { RaceModel } from '../models/race.model';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css'],
})
export class RaceComponent implements OnInit {
  races: RaceModel[] = [];

  constructor(private raceService: RaceService) {}
  ngOnInit(): void {
    this.races = this.raceService.getRace();
  }
  delete(id: number) {
    this.raceService.delete(id);
  }
}
