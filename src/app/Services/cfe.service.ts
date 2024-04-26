import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const  APIUrlCFE ="http://localhost:8081/api/cfe";

@Injectable({
  providedIn: 'root'
})
export class CfeService  extends DataService{

  constructor(http:HttpClient,private httpPrivate: HttpClient){
    super(APIUrlCFE,http);
  }
  generatePDF(formData: FormData, cvaeId: number): Observable<Blob> {
    return this.httpPrivate.post(`${APIUrlCFE}/fill-pdf/${cvaeId}`, formData, {
      responseType: 'blob'
    });
  }

}
