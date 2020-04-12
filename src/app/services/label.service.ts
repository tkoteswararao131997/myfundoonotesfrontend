import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Label} from 'src/app/models/label';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LabelService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  baseurl = "http://localhost:8080/";
  constructor(private http : HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
   }


   myMethod(data) {
    console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.myMethodSubject.next(data);
}

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
  deletelabel(label : Label)
  {
    return this.http.delete(this.baseurl+"deletelabel/"+label.labelId,this.httpOptions);
  }
  updatelabel(label : Label,labelId : number)
  {
    return this.http.put(this.baseurl+"updatelabel/"+labelId,label,this.httpOptions);
  }
  addlabeltonote(noteId:number,labelId:number)
  {
    return this.http.put(this.baseurl+"addlabeltonote/"+noteId+"/"+labelId,{},this.httpOptions);
  }
  deletelabelfromnote(labelId : number,noteId : number)
  {
    return this.http.delete(this.baseurl+"deletelabelfromnote/"+labelId+"/"+noteId,this.httpOptions);
  }
  getnotesfromlabel(labelId : number)
  {
    return this.http.get(this.baseurl+"getnotesfromlabel/"+labelId,this.httpOptions);

  }
}
