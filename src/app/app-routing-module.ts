import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LifeCycleComponent} from "./demos/life-cyle/life-cycle.component";
import {ChangeDetectionComponent} from "./demos/chang-detection/chang-detection.component";
import {AppGuard} from "./app.guard";
import {RegisterComponent} from "./demos/register/register.component";
import {LoginComponent} from "./demos/login/login.component";
import {LogoutComponent} from "./demos/logout/logout.component";




const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate:[AppGuard],
    children: [
      {
        path: 'lc',
        component: LifeCycleComponent
      },
      {
        path: 'cd',
        component: ChangeDetectionComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }


    ]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }





]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
