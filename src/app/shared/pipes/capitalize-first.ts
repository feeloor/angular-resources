import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirst implements PipeTransform {

  transform(value: string) {
    return value[0].toUpperCase() + value.slice(1);
  }
}
