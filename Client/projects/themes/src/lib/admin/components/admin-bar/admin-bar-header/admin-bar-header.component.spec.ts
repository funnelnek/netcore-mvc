import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBarHeaderComponent } from './admin-bar-header.component';

describe('AdminBarHeaderComponent', () => {
  let component: AdminBarHeaderComponent;
  let fixture: ComponentFixture<AdminBarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBarHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
