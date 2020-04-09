import { Component, OnInit,Input} from '@angular/core';
import {Note} from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material';
import { window } from 'rxjs/operators';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  private selected : any=false;
  constructor(private noteservice : NoteService,private snackbar:MatSnackBar) { }
  @Input() note: Note;
  ngOnInit() {
  }
  doarchive(){
      console.log(this.note);
      this.noteservice.archieve(this.note.noteId).subscribe((result:any)=>{
        console.log(result);
        if(result['statusMsg']=="true")
        {
          this.snackbar.open("note was archieved","cancel",{duration : 5000});
        }
        else
          this.snackbar.open("error occured","cancel",{duration : 5000});
        
      })
  }

  toTrash()
  {
    console.log(this.note);
      this.noteservice.trashed(this.note.noteId).subscribe((result:any)=>{
        console.log(result);
        if(result['statusMsg']=="true")
        {
          this.snackbar.open("note was trashed","cancel",{duration : 5000});
        }
        else
          this.snackbar.open("error occured","cancel",{duration : 5000});
      })
  }
  iconview()
  {
    this.selected=true
  }

  color(){
    console.log("Note color")
  }
    colorsList = [
      [
        { 
          colorCode: "rgba(198, 222, 255,1)", name: "Blue" 
        },
        { 
          colorCode: "rgba(229, 228, 226,1)", name: "Gray" 
        },
        { 
          colorCode: "rgba(230, 169, 236,1)", name: "Pink" 
        },
      ],
      [
        { 
          colorCode: "rgba(233, 171, 23,1)", name: "Yellow" 
        },
        { 
          colorCode: "rgba(249, 150, 107,1)", name: "Orange" 
        },
        { 
          colorCode: "rgba(255,255,255,1)", name: "white" 
        },
        {
          colorCode : "#00ff00" , name : "palegreen"
        },
        {
          colorCode : "#ff0000" , name : "red"
        }
      ]
    ]
  changeColor(color)
  {
    this.noteservice.notecolor=color;
    this.noteservice.changecolor(this.noteservice.notecolor.name,this.note.noteId).subscribe((result : any)=>{
      console.log(result);
      if(result['statusMsg']="true")
      this.snackbar.open("color changed","cancel",{duration : 5000});

    })
  }
}
