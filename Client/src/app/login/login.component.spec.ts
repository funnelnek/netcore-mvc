import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSceneComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginSceneComponent;
  let fixture: ComponentFixture<LoginSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSceneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
