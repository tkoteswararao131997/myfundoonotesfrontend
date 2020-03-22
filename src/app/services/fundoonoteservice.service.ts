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
}