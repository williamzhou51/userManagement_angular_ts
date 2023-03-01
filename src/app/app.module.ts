import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing-module";
import {LcPersonComponent} from "./demos/life-cyle/lc-person/lc-person.component";
import {LifeCycleComponent} from "./demos/life-cyle/life-cycle.component";

import { CdPersonComponent } from './demos/chang-detection/cd-person/cd-person.component';
import { PersonDetailComponent } from './demos/chang-detection/cd-person/person-detail/person-detail.component';
import {ChangeDetectionComponent} from "./demos/chang-detection/chang-detection.component";
import { RegisterComponent } from './demos/register/register.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AuthService} from "./demos/shared/services/auth.service";
import {AppGuard} from "./app.guard";
import { LoginComponent } from './demos/login/login.component';
import {LogoutComponent} from "./demos/logout/logout.component";



@NgModule({
  declarations: [
    AppComponent,
    LcPersonComponent,
    LifeCycleComponent,
    CdPersonComponent,
    PersonDetailComponent,
    ChangeDetectionComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent

  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [
    AuthService,
    AppGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
