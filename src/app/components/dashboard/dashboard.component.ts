import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, PartialObserver, BehaviorSubject, Subject } from 'rxjs';
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
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

 export class DashboardComponent {
   file :any;
  token=localStorage.getItem("token");
  profile=localStorage.getItem("profile");
  name=localStorage.getItem("name");
  email=localStorage.getItem("email");
  labels : Label[];
  labelnotes : Label[];
  view:any=true;
   searchNotes = new BehaviorSubject([]);
   currentMessage = this.searchNotes.asObservable();
  //searchNotes : Note[];
  public observer: PartialObserver<any>;
  constructor(private userservice:UserService,private router : Router,private noteservice : NoteService,private labelservice : LabelService,private dialog : MatDialog,private snackbar:MatSnackBar,private activatedroute:ActivatedRoute){}
  ngOnInit()
  {
    this.labelservice.autoRefresh.subscribe(()=>{
    this.getlabels();
    })
    this.getlabels();
    //localStorage.setItem("view",this.view);
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

    localStorage.setItem("view",this.view);
    if(this.view==true)
      this.view=false;
    else
      this.view=true;
    console.log(this.view,"view");
   }
    // let matcardnote= document.getElementsByClassName('matcardnote');
    // if(this.view == true){
    //   this.view=false;
    // document.getElementById('get-notes').style.width = '520px';
    // for(var i=0;i<matcardnote.length;i++){
    //   // matcardnote[i].style.width = '600px'
    // }
    // console.log("matcardnote",matcardnote);
    
    // }
    // else{
    //   this.view=true;
    //   document.getElementById('get-notes').style.width = 'auto';
    //   for(var i=0;i<matcardnote.length;i++){
    //     // matcardnote[i].style.width = '210px'
    //   };
    // }

  // }
  onProfileUpload(event)
  {
    console.log(event);
    this.profile=event.target.files[0]['name'];
    console.log(this.profile);
  }
  changeProfile(event)
  {
    this.file=event.target.files[0];
    const formData = new FormData();  
    formData.append('file', this.file);  
    this.file.inProgress = true;
    this.userservice.uploadProfie(formData).subscribe((result:any)=>{
      console.log(result['data']['profile']);
      this.profile=result['data']['profile'];
      localStorage.setItem("profile",this.profile);
      console.log(this.profile)
    });
  }

  signOut()
  {
    localStorage.setItem("token",null);
    this.router.navigate(['/']);
  }

}