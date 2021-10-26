import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasConnectionsHeaderComponent } from './saas-connections-header.component';

describe('HeaderComponent', () => {
  let component: SaasConnectionsHeaderComponent;
  let fixture: ComponentFixture<SaasConnectionsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasConnectionsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasConnectionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
