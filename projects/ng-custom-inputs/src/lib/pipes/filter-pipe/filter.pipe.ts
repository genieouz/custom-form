import { Pipe, PipeTransform } from '@angular/core';
import * as Diacritics from 'diacritics';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    if (!items || !searchText || !Array.isArray(items)) {
      return items;
    }
    return items.filter(item => {
      const search = Diacritics.remove(searchText.toLowerCase());
      const target = Diacritics.remove(JSON.stringify({ '': item }).toLowerCase());
      return target.includes(search);
    });
  }
}
