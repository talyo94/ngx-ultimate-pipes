import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: { term: string, param: string | string[] }): any {
    if (!args || !args.term) {
      return value;
    }

    if (!Array.isArray(args.param)) {
      return value.filter(obj => obj[<string>args.param].toLowerCase().includes(args.term.toLowerCase()));
    }
    return value.reduce((total, current) => {
      for (let i = 0; i < args.param.length; i++) {
        if (current[args.param[i]].toLowerCase().includes(args.term.toLowerCase())) {
          total.push(current);
          return total;
        }
      }
      return total;
    }, []);
  }

}
