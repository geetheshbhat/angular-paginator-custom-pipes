import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDisplayComponent } from './book-display/book-display.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [{
  path:'',redirectTo:'/books',pathMatch:'full'},
{path:'books', component: BookDisplayComponent},
{path:'books/:id',component:BookDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
