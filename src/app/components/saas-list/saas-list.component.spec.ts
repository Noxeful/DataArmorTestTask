import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasListComponent } from './saas-list.component';

describe('SaasListComponent', () => {
  let component: SaasListComponent;
  let fixture: ComponentFixture<SaasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
