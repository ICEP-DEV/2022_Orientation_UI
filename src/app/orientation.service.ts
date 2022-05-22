import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { GRAPH_HOSTNAME,APP_HOSTNAME,APACHE_HOST } from '../globals'

@Injectable({
  providedIn: 'root'
})
export class OrientationService {
  hostname : String = GRAPH_HOSTNAME
  app_hostname :  String = APP_HOSTNAME
  apache_host : String = APACHE_HOST
  constructor(   
    private http: HttpClient
  ) { 

  }


  public getSurveyReport(body : any)
  {
    return this.http.post<any>(`${this.apache_host}/pdfrender/surveyprint.php`,body,{})
  }

  //Getting System data
  public getCampuses()
  {
    return this.http.get<any>(`${this.hostname}/Orientation/Campus`);
  }

  //Get all faculty relation with campus
  public getFaculty(campid : string)
  {
    return this.http.get<any>(`${this.hostname}/Orientation/Faculty`,{params:{id:campid}});
  }

  //Get all videos related to the faculty id
  public getVideos(facid:string)
  { 
    return this.http.get<any>(`${this.hostname}/Orientation/Videos`,{params:{fac_id:facid}})
  }

  //Get all Survey question with answers related to the faculty id
  public getSurvQuestion(facid:string)
  {
    return this.http.get<any>(`${this.hostname}/Orientation/Question`,{params:{fac_id:facid}})
  }

  //Storing Values and Progress
  public Store_Steps(body : any)
  { 
      return this.http.post<any>(`${this.hostname}/track/orientation`,body,{})
  }

  //Update the progress of the users orienation
  public UpdateProgress(body : any)
  { 
    return this.http.put<any>(`${this.hostname}/Track/Progress`,body,{})
  }

  //Store Survey Answers by person
  public StoreSurveyAnswers(body : any)
  { 
    return this.http.post<any>(`${this.hostname}/track/Survey`,body,{})
  }

  //Get Saved Answers from BE
  //Orientation
  public GetOrientaionAnswer(usercreds:any)
  {
    return this.http.get<any>(`${this.hostname}/track/orientation`,{params:usercreds})
  }
  //Survey
  public GetSurveyAnswer(usercreds:any)
  {
    return this.http.get<any>(`${this.hostname}/track/survey`,{params:usercreds})
  }
  
  //Deleting of progress
  public DelCustomeSaved(parametrs :any)
  {
    return this.http.delete<any>(`${this.hostname}/track/orientation`,{params:parametrs})
  }

  //Get all users survey for admin
  public getUserSurvey()
  {
    return this.http.get<any>(`${this.hostname}/track/survey/admin`)
  }

  //Seaching Requests
  //Searching in the student context
  public searchOnStudent(searchVal : string)
  {
    return this.http.get<any>(`${this.hostname}/search/students`,{params:{search:searchVal}})
  }

  //Searching in videos context
  public searchOnVideo(searchVal : string)
  {
    return this.http.get<any>(`${this.hostname}/search/videos`,{params:{search:searchVal}})
  }

  //Seaching in blogs context
  public searchOnBlog(searchVal : string)
  {
    return this.http.get<any>(`${this.hostname}/search/blogs`,{params:{search:searchVal}})
  }

  //Upload the video to the backend app api reporting progress
  public addVideo(bodyElement : any): Observable<any> {

    return this.http
      .post(`${this.app_hostname}/uploadVideo`, bodyElement, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmt));
  }

  //Emmittion of error on the piping of byte being reported
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      if(error.status != 200)
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    if(error.status != 200)
    {
      console.log(errorMessage);
    
      return throwError(() => {
        return errorMessage;
      });

    }
    else
    {
      return "Done"
    }
  }

  //Updateing Videos from the admin
  public updateVideo(body : any)
  {
     return this.http.put<any>(`${this.hostname}/Admin/UpdateDeleteVideo`,body)
  }

  //Deleting the Videos Request also binary is deleted
  public deleteVideo(paramsVal : any)
  {
    return this.http.delete<any>(`${this.app_hostname}/deleteVideo`,{params:paramsVal})
  }

  //--------------------------Adding A Blog Post Request with Progress Report


  //Adding of the blog and report of progress is piped
  public addBlog(bodyElement : any): Observable<any> {

    return this.http
      .post(`${this.app_hostname}/uploadImage`, bodyElement, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmtBlog));
  }


  //Emmittion of error if the bytes being piped get an error
  errorMgmtBlog(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      if(error.status != 200)
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    if(error.status != 200)
    {
      console.log(errorMessage);
    
      return throwError(() => {
        return errorMessage;
      });

    }
    else
    {
      return "Done"
    }
  }

  //Updateing blog from the admin
  public updateBlog(body : any)
  {
     return this.http.put<any>(`${this.hostname}/Blog/blog`,body)
  }

  //Deleting the Blog Request also binary is deleted
  public deleteblog(val : any)
  {
    return this.http.delete<any>(`${this.app_hostname}/deleteblog`,{params:{id:val}})
  }

}
