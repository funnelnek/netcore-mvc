import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Gallery } from '../../contracts';


@Component({
  selector: 'georgia-gallery',
  templateUrl: './georgia-gallery.component.html',
  styleUrls: ['./georgia-gallery.component.scss']
})
export class GeorgiaGalleryComponent implements OnInit {
  private _gallery!: Observable<Gallery[]>;

  constructor (
    private route: ActivatedRoute
  ) { }

  get gallery(): Observable<Gallery[]> {
    return this._gallery;
  }

  ngOnInit(): void {
    this._gallery = this.route.data.pipe(
      map(d => {
        console.log(d['gallery']);
       return d['gallery'] as Gallery[]
      })
    );
  }
}
