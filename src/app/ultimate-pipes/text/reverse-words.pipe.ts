import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversewords'
})
export class ReverseWordsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let words = value.split(' ');
    words.forEach((word, i) => {
      words[i] = word.split('').reverse().join('');
    });
    return words.join(' ');
  }

}
