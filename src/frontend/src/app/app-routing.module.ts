import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookReactiveComponent } from './book-reactive/book-reactive.component';
import { CovidClientComponent } from './covid-client/covid-client.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {
    path:'add-book',component:AddBookComponent
  },
  {
    path:'show-all',component:ShowBookComponent
  },
  {
    path:'update-book/:id',component:UpdateBookComponent
  },
  {
    path:'covid-client',component:CovidClientComponent
  },
  {
    path:'', component:AddBookComponent
  },
  {
    path:'error', component:ErrorPageComponent
  },
  {
    path:'book-reactive',component:BookReactiveComponent
  },
  {
    path:'**', redirectTo:'/error'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
