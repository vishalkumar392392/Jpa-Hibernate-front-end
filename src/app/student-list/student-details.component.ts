import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  students:Observable<Student[]>
  constructor(private service:Service,private route:Router) { }

  ngOnInit() {
    this.service.getStudents().subscribe(data=>{
      this.students=data;
      console.log(data)
    })
  }

  getEnrolledCourses(id:number){

    this.route.navigate(['courses',id]);

  }

}
