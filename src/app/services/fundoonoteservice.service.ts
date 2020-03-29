import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundoonoteserviceService {

  baseUrl="http://localhost:8080/"
  constructor(private http: HttpClient) { }

  getLoginValue(arr) {

    return this.http.post(this.baseUrl + 'loginuser', arr);
  }

  getRegisterValue(arr) {

    return this.http.post(this.baseUrl + 'registeruser', arr);
  }

  getForgotValue(arr) {

    return this.http.post(this.baseUrl + 'forgotpassword', arr);
  }

  getResetValue(arr) {

    return this.http.post(this.baseUrl + 'updatepassword/', arr);
  }
  
  }

