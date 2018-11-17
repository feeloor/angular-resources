import { PipeTransform, Pipe } from '@angular/core';
import { ResourceType } from '../models';

@Pipe({
  name: 'resourceType'
})
export class ResourceTypePipe implements PipeTransform {
  transform(value: number): string {
    return ResourceType[value] || 'Type not found';
  }
}
