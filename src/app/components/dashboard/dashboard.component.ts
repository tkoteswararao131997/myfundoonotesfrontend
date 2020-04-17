import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, PartialObserver } from 'rxjs';
import { map, shareReplay, reduce } from 'rxjs/operators';
import { Router } from '@angular/router';
import { element } from 'protractor';
import  {Label} from 'src/app/models/label';
import { LabelService } from 'src/app/services/label.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ShowlabelComponent } from '../showlabel/showlabel.component';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
 export class DashboardComponent { 
  grid: boolean = true;
  labels : Label[];
  labelnotes : Label[];
  public observer: PartialObserver<any>;
  constructor(private router : Router,private labelservice : LabelService,private dialog : MatDialog,private snackbar:MatSnackBar) {}
  onClickView() {
    return this.grid === true ? (this.grid = false) : (this.grid = true);
  }
  ngOnInit()
  {
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
  editlabels()
  {
    const matdialogref = this.dialog.open(ShowlabelComponent,{
      width : "300px",
      minHeight : "200px",
      maxHeight:"400px",
    });
    matdialogref.afterClosed().subscribe(result => {
      console.log("label closed");
    });
  }

  getlabelnotes(label)
  {
    this.labelservice.getnotesfromlabel(label.labelId).subscribe((result:any)=>{
      console.log(result);
      if(result['statusMsg']=="true")
      {
        this.labelservice.myMethod(result)
       this.snackbar.open("notes are","cancel",{duration:5000})
      }
      else
      this.snackbar.open("no notes present","cancel",{duration:5000})
    })
  }

}