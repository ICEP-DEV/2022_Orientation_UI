import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrientationService {

  constructor(
    private http: HttpClient
  ) { 

  }
  //Getting System data
  public getCampuses()
  {
    return this.http.get<any>("http://localhost:6900/Orientation/Campus");
  }

  public getFaculty(campid : string)
  {
    return this.http.get<any>("http://localhost:6900/Orientation/Faculty",{params:{id:campid}});
  }

  public getVideos(facid:string)
  { 
    return this.http.get<any>("http://localhost:6900/Orientation/Videos",{params:{fac_id:facid}})
  }

  public getSurvQuestion(facid:string)
  {
    return this.http.get<any>("http://localhost:6900/Orientation/Question",{params:{fac_id:facid}})
  }
  //Storing Values and Progress

  public Store_Steps(body : any)
  { 
      return this.http.post<any>("http://localhost:6900/track/orientation",body,{})
  }

  public UpdateProgress(body : any)
  { 
    return this.http.put<any>("http://localhost:6900/Track/Progress",body,{})
  }

  //Store Survey Answers by person

  public StoreSurveyAnswers(body : any)
  { 
    return this.http.post<any>("http://localhost:6900/track/Survey",body,{})
  }

  //Get Saved Answers from BE
  //Orientation
  public GetOrientaionAnswer(usercreds:any)
  {
    return this.http.get<any>("http://localhost:6900/track/orientation",{params:usercreds})
  }
  //Survey
  public GetSurveyAnswer(usercreds:any)
  {
    return this.http.get<any>("http://localhost:6900/track/survey",{params:usercreds})
  }
  
  //Deleting of progress
  public DelCustomeSaved(parametrs :any)
  {
    return this.http.delete<any>("http://localhost:6900/track/orientation",{params:parametrs})
  }

  public getUserSurvey()
  {
    return this.http.get<any>("http://localhost:6900/track/survey/admin")
  }

 

  public addVideo(bodyElement : any): Observable<any> {

    return this.http
      .post('http://localhost:3007/uploadVideo', bodyElement, {
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
     return this.http.put<any>('http://localhost:6900/Admin/UpdateDeleteVideo',body)
  }

  public deleteVideo(paramsVal : any)
  {
    return this.http.delete<any>('http://localhost:6900/Admin/UpdateDeleteVideo',{params:paramsVal})
  }

}
