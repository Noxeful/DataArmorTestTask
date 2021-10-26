import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasApplicationsGeneralComponent } from './saas-applications-general.component';

describe('SaasApplicationsComponent', () => {
  let component: SaasApplicationsGeneralComponent;
  let fixture: ComponentFixture<SaasApplicationsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasApplicationsGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasApplicationsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
