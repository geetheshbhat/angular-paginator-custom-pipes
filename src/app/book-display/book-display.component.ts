import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FilterPipe} from '../filter.pipe'
@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css'],
  
 
})

export class BookDisplayComponent implements OnInit {
  data: Array<any>;
  totalRecord: number;
  page: number=1;
  public term;

  constructor(private _bookservice: BooksService, private route: ActivatedRoute, private router: Router) {
    this.data=new Array<any>();
   }

  ngOnInit(): void {
    this._bookservice.getBooks().subscribe(data=>this.data=data);
    
    this.totalRecord=Object.keys(this.data).length;
    }
  viewDetails(book){
    this.router.navigate(['/books',book.id]);

  }
  // applyFilter(event: Event){
  //   let filterValue=(event.target as HTMLInputElement).value;
  //   this.data.filter=filterValue.trim().toLowerCase();
  // }

}

