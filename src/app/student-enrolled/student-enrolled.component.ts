import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-enrolled',
  templateUrl: './student-enrolled.component.html',
  styleUrls: ['./student-enrolled.component.css']
})
export class StudentEnrolledComponent implements OnInit {

  id:number;
  course:Observable<Course>;
  constructor(private service:Service,private route:ActivatedRoute) { }

  ngOnInit() {

    this.id=this.route.snapshot.params["id"];
    this.service.getCoursesById(this.id).subscribe(data=>{
      this.course=data;
      console.log(this.course)
    })
  }

}
