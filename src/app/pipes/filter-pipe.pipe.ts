import { Car } from '../models/car';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filterPipe',
})
// I tried to use this method in generic terms,
//but I do not think it is very safe,
//so I did not use this class anywhere.
export class FilterPipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (data: any) {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }
}
