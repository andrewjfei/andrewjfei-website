import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsConfigurationComponent } from './events-configuration.component';

describe('EventsConfigurationComponent', () => {
  let component: EventsConfigurationComponent;
  let fixture: ComponentFixture<EventsConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
