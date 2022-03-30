import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userEmail = ''
  usersURL = "https://jsonplaceholder.typicode.com/users";
  studentsURL = "https://x0ses6l8i4.execute-api.us-east-1.amazonaws.com/prod/students";
  /* registerStudent = "http://localhost:4242/api/users/regStud"; */
  registerStudent = "https://x0ses6l8i4.execute-api.us-east-1.amazonaws.com/prod/student";
  /* studLogin = "https://us-central1-testrun2-d2bcc.cloudfunctions.net/user/:studNum";*/
  loginUrl = "https://x0ses6l8i4.execute-api.us-east-1.amazonaws.com/prod/student?studNum="

  submitSurveyURL = "https://txqgcyy28g.execute-api.us-east-1.amazonaws.com/prod/survey";
                  /* https://txqgcyy28g.execute-api.us-east-1.amazonaws.com/prod/survey */

  /* for video
  API_ENDPOINT: string = 'https://www.cbc.ca/bistro/order'; */
  /*
    http://10.2.40.92:1000/information
  */

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get<any>(this.usersURL);
  }

  public getStudents(student : any)
  {
    return this.http.post<any>("http://localhost:6900/auth/login",student,{});
  }

  public forgottenReq(studentCreds : any)
  {
    return this.http.post<any>("http://localhost:6900/auth/Forgotten",studentCreds,{})
  }
  public regStudent(student: any)
  {
    return this.http.post<any>('http://localhost:6900/auth/registration', student, {});
  }


  public checkStudent(student: any)
  {
    return this.http.post<any>('http://localhost:6900/auth/Forgotten', student, {});
  }

  public submitSurvey(response: any)
  {
    return this.http.post<any>(this.submitSurveyURL, response, {});
  }

  public sendOTP(requestBody: any)
  {
    return this.http.post<any>("http://localhost/mailman/sendEmail.php",requestBody, {});
  }
  public certificate()
  {
    return this.http.get<any>("http://localhost/pdfrender/temmp.php");
  }

  public setUserEmail(email : string)
  {
    this.userEmail = email
  }

  public getUserEmail()
  {
    return this.userEmail;
  }



  /*

  login(username, password) {
    return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
  }
  /*
  getVideo(mediaID: string) {
    return this.http.get(`${this.API_ENDPOINT}?mediaId=${mediaID}`);
  }*/



}