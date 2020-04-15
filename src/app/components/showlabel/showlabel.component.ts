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
  istextopen : boolean = false;
  isedit : boolean = false;
  renameClicked : boolean=false;
  constructor(
    private labelservice : LabelService,
    private snackbar : MatSnackBar,
    public matdialogref : MatDialogRef<ShowlabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ){}

  ngOnInit() {
    this.labelservice.autoRefresh.subscribe(()=>{
      this.getlabels();
    })
    this.getlabels();
  
}
  getlabels()
  {
    this.labelservice.getlabels().subscribe((result : any)=>{
      this.labels=result['data'];
    });
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
      this.isedit=false;
    })
  }
  iseditlabel(label)
  {
    console.log(label);
    this.isedit=true;
  }
  deletelabel(label)
  {
    console.log(label);
    this.labelservice.deletelabel(label).subscribe((result : any)=>{
      console.log(result);
      if(result['statusMsg']=="true")
      this.snackbar.open("label deleted","cancel",{duration : 5000});
      else
      this.snackbar.open("error while deleting","cancel",{duration:5000});
    })
  }
  editlabel(label)
  {
    this.newLabel.labelName=label.labelName;
    this.newLabel.labelId=label.labelId;
    this.labelservice.updatelabel(this.newLabel,this.newLabel.labelId).subscribe((result : any)=>{
      console.log(result);
      if(result['statusMsg']=="true")
      this.snackbar.open("label updated","cancel",{duration : 5000});
      else
      this.snackbar.open("error while updating","cancel",{duration:5000});
    })
  }
  closedialog()
  {
    this.matdialogref.close();
  }

}
