import { Routes } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {DemoComponent} from "./Components/demo/demo.component";

export const routes: Routes = [
  {path :"login" , component : LoginComponent},
  {path : "down" , component : DemoComponent}
];
