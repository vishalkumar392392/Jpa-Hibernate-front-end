import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Service } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course:Course = new Course();
  constructor(private service:Service,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.service.createCourse(this.course).subscribe(data=>{
      console.log(data);
    this.router.navigate(["courses"]);
    })
  }
}
