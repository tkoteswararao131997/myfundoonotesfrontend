import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material';
import {Note} from 'src/app/models/note'
@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
  trashnotes : Note[]
  constructor(private noteservice : NoteService,private snackbar : MatSnackBar) { }
  ngOnInit() {

    this.noteservice.get
  }

}
