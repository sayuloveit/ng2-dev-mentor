import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

   transform(items: any[], sort: ISort): any[] {

      if (!items) {
        return [];
      }

      const sortedItems = _.sortBy(items, sort.property);

      if (sort.reverse) {
        sortedItems.reverse();
      }

      return sortedItems;
    }

}
