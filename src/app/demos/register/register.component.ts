import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

    register(user: any){
    this.authService.register(user)
      .subscribe((res) =>{
        // if(res.success){
        //   this.router.navigate(['/login']);
        // }
      });
    }
}
