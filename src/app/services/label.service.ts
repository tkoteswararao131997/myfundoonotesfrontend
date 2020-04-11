import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Label} from 'src/app/models/label';
@Injectable({
  providedIn: 'root'
})
export class LabelService {
  baseurl = "http://localhost:8080/";
  constructor(private http : HttpClient) { }
  public  httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.getItem("token")
    })
  };

  getlabels()
  {
    return this.http.get(this.baseurl+"getalllabels",this.httpOptions);
  }
  createlabel(newlabel : Label)
  {
    return this.http.post(this.baseurl+"addlabel",newlabel,this.httpOptions);
  }
}
