import { Injectable } from '@angular/core';
import { RaceModel } from './models/race.model';
import { RACEJSON } from './JsonData/raceJson';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  races: RaceModel[] = [...RACEJSON];
  race: RaceModel[] = [];

  add(location: string, pony1: string, pony2: string, pony3: string) {
    this.races.push({
      id: this.races.length + 1,
      name: location,
      ponies: [
        {
          name: pony1,
          color: 'GREEN',
        },
        {
          name: pony2,
          color: 'ORANGE',
        },
        {
          name: pony3,
          color: 'PURPLE',
        },
      ],
    });
  }

  delete(raceId: number) {
    let indexToDell = this.races.findIndex((el) => el.id === raceId);
    if (indexToDell !== -1) {
      this.races.splice(indexToDell, 1);
    }
  }

  // £ Utilisation de Observable
  getRaces(): Observable<RaceModel[]> {
    return of(this.races);
  }

  getRaceById(id: number): Observable<RaceModel> {
    const race = this.races.find((rc) => rc.id === id);

    if (race) {
      return of(race);
    } else {
      return of();
    }
  }
}
