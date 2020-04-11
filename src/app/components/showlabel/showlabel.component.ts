import { Component, OnInit, Inject } from '@angular/core';
import {Label} from 'src/app/models/label';
import { LabelService } from 'src/app/services/label.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-showlabel',
  templateUrl: './showlabel.component.html',
  styleUrls: ['./showlabel.component.scss']
})
export class ShowlabelComponent implements OnInit {
  label:Label[];
  constructor(
    private labelserice : LabelService,
    private snackbar : MatSnackBar,
    public matdialogref : MatDialogRef<ShowlabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ) {this.label=this.data.label}

  ngOnInit() {
  }

}
