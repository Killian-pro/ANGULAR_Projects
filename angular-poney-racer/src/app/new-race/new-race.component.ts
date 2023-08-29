import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-new-race',
  templateUrl: './new-race.component.html',
  styleUrls: ['./new-race.component.css'],
})
export class NewRaceComponent {
  constructor(private router: Router, private raceService: RaceService) {}
  add(location: string, pony1: string, pony2: string, pony3: string): void {
    if (!location || !pony1 || !pony2 || !pony3) {
      return;
    }
    this.raceService.add(location, pony1, pony2, pony3);
    this.router.navigate(['race']);
  }
}
