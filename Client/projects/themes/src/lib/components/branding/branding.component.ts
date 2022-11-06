import { Component, HostBinding } from '@angular/core';
import { ApplicationService } from '@client/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent {
  
  constructor(private app: ApplicationService) {
  }

  @HostBinding("class")
  get className(): string {
    return "branding";
  }

  get name(): Observable<string> {
    return this.app.name;
  }
}
