import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book-service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book:Book;
  //books:Array<Book>=[];
  bookService:BookService;
  router:Router;
  constructor( bookService:BookService,router:Router) {
    
    this.book=new Book(); 
    this.bookService=bookService;
    this.router=router;
  }

  ngOnInit(): void {
  }
  // addBook(f:any){
  //   //console.log(f);
  //   //this.books.push(f.value);
  //   this.bookService.books.push(f.value);
  //   console.log(this.book);
  //   this.router.navigate(['/show-all']);
  // }
  addBook(f:any){
    if(this.bookService.idExists(f.value.id)){
      alert('id already exists');
    }
    else{
      this.bookService.books.push(f.value);
      console.log(this.book);
      this.router.navigate(['/show-all']);
      }
  }
}
