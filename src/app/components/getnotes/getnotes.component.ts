import { Component, OnInit } from '@angular/core';
// import { NoteserviceService } from 'src/app/services/notes.service';
import {Note} from 'src/app/models/note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {

  constructor(
    private _httpClient: HttpClient,private noteservice : NoteService) { }
    notes:Note[];
    ngOnInit() {
    this.noteservice.autoRefresh.subscribe(()=>{
       this.getAllNotes();
    });
    this.getAllNotes();
  }
  getAllNotes() {
    this.noteservice.getnotes().subscribe(
      (response: any) => {
        console.log(response);
      this.notes=response; 
      },
      
    );
  }


}
