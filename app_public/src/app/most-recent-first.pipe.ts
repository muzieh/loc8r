import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mostRecentFirst'
})
export class MostRecentFirstPipe implements PipeTransform {

  private compare(a, b) {
    const createOnA = a.createdOn;
    const createdOnB = b.createdOn;
    let comparison = 1;
    if (createOnA > createdOnB) {
      comparison = -1;
    }
    return comparison;
  }

  transform(reviews: any[], args?: any): any {
    if (reviews && reviews.length > 0) {
      return reviews.sort(this.compare);
    }
    return null;
  }

}
