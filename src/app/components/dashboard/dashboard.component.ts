import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, PartialObserver, BehaviorSubject } from 'rxjs';
import { map, shareReplay, reduce } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import  {Label} from 'src/app/models/label';
import { LabelService } from 'src/app/services/label.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ShowlabelComponent } from '../showlabel/showlabel.component';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { NoteService } from 'src/app/services/note.service';
import {Note} from 'src/app/models/note'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
 export class DashboardComponent {
  profile=localStorage.getItem("profile");
  name=localStorage.getItem("name");
  email=localStorage.getItem("email");
  labels : Label[];
  labelnotes : Label[];
  view: boolean = false;
  grid = "row";
   searchNotes = new BehaviorSubject([]);
   currentMessage = this.searchNotes.asObservable();
  //searchNotes : Note[];
  public observer: PartialObserver<any>;
  constructor(private router : Router,private noteservice : NoteService,private labelservice : LabelService,private dialog : MatDialog,private snackbar:MatSnackBar,private activatedroute:ActivatedRoute){}
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
  searchnotes(searchInput)
  {
    // console.log("in dashboard",this.searchNotes);
    // this.router.navigate(['dashboard/searchnotes'],{queryParams:{searchInput:searchInput}});
      // this.noteservice.searchByTitle(searchInput).subscribe((result:any)=>{
      //   this.searchNotes=result['data'];
      //   console.log(this.searchNotes,result['data']);
        this.router.navigate(['dashboard/searchnotes'],{queryParams:{searchInput:searchInput}});
    // })
    
  }
  gridView() {
    if(this.view==true){
      this.view=false;
      this.grid="row";
    }
    else{
      this.view=true;
      this.grid="column";
    }
    this.activatedroute.queryParams.subscribe(params => {
      let page= params['page'] || '';
      this.router.navigate(['/dashboard/notes'], { queryParams: { page: page, view: this.grid } });
    });
    console.log(this.view);
  }
  uploadFiles(file)
  {
    console.log(file)
    this.profile=file;
  }
  changeProfile(imgInput)
  {
    console.log(this.profile)
  }
}