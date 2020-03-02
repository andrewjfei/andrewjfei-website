import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalConfigurationComponent } from './personal-configuration.component';

describe('PersonalConfigurationComponent', () => {
  let component: PersonalConfigurationComponent;
  let fixture: ComponentFixture<PersonalConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
