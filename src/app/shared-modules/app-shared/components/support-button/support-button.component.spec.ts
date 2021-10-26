import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportButtonComponent } from './support-button.component';

describe('SupportComponent', () => {
  let component: SupportButtonComponent;
  let fixture: ComponentFixture<SupportButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
