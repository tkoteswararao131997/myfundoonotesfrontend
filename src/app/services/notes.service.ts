import { Injectable } from '@angular/core';
import { HttpService } from "./http.service"
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  baseUrl="http://localhost:8080/"
  constructor(private http: HttpService) { }
  private _notesList = new Subject<any>();
  private _subject = new Subject<any>();
  private _content = new BehaviorSubject<number>(0);
  public share = this._content.asObservable();
  public get autoRefesh() {
    return this._subject;
  }

  public postcreateNote(arr) {
    console.log(
      "fetching token: ",
      localStorage.getItem('token'),
      "note : ",arr
    );
    return this.http.post(this.baseUrl + 'addnote',arr,this.http.httpOptions);

  }
  // public getAllNotes() {
  //   console.log(" all notes service reached");

  //   return this.http.get(this.baseUrl + 'registeruser', arr,this.http.httpOptions);

  //   );
  // }
}