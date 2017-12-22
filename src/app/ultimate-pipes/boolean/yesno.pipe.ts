import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesno'
})
export class YesNoPipe implements PipeTransform {

  transform(value: any, args: any[] = []): any {
    if (value) {
      return args[0] || 'yes';
    } else {
      return args[2] || args [1] || 'no';
    }
  }

}
