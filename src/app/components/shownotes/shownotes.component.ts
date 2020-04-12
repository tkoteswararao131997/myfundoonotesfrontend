import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { LabelService } from 'src/app/services/label.service';
import { Label } from 'src/app/models/label';
@Component({
  selector: 'app-shownotes',
  templateUrl: './shownotes.component.html',
  styleUrls: ['./shownotes.component.scss']
})
export class ShownotesComponent implements OnInit {
  selectable = true;
  removable = true;
  labellist:Label[];
  @Input() note: Note;
  constructor(private noteservice : NoteService,private dialog:MatDialog,private snackbar : MatSnackBar,private labelservice : LabelService) { }

  ngOnInit() {
      this.labellist=this.note.labels;
    }
  openNote(note)
  {
    console.log(note);
    const dialogref=this.dialog.open(UpdatenoteComponent,{
      width:"600px",
      minHeight: "400px",
      maxHeight:"auto",
      data: { note },
     
    });
    dialogref.afterClosed().subscribe(result => {
      console.log("not updated");
    });
  }
  deleteForever(){
    this.noteservice.deleteforever(this.note.noteId).subscribe((result : any)=>{
      if(result['statusMsg']=="true")
      {
      this.snackbar.open("note deleted","cancel",{duration : 5000});
      window.location.reload();
      }
      else
      this.snackbar.open("error while deleting","cancel",{duration : 5000});
      
    })
  }
  restoreFromTrash(){
    this.noteservice.trashed(this.note.noteId).subscribe((result : any)=>{
      if(result['statusMsg']=="true")
      {
      this.snackbar.open("note restored","cancel",{duration : 5000});
      window.location.reload();
      }
      else
      this.snackbar.open("error while restoring","cancel",{duration : 5000});
    })
  }

  dopin()
  {
    this.noteservice.pinnote(this.note.noteId).subscribe((result : any)=>{
      if(result['statusMsg']=="true")
      {
      this.snackbar.open("note pinned","cancel",{duration : 5000});
      window.location.reload();
      }
      else
      this.snackbar.open("error while pinning","cancel",{duration : 5000});
    })
  }
  remove(label)
  {
    this.labelservice.deletelabelfromnote(label.labelId,this.note.noteId).subscribe((result : any)=>{
      if(result['statusMsg']=="true")
      {
      this.snackbar.open("label deleted in note","cancel",{duration : 5000});
      window.location.reload();
      }
      else
      this.snackbar.open("error while deleting label","cancel",{duration : 5000});
    })
  }
  ispin()
  {
    this.noteservice.ispinnote(this.note.noteId).subscribe((result:any)=>{
      if(result['statusMsg']=="true")
      {
      this.snackbar.open("label deleted in note","cancel",{duration : 5000});
      window.location.reload();
      }
      else
      this.snackbar.open("error while deleting label","cancel",{duration : 5000});
    })
  }
}
