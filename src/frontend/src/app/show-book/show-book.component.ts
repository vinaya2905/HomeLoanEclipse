import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book-service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {
  
  bookService:BookService;
  router:Router;
  constructor(bookService:BookService,router:Router) {
  
   this.bookService=bookService;
   this.router=router;
   }

  ngOnInit(): void {
  }
 updateBook(id:number){
  this.router.navigate(['update-book/'+id]);
 }
}
