import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'now'
})
export class NowPipe implements PipeTransform {

  transform(): any {
    return new Date();
  }

}
