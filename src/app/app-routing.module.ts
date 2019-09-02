import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {AddtaskComponent} from './components/addtask/addtask.component';
import {EdittaskComponent} from './components/edittask/edittask.component';


const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path: 'home', component: HomeComponent},
  {path: 'task/add', component: AddtaskComponent},
  {path: 'task/edit/:id', component: EdittaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
