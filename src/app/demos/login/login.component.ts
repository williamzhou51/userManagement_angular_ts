import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//@ts-ignore
  response;

  constructor(
    public authService: AuthService, private router: Router
  ) {

  }

  ngOnInit(): void{
    this.authService.checklogin()
      .subscribe((res) => {
        this.response = res;
        console.log(res);
        if(res.success){
          this.router.navigate(['/']);
      }
    });
  }
//@ts-ignore
  login(user){
    this.authService.login(user)
      .subscribe((res) =>{
        this.response = res;
        if(res.success){
          // this.router.navigate(['/']);
        }
      });

  }

}
