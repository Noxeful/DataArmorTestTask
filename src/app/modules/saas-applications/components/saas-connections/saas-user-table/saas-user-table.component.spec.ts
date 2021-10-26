import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasUserTableComponent } from './saas-user-table.component';

describe('TableComponent', () => {
  let component: SaasUserTableComponent;
  let fixture: ComponentFixture<SaasUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasUserTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
