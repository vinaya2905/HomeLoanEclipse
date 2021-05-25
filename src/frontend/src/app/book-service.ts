import { Injectable } from "@angular/core";
import { Book } from "./book";

@Injectable({
    providedIn:'root',
})
export class BookService{
    // getBook(id: any): Book {
    //   throw new Error('Method not implemented.');
    // }
    books:Array<Book>=[];
    getBook(id: any):Book {
        let book:Book=new Book();
        //book=this.books.find(b=>b.id==id);
        for(let i=0;i<this.books.length;i++){
            let b=this.books[i];
            if(b.id==id){
                book=b;
                break;
            }
        }
        return book;
    }
    updatedBook(book: Book):boolean {
        let bookToUpdate = this.books.find(b=>b.id==book.id);
        if(bookToUpdate){
          bookToUpdate.title=book.title;
          bookToUpdate.author=book.author;
          bookToUpdate.price=book.price;
          return true;
        }
        return false;
      }
      idExists(id: any):boolean {
        if(this.books.find(b=>b.id==id)){
            return true;
        }
        return false;
    }

}