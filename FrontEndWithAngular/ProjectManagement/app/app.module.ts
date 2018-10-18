import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
