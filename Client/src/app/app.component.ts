import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _control!: FormControl<string | null>;

  constructor() {
  }

  get control(): FormControl<string | null> {
    return this._control;
  }

  async ngOnInit(): Promise<void> {    
    let control = this._control = new FormControl('');
  
    control.valueChanges.subscribe(console.log);
  }
}
