import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, reduce } from 'rxjs/operators';
import { Router } from '@angular/router';
import { element } from 'protractor';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
 export class DashboardComponent { 
   vnotes : any= false;
   vreminder : any= false;
   veditLabel : any= false;
   varchive : any= false;
   vtrash : any= false;
//   token : String;
//   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
//     .pipe(
//       map(result => result.matches),
//       shareReplay()
//     );

  constructor(private router : Router) {}
  // onNotes() {
  //   this.token = localStorage.getItem("token");
  //   console.log(this.token)
  //   this.router.navigate(['dashboard/notes/' + this.token])
  // }
  notes()
  {
    this.vnotes=true;
    this.vreminder=false;
    this.veditLabel=false;
    this.varchive=false;
    this.vtrash=false;
    this.router.navigate(['dashboard/notes']);
  }
  reminder()
  {
    this.vnotes=false;
    this.vreminder=true;
    this.veditLabel=false;
    this.varchive=false;
    this.vtrash=false;
  }
  editLabel()
  {
    this.vnotes=false;
    this.vreminder=false;
    this.veditLabel=true;
    this.varchive=false;
    this.vtrash=false;
  }
  archive()
  {
    this.vnotes=false;
    this.vreminder=false;
    this.veditLabel=false;
    this.varchive=true;
    this.vtrash=false;
  }
  trash()
  {
    this.vnotes=false;
    this.vreminder=false;
    this.veditLabel=false;
    this.varchive=false;
    this.vtrash=true;
  }
}
