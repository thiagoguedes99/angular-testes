import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   declarations: [ HospitalComponent ]
    // })
    //.compileComponents();


    // webpack deixa o html e js no mesmo lugar, ou seja,
    //usar "async" e "compileComponents" não é necessário.
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
