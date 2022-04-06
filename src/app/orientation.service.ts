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
}
