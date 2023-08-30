import { Component } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';
import { ActivatedRoute } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css'],
})
export class RaceDetailComponent {
  race!: RaceModel;
  animationsEnabled = true;
  winner: string = '';

  constructor(
    private raceService: RaceService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private router: Router
  ) {}

  getRandomMove(): number {
    return Math.floor(Math.random() * 4);
  }

  goBack() {
    this.router.navigate(['race']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');
      if (idString !== null) {
        const id = +idString;
        this.raceService.getRaceById(id).subscribe((race: RaceModel) => {
          this.race = race;
        });
      }
    });
  }
  ngAfterViewInit(): void {
    const ponyImages = document.querySelectorAll('.moveRight');
    let winnerFound = false;

    if (!this.winner) {
      ponyImages.forEach((element, index) => {
        if (winnerFound) {
          return;
        }

        if (element instanceof HTMLElement) {
          const image = element as HTMLImageElement;
          const intervalId = setInterval(() => {
            if (winnerFound) {
              clearInterval(intervalId);
              return;
            }
            const delay = this.getRandomMove();
            let currentPosition = parseFloat(
              image.style.transform.split('(')[1]
            );
            currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
            const moveDistance = delay / 6;

            currentPosition += moveDistance;
            this.renderer.setStyle(
              image,
              'transform',
              `translateX(${currentPosition}vw)`
            );

            if (currentPosition > 80) {
              winnerFound = true;
              clearInterval(intervalId);
              setInterval(() => {
                this.winner = this.race.ponies[index].name;
              }, 500);
            }
          }, 16);
        }
      });
    } else {
      return;
    }
  }
}
