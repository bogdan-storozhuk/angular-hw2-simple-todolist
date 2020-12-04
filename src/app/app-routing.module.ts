import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonClickComponent } from './button-click/button-click.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'not-todo',
    component: ButtonClickComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
