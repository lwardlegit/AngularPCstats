import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
   
  })
}

@Injectable({
  providedIn: 'root'
})

export class SpecsService {
  private apiUrl = 'http://localhost:3000'
  constructor(private http:HttpClient) {}

  //----------hints----------------
  getHints(): Observable<any>{
    return this.http.get(`${this.apiUrl}/Hints`)
  }

  getStats():Observable<any>{
    return this.http.get(`http://localhost:8888/fetchStats`)
 }

postUpdates(stats):Observable<Object>{
  //send stats to json server store
  const url = `${this.apiUrl}/progressionData`; //json server collection location
  return this.http.post(url,stats,httpOptions)
  
}
getProgress(){
  return this.http.get(`${this.apiUrl}/progressionData`)
}

}
