import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBaseComponent } from './base.component';

describe('ButtonBaseComponent', () => {
  let component: ButtonBaseComponent;
  let fixture: ComponentFixture<ButtonBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
