import { Component, OnInit, Input } from '@angular/core';
import {Note} from 'src/app/models/note'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NoteService } from 'src/app/services/note.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-searchnotes',
  templateUrl: './searchnotes.component.html',
  styleUrls: ['./searchnotes.component.scss']
})
export class SearchnotesComponent implements OnInit {
  @Input() searchNotes:Note[];
  allNotes : Note[];
  searchInput : any
  constructor(private noteservice:NoteService,private router:ActivatedRoute,) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      console.log(params['searchInput'])
      this.searchInput=  params['searchInput'];
    });
    this.noteservice.autoRefresh.subscribe(() => {
      this.getAllNotes();
    });
    this.getAllNotes();
    
  }


  getAllNotes() {
    this.noteservice.getnotes().subscribe(
      (response: any) => {
        console.log(response);
      this.allNotes=response; 
      },
      
    );
  }
  

}
