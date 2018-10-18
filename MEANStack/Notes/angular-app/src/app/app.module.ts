import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
