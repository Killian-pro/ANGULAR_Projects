import { Component, OnInit } from '@angular/core';
import { PonyModel } from '../models/pony.model';
import { PONYSJSON } from '../JsonData/ponyJson';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css'],
})
export class PonyComponent implements OnInit {
  ponys: PonyModel[] = [];

  ngOnInit(): void {
    this.ponys = PONYSJSON;
  }
}
