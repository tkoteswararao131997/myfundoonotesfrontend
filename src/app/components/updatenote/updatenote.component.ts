import { Component, OnInit, Inject } from '@angular/core';
import {NoteService} from 'src/app/services/note.service';
import {Note} from 'src/app/models/note';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
    note : Note;
  constructor(private noteservice : NoteService,
    private snackbar: MatSnackBar,
    public matDialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){this.note = this.data.note}

  ngOnInit() {
  }
  onSubmit() {
    console.log("data fetched note is ", this.note);

    this.matDialogRef.close();
    console.log(this.note.noteId);
    this.noteservice.updatenote(this.note,this.note.noteId).subscribe(
      (response: any) => {
        this.snackbar.open(response['message'], "ok", {
          duration: 4000
        });
      },
      errors => {
        console.log("Opps found errors.", errors);
        this.snackbar.open(errors.error.message, "ok", {
          duration: 4000
        });
      }
    );
  }

}
