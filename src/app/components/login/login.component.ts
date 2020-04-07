import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { observable } from 'rxjs';
import { AnimationDurations, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [
    Validators.required, Validators.email, ]);
  password = new FormControl('', [
      Validators.required, Validators.minLength(4), ]);
      isSubmit=false;
      public users=[];
  constructor(private userservice:UserService, private router: Router,private snackbar : MatSnackBar) {}


  ngOnInit() {
  }

  onLogin() {
    const data = {
      password: this.password.value,
      email: this.email.value,
    };
    this.userservice.loginuser(data)
    .subscribe((result:any)=>{
      console.log(result);
    localStorage.setItem("token",result['data']);
    if(result['statusMsg']=="true")
    this.router.navigate(["/dashboard/notes"]);
    else{
      this.router.navigate(["/login"]);
      this.email.reset();
      this.password.reset();
      this.snackbar.open("login failed","cancel",{ duration: 5000});
    }
    });
}
}
