import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GRAPH_HOSTNAME, APACHE_HOST } from './../globals'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private serverAddress : string = GRAPH_HOSTNAME
  private apacheAddress : string = APACHE_HOST
                
  constructor(private http: HttpClient) { }

  public getStudents(student : any)
  {
    console.log(this.serverAddress+"/auth/login")
    return this.http.post<any>(this.serverAddress+"/auth/login",student,{});
  }

  public forgottenReq(studentCreds : any)
  {
    return this.http.post<any>(this.serverAddress+"/auth/Forgotten",studentCreds,{})
  }
  public regStudent(student: any)
  {
    return this.http.post<any>(this.serverAddress+'/auth/registration', student, {});
  }

  public checkStudent(student: any)
  {
    return this.http.post<any>(this.serverAddress+'/auth/Forgotten', student, {});
  }

  public sendOTP(requestBody: any)
  {
    return this.http.post<any>(`${this.apacheAddress}/mailman/sendEmail.php`,requestBody, {});
  }

  public logActivity(body : any)
  {
    return this.http.post<any>(this.serverAddress+"/track/new",body,{})
  }

  public getTrackAll(body:any)
  {
    return this.http.post<any>(this.serverAddress+"/track/query",body,{})
  }

  public getAllBlogs()
  {
    return this.http.get<any>(this.serverAddress+"/blog/blog",{params:{"id":"*"}})
  }

  public loginAdmin(body :any)
  {
    return this.http.post<any>(this.serverAddress+"/auth/login_admin",body,{})
  }

}
