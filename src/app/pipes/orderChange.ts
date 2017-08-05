import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'changeOrder' })
export class changeOrder implements PipeTransform {
  transform(allPeoples) {
    return allPeoples.map( ( val ,index) => { val.order = index + 1; return val; });
  }
}
