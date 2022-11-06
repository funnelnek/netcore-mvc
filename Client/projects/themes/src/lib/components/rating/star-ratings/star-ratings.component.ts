import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent implements OnInit {
  @Input()
  score: number = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

}
