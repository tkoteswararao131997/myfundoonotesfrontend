import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchnote'
})
export class SearchnotePipe implements PipeTransform {

  transform(allNotes: any[], searchInput: string): any[] {
    if (!allNotes)
      return [];
    if (!searchInput)
      return allNotes;
    searchInput = searchInput.toLowerCase();
    return allNotes.filter(note => {
      return note.title.toLowerCase().includes(searchInput);
    });
  }

}
