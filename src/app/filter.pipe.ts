import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: any, term: any): any {
    if (term===undefined) return books;

    return books.filter(function(book){
      console.log(book.name);
      return book.title.toLowerCase().includes(term.toLowerCase());
    })

  
  }

}
 