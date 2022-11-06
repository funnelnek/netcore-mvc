import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginCredential } from '@client/core';
import { AuthenicationService } from '@client/store';
import { LoginForm } from './controls/login.control';
import { LoginControl } from './types';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form = LoginForm;

  @Output()
  submitted: EventEmitter<FormGroup<LoginControl>> = new EventEmitter<FormGroup<LoginControl>>();
  
  constructor(
    private auth: AuthenicationService
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.form.valid) {
      let credential = this.form.value as LoginCredential;
  
      this.auth.login(credential);
      this.submitted.emit(this.form);
    }
  }
}
