import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgiaGalleryComponent } from './georgia-gallery.component';

describe('GeorgiaGalleryComponent', () => {
  let component: GeorgiaGalleryComponent;
  let fixture: ComponentFixture<GeorgiaGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeorgiaGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeorgiaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
