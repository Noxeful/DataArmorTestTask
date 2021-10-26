import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasConnectionsListComponent } from './saas-connections-list.component';

describe('SaasListComponent', () => {
  let component: SaasConnectionsListComponent;
  let fixture: ComponentFixture<SaasConnectionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasConnectionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasConnectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
