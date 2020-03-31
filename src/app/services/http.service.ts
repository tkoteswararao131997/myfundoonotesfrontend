import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }
  public post(url: string, body: any, options: any): Observable<any> {
    return this._httpClient.post(url, body, options);
  }
  public patchMethod(url: string, body: any, options: any): Observable<any> {
    return this._httpClient.patch(url, body, options);
  }
  public get(url: string, options: any): Observable<any> {
    return this._httpClient.get(url, options);
  }
  public httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.getItem("token")
    })
  };
}