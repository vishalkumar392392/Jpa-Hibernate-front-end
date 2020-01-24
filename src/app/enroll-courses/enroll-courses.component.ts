import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';
import { Observable } from 'rxjs';
import { Course } from '../course';

@Component({
  selector: 'app-enroll-courses',
  templateUrl: './enroll-courses.component.html',
  styleUrls: ['./enroll-courses.component.css']
})
export class EnrollCoursesComponent implements OnInit {

  student_id:number;
  courses:Observable<Course[]>;
  constructor(private route:ActivatedRoute,private service:Service,private router:Router) { }

  ngOnInit() {
     
   this.student_id= this.route.snapshot.params['id'];
   this.service.getCourses().subscribe(data=>{
    this.courses = data;
    console.log(this.courses)
  })
  }

  getReviewsbyCourseId(id:number){

    this.router.navigate(['reviews',id]);

  }
  enrollNow(course_id:any){

    this.service.getEnrolledToCourse(this.student_id,course_id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['courses',this.student_id]);

    })
    
  }

}
