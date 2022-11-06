import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPreviewComponent } from './quick-preview.component';

describe('QuickPreviewComponent', () => {
  let component: QuickPreviewComponent;
  let fixture: ComponentFixture<QuickPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
