import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( public router: Router) { }
  token = localStorage.getItem("token");
  canActivate():boolean{
    console.log(this.token);
    if(this.token!="null" && this.token.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/))
    {
    console.log("in if")
    return true;
    }
    else{
      console.log("in else")
      this.router.navigate(['/']);
    return false;
    }
  }
}