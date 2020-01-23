import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrolledComponent } from './student-enrolled.component';

describe('StudentEnrolledComponent', () => {
  let component: StudentEnrolledComponent;
  let fixture: ComponentFixture<StudentEnrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEnrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
