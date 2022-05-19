import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { HOSTNAME,APPHOSTNAME } from '../globals'

@Injectable({
  providedIn: 'root'
})
export class OrientationService {
  hostname : String = HOSTNAME
  app_hostname :  String = APPHOSTNAME
  constructor(   
    private http: HttpClient
  ) { 

  }
  //Getting System data
  public getCampuses()
  {
    return this.http.get<any>(`http://${this.hostname}/Orientation/Campus`);
  }

  public getFaculty(campid : string)
  {
    return this.http.get<any>(`http://${this.hostname}/Orientation/Faculty`,{params:{id:campid}});
  }

  public getVideos(facid:string)
  { 
    return this.http.get<any>(`http://${this.hostname}/Orientation/Videos`,{params:{fac_id:facid}})
  }

  public getSurvQuestion(facid:string)
  {
    return this.http.get<any>(`http://${this.hostname}/Orientation/Question`,{params:{fac_id:facid}})
  }
  //Storing Values and Progress

  public Store_Steps(body : any)
  { 
      return this.http.post<any>(`http://${this.hostname}/track/orientation`,body,{})
  }

  public UpdateProgress(body : any)
  { 
    return this.http.put<any>(`http://${this.hostname}/Track/Progress`,body,{})
  }

  //Store Survey Answers by person

  public StoreSurveyAnswers(body : any)
  { 
    return this.http.post<any>(`http://${this.hostname}/track/Survey`,body,{})
  }

  //Get Saved Answers from BE
  //Orientation
  public GetOrientaionAnswer(usercreds:any)
  {
    return this.http.get<any>(`http://${this.hostname}/track/orientation`,{params:usercreds})
  }
  //Survey
  public GetSurveyAnswer(usercreds:any)
  {
    return this.http.get<any>(`http://${this.hostname}/track/survey`,{params:usercreds})
  }
  
  //Deleting of progress
  public DelCustomeSaved(parametrs :any)
  {
    return this.http.delete<any>(`http//${this.hostname}/track/orientation`,{params:parametrs})
  }

  public getUserSurvey()
  {
    return this.http.get<any>(`http//${this.hostname}/track/survey/admin`)
  }

 
  public searchOnStudent(searchVal : string)
  {
    return this.http.get<any>(`http//${this.hostname}/search/students`,{params:{search:searchVal}})
  }

  public searchOnVideo(searchVal : string)
  {
    return this.http.get<any>(`http//${this.hostname}/search/videos`,{params:{search:searchVal}})
  }

  public searchOnBlog(searchVal : string)
  {
    return this.http.get<any>(`http//${this.hostname}/search/blogs`,{params:{search:searchVal}})
  }

  public addVideo(bodyElement : any): Observable<any> {

    return this.http
      .post(`http://${this.app_hostname}/uploadVideo`, bodyElement, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmt));
  }


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

  public updateVideo(body : any)
  {
     return this.http.put<any>(`http://${this.hostname}/Admin/UpdateDeleteVideo`,body)
  }

  public deleteVideo(paramsVal : any)
  {
    return this.http.delete<any>(`http://${this.hostname}/Admin/UpdateDeleteVideo`,{params:paramsVal})
  }

  //--------------------------Adding A Blog Post Request with Progress Report

  public addBlog(bodyElement : any): Observable<any> {

    return this.http
      .post(`http://${this.app_hostname}/uploadImage`, bodyElement, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmtBlog));
  }


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

}
