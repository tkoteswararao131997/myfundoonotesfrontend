import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  loginuser(arr):Observable<User>
  {
    return this.http.post<User>(this.baseurl+"loginuser",arr);
  }

  registeruser(arr):Observable<User>
  {
    return this.http.post<User>(this.baseurl+"registeruser",arr);
  }

  updatepassword(arr) {

    return this.http.post(this.baseurl + 'updatepassword/', arr);
  }

  forgotpassword(arr) : Observable<User>
  {
    return this.http.post<User>(this.baseurl+"forgotpassword",arr);
  }
//  uploadProfie()
  
}
