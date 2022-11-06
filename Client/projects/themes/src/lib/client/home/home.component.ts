import { Component, OnInit } from '@angular/core';
import { IUser } from '@client/core';


@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  get user(): IUser {
    return this._user;
  }

  get name(): string {
    let user = this.user;
    return user.firstname + " " + user.lastname;
  }
  
}
