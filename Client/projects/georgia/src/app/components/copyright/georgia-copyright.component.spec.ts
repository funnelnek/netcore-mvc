import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgiaCopyrightComponent } from './georgia-copyright.component';

describe('GeorgiaCopyrightComponent', () => {
  let component: GeorgiaCopyrightComponent;
  let fixture: ComponentFixture<GeorgiaCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeorgiaCopyrightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeorgiaCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
