import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHuyComponent } from './todo-huy/todo-huy.component';
import { TodoToanComponent } from './todo-toan/todo-toan.component';

const routes: Routes = [
  {path:'huy', component: TodoHuyComponent},
  {path:'toan', component: TodoToanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
