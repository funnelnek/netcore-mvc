import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SocialHandler } from '../../contracts';


@Component({
  selector: 'georgia-footer',
  templateUrl: './georgia-footer.component.html',
  styleUrls: ['./georgia-footer.component.scss']
})
export class GeorgiaFooterComponent implements OnInit {
  constructor () {}

  ngOnInit(): void {
    
  }
}
