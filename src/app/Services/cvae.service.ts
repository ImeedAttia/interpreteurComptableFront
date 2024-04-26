import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const  APIUrlCVAE ="http://localhost:8081/api/cvae";

@Injectable({
  providedIn: 'root'
})
export class CvaeService  extends DataService{

  constructor(http:HttpClient,private httpPrivate: HttpClient) {
    super(APIUrlCVAE,http);
  }
  generatePDF(formData: FormData, cvaeId: number): Observable<Blob> {
    return this.httpPrivate.post(`${APIUrlCVAE}/fill-pdf/${cvaeId}`, formData, {
      responseType: 'blob'
    });
  }


}
