import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgiaHomeComponent } from './gallery-home.component';

describe('GalleryHomeComponent', () => {
  let component: GeorgiaHomeComponent;
  let fixture: ComponentFixture<GeorgiaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeorgiaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeorgiaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
