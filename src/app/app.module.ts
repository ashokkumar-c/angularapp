import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { CoreModule } from './core/core.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddtaskComponent } from './components/addtask/addtask.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactListComponent,
    TaskListComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
