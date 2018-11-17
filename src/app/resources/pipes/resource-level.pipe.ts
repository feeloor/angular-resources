import { PipeTransform, Pipe } from '@angular/core';
import { ResourceLevel } from '../models';

@Pipe({
  name: 'resourceLevel'
})
export class ResourceLevelPipe implements PipeTransform {
  transform(value: number): string {
    return ResourceLevel[value] || 'Level not found';
  }
}
