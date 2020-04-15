import { Component, OnInit } from '@angular/core';
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
      this.getremindernotes();
    })
    this.getremindernotes();
  }
  getremindernotes()
  {
    this.noteservice.getremindernotes().subscribe((result : any)=>{
      this.remindernotes=result['data'];
    })
  }
}
