import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPreviewButtonComponent } from './quick-preview-button.component';

describe('QuickPreviewButtonComponent', () => {
  let component: QuickPreviewButtonComponent;
  let fixture: ComponentFixture<QuickPreviewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickPreviewButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickPreviewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
