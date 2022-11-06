import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '@client/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  constructor(private admin: AdministratorService) { }

  get title(): Observable<string | null> {
    return this.admin.title;
  }

  get name(): Observable<string | null> {
    return this.admin.name;
  }

  get avatar(): Observable<string | null> {
    return this.admin.avatar;
  }

  ngOnInit(): void {
  }

}
