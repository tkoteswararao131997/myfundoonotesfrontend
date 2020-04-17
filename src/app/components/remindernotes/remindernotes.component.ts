import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';
import {Note} from 'src/app/models/note'
@Component({
  selector: 'app-remindernotes',
  templateUrl: './remindernotes.component.html',
  styleUrls: ['./remindernotes.component.scss']
})
export class RemindernotesComponent implements OnInit {
  remindernotes:Note[];
  constructor(private noteservice : NoteService) { }

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
      this.remindernotes=response; 
      },
      
    );
  }
}
