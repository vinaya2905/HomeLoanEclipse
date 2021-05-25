import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book-service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book:Book;
  constructor(private route:ActivatedRoute,private bookService:BookService) {
    this.book=new Book();
   }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.book=this.bookService.getBook(id);
    console.log(this.book);
  }
  updateBook(book:Book){
    if(this.bookService.updatedBook(book)){
       alert('Book updated successfully');
    }
    else{
      alert("Book not found");
    }
  }
}
