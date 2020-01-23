import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
    providedIn:'root'
})
export class Service{

    private baseUrl:string ='http://localhost:8080/students';

    private courses:string='courses';
    constructor(private http:HttpClient){

    }

    createStudent(student:object):Observable<Object>{

        return this.http.post(`${this.baseUrl}`,student);
    }
    getStudents():Observable<any>{
      return this.http.get(`${this.baseUrl}`);
    }

    getStudentById(id:number):Observable<any>{

        return this.http.get(`${this.baseUrl}/${id}`);

    }

    getCourses():Observable<any>{
        return this.http.get(`${this.baseUrl}/${this.courses}`);
    }
    getCoursesById(id:number):Observable<any>{
         
        return this.http.get(`${this.baseUrl}/${this.courses}/${id}`);

    }
    getcoursesByStudentId(id:number):Observable<any>{

        return this.http.get(`${this.baseUrl}/${id}/${this.courses}`)
    }

    getEnrolledToCourse(student_id:number,course_id:any):Observable<any>{

        return this.http.get(`${this.baseUrl}/${this.courses}/${student_id}/${course_id}`) 
    }

}