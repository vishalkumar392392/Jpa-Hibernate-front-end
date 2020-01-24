import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route:ActivatedRoute,private service:Service,private router:Router) { }

  ngOnInit() {

    this.id=this.route.snapshot.params['id'];

    this.service.getCoursesById(this.id).subscribe(data=>{
      this.course = data;
      console.log(this.course)
    })

  }

  addReview(id:number){
   this.router.navigate(['add-review',id])
  }

}
