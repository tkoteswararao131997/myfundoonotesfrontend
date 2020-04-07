import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Note} from '../models/note';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteId:number;
  baseUrl="http://localhost:8080/";
  constructor(private http : HttpClient,private httpuser : HttpService) { }
  public httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.getItem("token")
    })
  };


  public createnote(arr) {
    return this.http.post(this.baseUrl + 'addnote',arr,this.httpOptions);
  }

  public getnotes()
  {
    return this.http.get(this.baseUrl+"/getallnotes",this.httpOptions);
  }

  updatenote(note : Note,noteId : number):Observable<Note>
  {
    return this.http.put<Note>(this.baseUrl+"updatenote/"+noteId,note,this.httpOptions);
  }


  deletenote(noteId:number)
  {
    return this.http.delete(this.baseUrl+"deletenote/"+noteId,this.httpOptions);
  }

  archieve(noteId:number)
  {
    return this.http.put(this.baseUrl+"isarchieve/"+noteId,this.httpOptions);
  }
  getarchievenotes(){
    return this.http.get(this.baseUrl+"getallarchieves",this.httpOptions);
  }
  trashed(noteId:number)
  {
    return this.http.put(this.baseUrl+"istrashed/"+noteId,this.httpOptions);
  }
}