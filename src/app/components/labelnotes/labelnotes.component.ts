import { Component, OnInit, Input } from '@angular/core';
import {Label} from 'src/app/models/label';
import {Note} from 'src/app/models/note';
import { LabelService } from 'src/app/services/label.service';
@Component({
  selector: 'app-labelnotes',
  templateUrl: './labelnotes.component.html',
  styleUrls: ['./labelnotes.component.scss']
})
export class LabelnotesComponent implements OnInit {
  
  labelnotes:Note[];
  constructor(private labelservice: LabelService) {
    
   }

  ngOnInit() {
    this.labelservice.myMethod$.subscribe((data) => {
      console.log(data);
      this.labelnotes = data['data'];
    });
    
  }

}