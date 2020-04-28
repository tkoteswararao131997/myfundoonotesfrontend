import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { LabelService } from 'src/app/services/label.service';
import { Label } from 'src/app/models/label';
import { PartialObserver, Observable } from 'rxjs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';
@Component({
  selector: 'app-shownotes',
  templateUrl: './shownotes.component.html',
  styleUrls: ['./shownotes.component.scss']
})
export class ShownotesComponent implements OnInit {
  // grid = DashboardComponent.grid;
  selectable = true;
  collaborators:any;
  view=localStorage.getItem("view");
  removable = true;
  labellist:Label[];
  notes:Note[];
  @Input() note: Note;
  constructor(private cdRef:ChangeDetectorRef,private collaboratorservice:CollaboratorService,private dashboard:DashboardComponent,private noteservice : NoteService,private dialog:MatDialog,private snackbar : MatSnackBar,private labelservice : LabelService) { }
   public observer: PartialObserver<any>;
  ngOnInit() {
    this.noteservice.getlabelsfromnote(this.note.noteId).subscribe((response:any)=>{
      console.log(response['data']);
      this.labellist=response['data'];
      });
      this.view = localStorage.getItem("view");
      console.log(this.view);
      this.getCollaborators();
    }
    getlabelsfromnote()
    {
      
    }
  openNote(note)
  {
    const dialogref=this.dialog.open(UpdatenoteComponent,{
      width:"600px",
      minHeight:"170px",
      maxHeight:"auto",
      data: { note },
    });
    dialogref.afterClosed().subscribe(result => {
    });
  }
  deleteForever(){
    this.noteservice.deleteforever(this.note.noteId).subscribe((result : any)=>{
      if(result['statusMsg']=="true")
      {
      this.snackbar.open("note deleted","cancel",{duration : 5000});
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
      }
      else
      this.snackbar.open("error while pinning","cancel",{duration : 5000});
    })
  }
  remove(label)
  {
    console.log(label);
    console.log(this.labellist);
    this.labelservice.deletelabelfromnote(label.labelId,this.note.noteId).subscribe((result : any)=>{
      if(result['statusMsg']=="true")
      {
      this.labellist= this.labellist.filter(x => x.labelId != label.labelId);
      console.log(this.labellist);
      this.snackbar.open("label deleted in note","cancel",{duration : 5000});
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
      }
      else
      this.snackbar.open("error while deleting label","cancel",{duration : 5000});
    })
  }
  removeReminder()
  {
    this.noteservice.deleteReminder(this.note.noteId).subscribe((result : any)=>{
      if(result['statusMsg']=="true")
      {
      this.snackbar.open("reminder deleted","cancel",{duration : 5000});
      }
      else
      this.snackbar.open("error while deleting reminder","cancel",{duration : 5000});
    })
  }
  // noteAdd(event){
  //   console.log('event',event);
  // }
  noteAdd(data) {
    this.labellist
    // var index = this.note.findIndex(x => x.hello === 'stevie')
    console.log("this.labellist",this.labellist);
    // var index = this.labellist.findIndex(x => x.hello === 'stevie')
    // this.note.labels=null;
    this.labellist.push(data);
    console.log('labellist',this.labellist);
    console.log('Picked date: ', data);
}
getCollaborators()
  {
  this.collaboratorservice.getCollaborators(this.note.noteId).subscribe((result : any)=>{
    this.collaborators=result['data'];
    console.log("collaborators",this.collaborators);

  })
  }
  collaboratorDialog(note)
  {
    const matdialogref = this.dialog.open(CollaboratorsComponent,{
      width : "700px",
      minHeight : "300px",
      maxHeight:"500px",
      data: { note },
    });
    matdialogref.afterClosed().subscribe(result => {
      console.log("label closed");
    });
  }
}
