import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TodoComponent} from './todo-list/todo.component';
import {SaveOptionsComponent} from './todo-list/save-options/save-options.component'; 
import {ItemPreviewComponent} from './todo-list/item-preview/item-preview.component';

@NgModule({
  declarations: [
    AppComponent, 
    TodoComponent, 
    SaveOptionsComponent, 
    ItemPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
