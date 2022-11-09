import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgiaHeaderComponent } from './georgia-header.component';

describe('GeorgiaHeaderComponent', () => {
  let component: GeorgiaHeaderComponent;
  let fixture: ComponentFixture<GeorgiaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeorgiaHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeorgiaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
