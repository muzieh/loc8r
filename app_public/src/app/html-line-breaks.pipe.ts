import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlLineBreaks'
})
export class HtmlLineBreaksPipe implements PipeTransform {

  transform(text: any, args?: any): any {
    return text.replace(/\n/g, '<br />');
  }

}
