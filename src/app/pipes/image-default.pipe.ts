import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let image = '';
    if (value) {
      image = value;
    } else {
      if (args[0]) {
        image = args[0];
      } else {
        image = args[1];
      }
    }
    return image;
  }

}
