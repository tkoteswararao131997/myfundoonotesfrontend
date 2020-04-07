import { Component, OnInit,Input} from '@angular/core';
import {Note} from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(private noteservice : NoteService,private snackbar:MatSnackBar) { }
  @Input() note: Note;
  ngOnInit() {
  }
  doarchive(){
      console.log(this.note);
      this.noteservice.archieve(this.note.noteId).subscribe((result:any)=>{
        console.log(result);
        if(result['statusMsg']=="true")
          this.snackbar.open("note was archieved","cancel",{duration : 5000});
        else
          this.snackbar.open("error occured","cancel",{duration : 5000});
        window.location.reload();
      })
  }

  toTrash()
  {
    console.log(this.note);
      this.noteservice.trashed(this.note.noteId).subscribe((result:any)=>{
        console.log(result);
        if(result['statusMsg']=="true")
          this.snackbar.open("note was trashed","cancel",{duration : 5000});
        else
          this.snackbar.open("error occured","cancel",{duration : 5000});
      })
  }
}
