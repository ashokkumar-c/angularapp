import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {AddtaskComponent} from './components/addtask/addtask.component';


const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path: 'home', component: HomeComponent},
  {path: 'task/add', component: AddtaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
