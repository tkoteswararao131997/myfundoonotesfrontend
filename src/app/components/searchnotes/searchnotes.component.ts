import { Component, OnInit, Input } from '@angular/core';
import {Note} from 'src/app/models/note'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NoteService } from 'src/app/services/note.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-searchnotes',
  templateUrl: './searchnotes.component.html',
  styleUrls: ['./searchnotes.component.scss']
})
export class SearchnotesComponent implements OnInit {
  searchNotes = new BehaviorSubject([]);
  currentMessage = this.searchNotes.asObservable();
  searchInput : any
  constructor(private noteservice:NoteService,private router:ActivatedRoute,) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      console.log(params['searchInput'])
      this.searchInput=  params['searchInput'];
      this.searchTitle();
     });
     this.noteservice.searchByTitle(this.searchInput).subscribe((result:any)=>{
       this.searchNotes.next=result['data'];
       console.log(this.searchNotes);
     });
      // this.noteservice.autoRefresh.subscribe(() => {
      //  this.searchTitle();
      // });
      this.searchTitle();
    console.log("shownotes compo")
    
  }


  // getAllNotes() {
  //   this.noteservice.getnotes().subscribe(
  //     (response: any) => {
  //       console.log(response);
  //     this.allNotes=response; 
  //     },
      
  //   );
  // }
  searchTitle()
  {
    this.noteservice.searchByTitle(this.searchInput).subscribe((result:any)=>{
      this.searchNotes=result['data'];
      console.log(this.searchNotes);
    })
  }
  

}
