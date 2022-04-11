import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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




}
