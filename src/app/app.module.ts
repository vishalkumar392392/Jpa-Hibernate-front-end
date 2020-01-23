import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentDetailsComponent } from './student-list/student-details.component';
import { CoursesComponent } from './courses/courses.component';
import { PassportComponent } from './passport/passport.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReviewsComponent } from './reviews/reviews.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentEnrolledComponent } from './student-enrolled/student-enrolled.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EnrollCoursesComponent } from './enroll-courses/enroll-courses.component';

const routes:Routes=[
  {path:"",component:WelcomeComponent},
  {path:"students",component:StudentDetailsComponent},
  {path:"courses",component:CourseListComponent},
  {path:"students-enrolled/:id",component:StudentEnrolledComponent},
  {path:"courses/:id",component:CoursesComponent},
  {path:"reviews/:id",component:ReviewsComponent},
  {path:"add-student",component:AddStudentComponent},
  {path:"enroll-courses/:id",component:EnrollCoursesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentDetailsComponent,
    CoursesComponent,
    PassportComponent,
    ReviewsComponent,
    CourseListComponent,
    StudentEnrolledComponent,
    AddStudentComponent,
    EnrollCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
