import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";
const  APIUrlCVAE ="http://localhost:8081/api/cvae";

@Injectable({
  providedIn: 'root'
})
export class CvaeService  extends DataService{

  constructor(http:HttpClient){
    super(APIUrlCVAE,http);
  }}
