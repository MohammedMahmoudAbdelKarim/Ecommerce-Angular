import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products: any[], item: string): any[] {
    if (item == null || item == '') {
      return products;
    }
    return products.filter(pro => {
      return pro['Name'].toLowerCase().includes(item.toLowerCase() || pro['Category'].toLowerCase().includes(item.toLowerCase)());
    })
  }
}