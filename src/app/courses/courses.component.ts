import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { Service } from '../service';
import { Student } from '../student';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  id:number;
  student:Student;
  courses:Observable<Course[]>;
  constructor(private route:ActivatedRoute,private service:Service,private router:Router) { }

  ngOnInit() {

    this.id=this.route.snapshot.params['id'];
    this.service.getStudentById(this.id).subscribe(data=>{
      this.student = data;
    })
    this.service.getcoursesByStudentId(this.id).subscribe(data=>{
      this.courses = data;
      console.log(this.courses)
    })
  }

  getReviewsbyCourseId(id:number){

    this.router.navigate(['reviews',id]);

  }

  enrollCourses(id:number){
    this.router.navigate(['enroll-courses',id]);
  }


}
