import { Component, OnInit } from '@angular/core';
import{Note} from 'src/app/models/note'
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  notes:Note[];
  constructor(private noteservice : NoteService){}
    ngOnInit() {
      this.noteservice.autoRefresh.subscribe(()=>{
        this.getarchievenotes();
      });
      this.getarchievenotes();
    
  }
  getarchievenotes()
  {
    this.noteservice.getarchievenotes().subscribe((result : any)=>{
      console.log(result);
      this.notes=result['data'];
  });
}
}
