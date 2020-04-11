import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, reduce } from 'rxjs/operators';
import { Router } from '@angular/router';
import { element } from 'protractor';
import  {Label} from 'src/app/models/label';
import { LabelService } from 'src/app/services/label.service';
import { MatDialog } from '@angular/material';
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
  constructor(private router : Router,private labelservice : LabelService,private dialog : MatDialog) {}
  onClickView() {
    return this.grid === true ? (this.grid = false) : (this.grid = true);
  }
  ngOnInit()
  {
    this.labelservice.getlabels().subscribe((result : any)=>{
      console.log(result);
      this.labels=result['data'];
    });
  }
  editlabels()
  {
    const matdialogref = this.dialog.open(ShowlabelComponent,{
      width : "300px",
      minHeight : "300px",
      maxHeight:"auto",
      panelClass: 'custom-dialog-container',
      data:this.labels
    });
    matdialogref.afterClosed().subscribe(result => {
      console.log("label closed");
    });
  }

}
