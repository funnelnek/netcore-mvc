import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandHomeComponent } from './grand-home.component';

describe('GrandHomeComponent', () => {
  let component: GrandHomeComponent;
  let fixture: ComponentFixture<GrandHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
