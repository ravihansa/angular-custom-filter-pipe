import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }
  transform(value: string, keyName: string, parentId: any, ): string {
    return _.filter(value, function (o) {
        return o[keyName] === +parentId;
    });
  }

}
