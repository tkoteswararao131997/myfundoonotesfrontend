import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import {Note} from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material';
import { window } from 'rxjs/operators';
import {Label} from 'src/app/models/label';
import { LabelService } from 'src/app/services/label.service';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  datetime:any;
  private selected : any=false;
  newLabel: Label = new Label();
  notelabels:Label[]=[];
  isedit : boolean = false;
  @Output() onAddNote: EventEmitter<any> = new EventEmitter<any>();
  constructor(private noteservice : NoteService,private snackbar:MatSnackBar,private labelservice : LabelService) { }
  @Input() note: Note;
  labels : Label[];
  ngOnInit() {
    this.labelservice.autoRefresh.subscribe(()=>{
      this.getlabels();
    })
    this.getlabels();
  }

  getlabels()
  {
    this.labelservice.getlabels().subscribe((result : any)=>{
      console.log(result);
      this.labels=result['data'];
      // this.labelservice.subject.next();
  });
}
  doarchive(){
      this.noteservice.archieve(this.note.noteId).subscribe((result:any)=>{
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
      this.noteservice.trashed(this.note.noteId).subscribe((result:any)=>{
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
        colorCode: "#FF33AC", name: "INDIANRED" 
      },
      { 
        colorCode: "#DD33FF", name: "pink" 
      },
      { 
        colorCode: "#4233FF", name: "violet" 
      },
      { 
        colorCode: "#33F6FF", name: "cyan" 
      },
    ],
    [
      { 
        colorCode: "#55FF33", name: "green" 
      },
      { 
        colorCode: "#E0FF33", name: "yellow" 
      },
      {
        colorCode : "#FFB533" , name : "orange"
      },
      {
        colorCode : "#FFA07A" , name : "LIGHTSALMON"
      }
    ],
    [
      { 
        colorCode: "#F2EDEB", name: "silver" 
      },
      { 
        colorCode: "#008080", name: "TEAL" 
      },
      {
        colorCode : "#7B4E12" , name : "brown"
      },
      {
        colorCode : "#B9F03B" , name : "LIME"
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
  addlabeltonote(label)
  {
    this.labelservice.addlabeltonote(this.note.noteId,label.labelId).subscribe((result : any)=>{
      if(result['statusMsg']="true")
      {
        this.onAddNote.emit(result.data);
        // console.log("initial---------"+this.notelabels);
        // this.notelabels.push(result['data']);
         console.log(result.data);
        // console.log("after--------`---"+this.notelabels)
      // this.labellist= this.labellist.filter(x => x.labelId != label.labelId);
      this.snackbar.open("label added to note","cancel",{duration : 5000});
      }
      else
      this.snackbar.open("error occuring while label adding to note","cancel",{duration : 5000});

    })
  }
  createLabelAddNote(labelInput : any)
  {
    console.log(this.labels);
    this.newLabel.labelName=labelInput;
    this.labelservice.createlabeladdnote(this.newLabel,this.note.noteId).subscribe((result:any)=>{
      if(result['statusMsg']=="true")
      {
      this.onAddNote.emit(result.data);
      this.notelabels.push(result['data']);
      console.log(this.notelabels);
      this.snackbar.open("label added","cancel",{duration : 5000});
      }
      else
      this.snackbar.open("label already exists","cancel",{duration:5000});
      this.isedit=false;
    })
  }
  reminder(datetime)
  {
    console.log(datetime);
    this.noteservice.createreminder(datetime,this.note.noteId).subscribe((result:any)=>{
      this.note.reminde=result['data.reminde'];
    })
  }
}
