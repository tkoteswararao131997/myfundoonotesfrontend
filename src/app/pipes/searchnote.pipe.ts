import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchnote'
})
export class SearchnotePipe implements PipeTransform {

  transform(notes: any[], noteTitle: string): any {
    if(!notes) return [];
    if(!noteTitle) return notes;
    noteTitle = noteTitle.toLowerCase();
   return notes.filter( note => {
    return note.noteTitle.toLowerCase().includes(noteTitle);
  });
  }

}
