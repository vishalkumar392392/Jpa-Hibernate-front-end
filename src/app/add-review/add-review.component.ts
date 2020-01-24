import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from '../service';
import { Review } from '../review';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  course_id:number;
  review:Review = new Review();
  constructor(private router:Router,private route:ActivatedRoute,private service:Service) { }

  ngOnInit() {
    this.course_id=this.route.snapshot.params["id"];

  }

  onSubmit(){
    this.service.addReviewToCourse(this.course_id,this.review).subscribe(data=>{
      console.log(data);
      this.review = new Review();
      this.router.navigate(['reviews',this.course_id])
    })
  }
}
