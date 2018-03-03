import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    // if (value.indexOf('damn') > 0) {
    //   value = value.replace('damn', 'blah');
    // }

    for (let index = 0; index <= args.length; index++) {
      if (value.indexOf(args[index]) > 0) {
        console.log('Index of current search: ' + index);
        value = value.replace(args[index].toLowerCase(), 'blah');
      }
    }

    return value;
  }

}
