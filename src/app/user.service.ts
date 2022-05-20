import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GRAPH_HOSTNAME, APACHE_HOST } from './../globals'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private secureProtocol : string = "http://"
  private serverAddress : string = GRAPH_HOSTNAME
  private apacheAddress : string = APACHE_HOST
  private serverPort : string = ""
                
  constructor(private http: HttpClient) { }

  public getStudents(student : any)
  {
    console.log(this.secureProtocol+this.serverAddress+this.serverPort+"/auth/login")
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/auth/login",student,{});
  }

  public forgottenReq(studentCreds : any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/auth/Forgotten",studentCreds,{})
  }
  public regStudent(student: any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+'/auth/registration', student, {});
  }

  public checkStudent(student: any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+'/auth/Forgotten', student, {});
  }

  public sendOTP(requestBody: any)
  {
    return this.http.post<any>(`http://${this.apacheAddress}/mailman/sendEmail.php`,requestBody, {});
  }

  public logActivity(body : any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/track/new",body,{})
  }

  public getTrackAll(body:any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/track/query",body,{})
  }

  public getAllBlogs()
  {
    return this.http.get<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/blog/blog",{params:{"id":"*"}})
  }

  public loginAdmin(body :any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/auth/login_admin",body,{})
  }

}