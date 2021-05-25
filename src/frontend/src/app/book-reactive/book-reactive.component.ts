import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenTitleValidator } from './title-validator';


@Component({
  selector: 'app-book-reactive',
  templateUrl: './book-reactive.component.html',
  styleUrls: ['./book-reactive.component.css']
})
export class BookReactiveComponent implements OnInit {

  // booksForm:FormGroup =new FormGroup({
  //   id:new FormControl(),
  //   title:new FormControl(),
  //   author:new FormControl(),
  //   price:new FormControl()
  // });
  booksForm = this.formBuilder.group(
    {
      id:['', [Validators.required, Validators.min(100)]],
      title:['',[Validators.required, forbiddenTitleValidator]],
      price:[''],
      authorForm:this.formBuilder.group({
      authorName:[''],
      authorEmail:['']
    })
    }
  )
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  addBook(f:any){

  }
}
