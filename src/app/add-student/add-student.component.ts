import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Service } from '../service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student:Student = new Student();
  
  constructor(private service:Service,private router:Router) { }

  ngOnInit() {
    
  }

  onSubmit(){
       this.service.createStudent(this.student).subscribe(data=>{
         console.log(data); 
         this.router.navigate(['students']);
         this.student = new Student();
       })
  }
}
