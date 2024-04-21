import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";
const  APIUrlCFE ="http://localhost:8081/api/cfe";

@Injectable({
  providedIn: 'root'
})
export class CfeService  extends DataService{

  constructor(http:HttpClient){
    super(APIUrlCFE,http);
  }}
