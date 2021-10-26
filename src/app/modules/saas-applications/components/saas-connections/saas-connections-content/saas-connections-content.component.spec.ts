import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasConnectionsContentComponent } from './saas-connections-content.component';

describe('HeaderComponent', () => {
  let component: SaasConnectionsContentComponent;
  let fixture: ComponentFixture<SaasConnectionsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasConnectionsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasConnectionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
