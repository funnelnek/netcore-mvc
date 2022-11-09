import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgiaFooterComponent } from './georgia-footer.component';

describe('GeorgiaFooterComponent', () => {
  let component: GeorgiaFooterComponent;
  let fixture: ComponentFixture<GeorgiaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeorgiaFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeorgiaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
