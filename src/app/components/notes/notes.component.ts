import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-NotesComponent',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  createNoteForm: FormGroup;
card: boolean = false;
open : boolean;
constructor(
  private _router: Router,
  private _snackBar: MatSnackBar,
  private _formBuilder: FormBuilder,
  private _noteService: NoteService
) { }

ngOnInit() {
  this.createNoteForm = this._formBuilder.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
  });
}
cardSwap() {
  console.log(this.card);
  return this.card === true ? (this.card = false) : (this.card = true);
}
onOpen()
{
  this.open=true;
}
createNote() {
  this.open=false;
  if (this.createNoteForm.invalid) 
    console.log("Opps! no notes are added...");
  else
  {
    this._noteService.createnote(this.createNoteForm.value).subscribe((result : any)=>{
      console.log(result);
      if(result['statusMsg']=="true")
        this._snackBar.open("note added","cancel",{duration : 5000});
      window.location.reload();
    })
  }
  
}

dopin()
{

}
}
