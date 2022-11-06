import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login-scene',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginSceneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form: FormGroup): void {
    
  }
}
