import { Injectable } from '@angular/core';
import { RaceModel } from './models/race.model';
import { RACEJSON } from './JsonData/raceJson';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  races: RaceModel[] = [...RACEJSON];

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
      // this.races = this.races.slice(0, indexToDell);
    }
    console.log(indexToDell);
  }

  getRace() {
    return this.races;
  }
}
