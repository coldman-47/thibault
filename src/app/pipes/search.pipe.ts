import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(array: any[], str?: string): any[] {
    return str ? array.filter((item) => item.name.indexOf(str) !== -1) : array;
  }
}
