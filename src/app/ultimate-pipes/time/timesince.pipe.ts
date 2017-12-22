import { Pipe, PipeTransform } from '@angular/core';


const TIME_CHUNKS = [];

@Pipe({
  name: 'timesince'
})
export class TimesincePipe implements PipeTransform {
  transform(value: Date): any {
    const now: Date = new Date();
    const timedelta = now.getTime() - value.getTime();
    if (timedelta <= 0) {
      return '0';
    }
    let x = timedelta / 1000;
    const seconds = Math.floor(x % 60);
    x = x / 60;
    const minutes = Math.floor(x % 60);
    x = x / 60;
    const hours = Math.floor(x % 24);
    x = Math.floor(x / 24);


    let t = '';
    if (x) {
      t += `${x} days`;
    }
    if (hours) {
      t ? t += `, ${hours} hours ` : t += `${hours} hours`;
    }
    if (minutes) {
      t ? t += `, ${minutes} minutes` : t += `${minutes} minutes`;
    }
    if (seconds) {
      t ? t += `, ${seconds} seconds` : t += `${seconds} seconds`;
    }
    return t;
  }

}
