import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
public bookId;
public books;
public book;
  constructor(private route: ActivatedRoute, private router: Router, private _bookservice:BooksService) { }

  ngOnInit(): void {
    this._bookservice.getBooks().subscribe(data=>this.books=data)
    this.route.paramMap.subscribe((params: ParamMap)=>
    {
      let id=parseInt(params.get('id'));
      this.bookId=id;
    })
  }

  getId(bookId) {
    return this.book=this.books.find(x=>x.id===this.bookId);

    
  }
  

}
