import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesno'
})
export class YesNoPipe implements PipeTransform {

  transform(value: any, args: any[] = []): any {
    if (value === false) {
      return args [1] || 'no'
    }
    return value ? (args[0] || 'yes') : (args[2] || args [1] || 'no');
  }

}
