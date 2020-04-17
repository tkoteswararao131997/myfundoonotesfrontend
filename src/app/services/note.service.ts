import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Note} from '../models/note';
import {Label} from '../models/label';
import { Observable, Subject } from 'rxjs';
import { ɵNgClassImplProvider__POST_R3__ } from '@angular/common';
import{Color} from 'src/app/models/color';
import { tap } from 'rxjs/operators';
import { not } from '@angular/compiler/src/output/output_ast';
import { HttpService } from 'http.service';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notecolor:Color;
  noteId:number;
  private subject = new Subject<any>();
  baseUrl="http://localhost:8080/";
  constructor(private http : HttpClient,private httpuser : HttpService) { }
  public  httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.getItem("token")
    })
  };
  public get autoRefresh() {
    return this.subject;
  }



  public createnote(arr) {
    return this.http.post(this.baseUrl + 'addnote',arr,this.httpOptions)
    .pipe(
      tap(() => {
        this.subject.next();
      })
    );
  }

  public getnotes():Observable<Note[]>
  {
    return this.http.get<Note[]>(this.baseUrl+"/getallnotes",this.httpOptions);
  }

  updatenote(note : Note,noteId : number)
  {
    return this.http.put(this.baseUrl+"updatenote/"+noteId,note,this.httpOptions)
    .pipe(tap(()=>{
      this.subject.next();
    }));
  }
  archieve(noteId:number)
  {
    return this.http.put(this.baseUrl+"isarchieve/"+noteId,{},this.httpOptions)
    .pipe(tap(()=>{
      this.subject.next();
    }));
  }
  getarchievenotes(){
    return this.http.get(this.baseUrl+"getallarchieves",this.httpOptions);
  }
  trashed(noteId:number)
  {
    return this.http.put(this.baseUrl+"istrashed/"+noteId,{},this.httpOptions)
    .pipe(tap(()=>{
      this.subject.next();
    }));
  }
  gettrashnotes(){
    return this.http.get(this.baseUrl+"getalltrashnotes",this.httpOptions);
  }
  deleteforever(noteId : number)
  {
    return this.http.delete(this.baseUrl+"deletenotes/"+noteId,this.httpOptions)
    .pipe(tap(()=>{
      this.subject.next();
    }));
  }
  pinnote(noteId:number)
  {
    return this.http.put(this.baseUrl+"ispinnote/"+noteId,{},this.httpOptions);
  }
  changecolor(note :string , noteId : number)
  {
    return this.http.put(this.baseUrl+"changecolor/"+noteId,note,this.httpOptions)
    .pipe(tap(()=>{
      this.subject.next();
    }));
  }
  ispinnote(noteId:number)
  {
    return this.http.put(this.baseUrl+"ispinnote/"+noteId,{},this.httpOptions)
    .pipe(tap(()=>{
      this.subject.next();
    }));
  }
  getlabelsfromnote(noteId : number):Observable<Label[]>
  {
    return this.http.get<Label[]>(this.baseUrl+"getlabelsfromnote/"+noteId,this.httpOptions);
  }
  createreminder(remind : string,noteId : number)
  {
    return this.http.put(this.baseUrl+"remindme/"+noteId,remind,this.httpOptions)
    .pipe(tap(()=>{
      this.subject.next();
    }));
  }

  getremindernotes()
  {
    return this.http.get(this.baseUrl+"getremindernotes",this.httpOptions)
    .pipe(tap(()=>{
      this.subject.next();
    }));
  }
  deleteReminder(noteId : number)
  {
    return this.http.put(this.baseUrl+"deletereminder/"+noteId,{},this.httpOptions)
    .pipe(tap(()=>{
      this.subject.next();
    }));
  }
}