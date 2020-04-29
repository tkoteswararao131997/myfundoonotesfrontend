import { Component, OnInit, Input, Inject } from '@angular/core';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import {Note} from 'src/app/models/note';
import {User} from 'src/app/models/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {
  @Input() note:Note
  collaborators:User[];
  newCollaborator=new User;
  newColabEmail:any;
  profile=localStorage.getItem("profile");
  name=localStorage.getItem("name");
  email=localStorage.getItem("email");
  constructor(private collaboratorservice : CollaboratorService,public matDialogRef: MatDialogRef<CollaboratorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){this.note = this.data.note}
  
  
  ngOnInit() {
    this.getCollaborators();
  }
  getCollaborators()
  {
  this.collaboratorservice.getCollaborators(this.note.noteId);
  this.collaboratorservice.getCollabList().subscribe((result)=>{
    this.collaborators = result;
  })
  // .subscribe((result : any)=>{
  //   this.collaborators=result['data'];
  //   console.log(this.collaborators);

  // })
  }

  removeCollaborator(collaborator){
    console.log(collaborator,this.note.noteId);
    this.newCollaborator.email=collaborator.email;

    this.collaboratorservice.removeCollaborator(this.newCollaborator.email,this.note.noteId);
  }

  addColab(colabName){
    this.newColabEmail=colabName;
    this.collaboratorservice.addCollaborator(this.newColabEmail,this.note.noteId);
  }
  closeDialog()
  {
    this.matDialogRef.close(this.collaborators);
  }

}
