import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

   transform(items: any[], predicate: string): any[] {
      return items.filter(item => {
        const values = getValues(item)
          .map(String)
          .map(val => val.toLowerCase());


        return values.some(value => value.includes(predicate.toLowerCase()));
      });
    }

}

function getValues(object) {
  return Object.keys(object).map(key => object[key]);
}