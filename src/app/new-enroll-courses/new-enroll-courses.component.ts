import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Course} from '../course'
@Component({
  selector: 'app-new-enroll-courses',
  templateUrl: './new-enroll-courses.component.html',
  styleUrls: ['./new-enroll-courses.component.css']
})
export class NewEnrollCoursesComponent implements OnInit {

  id:number;
  courses:Observable<Course[]>
  constructor(private service:Service,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.service.getCoursesNotEnrolled(this.id).subscribe(data=>{
      this.courses = data;
      console.log(this.courses)
    })
  }

  enrollNow(course_id:any){

    this.service.getEnrolledToCourse(this.id,course_id).subscribe(data=>{
      console.log(data)
      this.router.navigate(['courses',this.id]);

    })
    
  }

}
