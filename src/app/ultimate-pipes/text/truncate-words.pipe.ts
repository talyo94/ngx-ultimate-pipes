import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatewords'
})
export class TruncateWordsPipe implements PipeTransform {

  transform(value: string, words: number): string {
    if (value.split(' ').length <= words) {
      return value;
    }
    return `${value.split(' ').slice(0, words).join(' ')}...`;
  }
}
