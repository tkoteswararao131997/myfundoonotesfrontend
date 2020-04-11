import { Component, OnInit, Inject, Input, ɵisListLikeIterable } from '@angular/core';
import {Label} from 'src/app/models/label';
import { LabelService } from 'src/app/services/label.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-showlabel',
  templateUrl: './showlabel.component.html',
  styleUrls: ['./showlabel.component.scss']
})
export class ShowlabelComponent implements OnInit {
  labels:Label[];
  newLabel: Label = new Label();
  constructor(
    private labelservice : LabelService,
    private snackbar : MatSnackBar,
    public matdialogref : MatDialogRef<ShowlabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ){this.labels=this.data;}

  ngOnInit() {
  }

  createLabel(labelInput : any)
  {
    console.log(this.labels);
    this.newLabel.labelName=labelInput;
    this.labelservice.createlabel(this.newLabel).subscribe((result:any)=>{
      console.log(result);
      if(result['statusMsg']=="true")
      this.snackbar.open("label added","cancel",{duration : 5000});
      else
      this.snackbar.open("label already exists","cancel",{duration:5000});
    })
  }
}
