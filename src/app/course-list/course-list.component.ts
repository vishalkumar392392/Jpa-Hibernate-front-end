import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses:Observable<Course[]>;
  constructor(private service:Service,private router:Router) { }

  ngOnInit() {

    this.service.getCourses().subscribe(data=>{
      this.courses = data;
      console.log(this.courses)
    })
  }

  getReviewsbyCourseId(id:number){

    this.router.navigate(['reviews',id]);

  }

  studentsEnrolled(id:number){
    this.router.navigate(['students-enrolled',id]);
  }

}
