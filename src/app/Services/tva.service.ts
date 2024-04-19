import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";
const  APIUrlTva ="http://localhost:8081/api/tva";

@Injectable({
  providedIn: 'root'
})
export class TvaService  extends DataService{

  constructor(http:HttpClient){
    super(APIUrlTva,http);
  }}
