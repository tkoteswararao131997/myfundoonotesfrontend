import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { MatDialog } from '@angular/material';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { AutofillMonitor } from '@angular/cdk/text-field';
@Component({
  selector: 'app-shownotes',
  templateUrl: './shownotes.component.html',
  styleUrls: ['./shownotes.component.scss']
})
export class ShownotesComponent implements OnInit {
  @Input() note: Note;
  constructor(private noteservice : NoteService,private dialog:MatDialog) { }

  ngOnInit() {
  }
  openNote(note)
  {
    const dialogref=this.dialog.open(UpdatenoteComponent,{
      width:"500px",height : "auto",
      panelClass: "custom-dialog-container",
      data: { note }
    });
    dialogref.afterClosed().subscribe(result => {
      console.log("not updated");
    });
  }
  toTrash()
  {
    
  }
}
