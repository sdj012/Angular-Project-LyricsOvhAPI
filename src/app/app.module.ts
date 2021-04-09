import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentsComponent } from './contents/contents.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { EntryComponent } from './entry/entry.component'; //Mechanism for communicating ewith a remote server over HTTP

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    LyricsComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
