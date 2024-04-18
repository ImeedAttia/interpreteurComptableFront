import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../Models/users";

//Api url
const  APIUrl ="";
@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http:HttpClient){}

  signIn(data :{email : string,password : string}): Observable<any>{
    return this.http.post(APIUrl, data)
  }
  signUp(data :User): Observable<any>{
    return this.http.post(APIUrl, data)
  }

  signOut(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }

}
