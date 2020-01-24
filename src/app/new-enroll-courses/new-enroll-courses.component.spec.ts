import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnrollCoursesComponent } from './new-enroll-courses.component';

describe('NewEnrollCoursesComponent', () => {
  let component: NewEnrollCoursesComponent;
  let fixture: ComponentFixture<NewEnrollCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEnrollCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnrollCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
