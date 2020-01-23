import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { Service } from '../service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  id:number;
  course:Observable<Course>;
  constructor(private route:ActivatedRoute,private service:Service) { }

  ngOnInit() {

    this.id=this.route.snapshot.params['id'];

    this.service.getCoursesById(this.id).subscribe(data=>{
      this.course = data;
      console.log(this.course)
    })

  }

}
