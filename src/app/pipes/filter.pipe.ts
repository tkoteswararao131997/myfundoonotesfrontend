import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(labels: any[], labelName: string): any {
     if(!labels) return [];
     if(!labelName) return labels;
     labelName = labelName.toLowerCase();
    return labels.filter( label => {
     return label.labelName.toLowerCase().includes(labelName);
   });
   }
}

