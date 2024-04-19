import { Routes } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {DemoComponent} from "./Components/demo/demo.component";
import {AuthGuard} from "./Guard/auth.guard";
import {SecureInnerPagesGuard} from "./Guard/secure-inner-pages.guard";

export const routes: Routes = [
  {path : "login" , component : LoginComponent},
  //, canActivate: [SecureInnerPagesGuard]
  {path : "down" , component : DemoComponent
    // canActivate: [AuthGuardGuard],
    // data: {
    //   role: HigherGrantedRoles
    // }

  },
  {path : "" , component : DemoComponent}
];
