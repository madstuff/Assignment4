import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string, propertyName: string): any {
    if (value.length === 0 || search === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propertyName] === search) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
