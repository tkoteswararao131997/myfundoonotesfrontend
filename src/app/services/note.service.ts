import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Note} from '../models/note';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ɵNgClassImplProvider__POST_R3__ } from '@angular/common';
import{Color} from 'src/app/models/color';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notecolor:Color;
  noteId:number;
  baseUrl="http://localhost:8080/";
  constructor(private http : HttpClient,private httpuser : HttpService) { }
  public  httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.getItem("token")
    })
  };
  



  public createnote(arr) {
    return this.http.post(this.baseUrl + 'addnote',arr,this.httpOptions);
  }

  public getnotes():Observable<Note[]>
  {
    return this.http.get<Note[]>(this.baseUrl+"/getallnotes",this.httpOptions);
  }

  updatenote(note : Note,noteId : number)
  {
    console.log(this.httpOptions);
    return this.http.put(this.baseUrl+"updatenote/"+noteId,note,this.httpOptions);
  }
  archieve(noteId:number)
  {
    return this.http.put(this.baseUrl+"isarchieve/"+noteId,{},this.httpOptions);
  }
  getarchievenotes(){
    return this.http.get(this.baseUrl+"getallarchieves",this.httpOptions);
  }
  trashed(noteId:number)
  {
    return this.http.put(this.baseUrl+"istrashed/"+noteId,{},this.httpOptions);
  }
  gettrashnotes(){
    return this.http.get(this.baseUrl+"getalltrashnotes",this.httpOptions);
  }
  deleteforever(noteId : number)
  {
    return this.http.delete(this.baseUrl+"deletenotes/"+noteId,this.httpOptions);
  }
  pinnote(noteId:number)
  {
    return this.http.put(this.baseUrl+"ispinnote/"+noteId,{},this.httpOptions);
  }
  changecolor(note :string , noteId : number)
  {
    return this.http.put(this.baseUrl+"changecolor/"+noteId,note,this.httpOptions);
  }
  ispinnote(noteId:number)
  {
    return this.http.put(this.baseUrl+"ispinnote/"+noteId,{},this.httpOptions);
  }
}