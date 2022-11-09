import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SocialHandler } from '../../contracts';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  private _socialMedia!: Observable<(SocialHandler & { icon?: string })[]>;

  constructor (
    private route: ActivatedRoute
  ) { }

  get socialMedia(): Observable<(SocialHandler & { icon?: string })[]> {
    return this._socialMedia;
  }

  ngOnInit(): void {
    this._socialMedia = this.route.data.pipe(
      map(d => {
        let profiles = d['socialMedia'] as SocialHandler[];

        console.log(profiles);
        return profiles.map(profile => {
          switch (profile.site) {
            case "facebook":
              return { ...profile, icon: 'fab fa-facebook-square' }
            case "instagram":
              return { ...profile, icon: 'fab fa-instagram' }
            case "google-plus":
              return { ...profile, icon: 'fab fa-google-plus-square' }
            case "youtube":
              return { ...profile, icon: 'fab fa-youtube' }   
            default: return profile         
          }
        });        
      })
    );
  }

}
