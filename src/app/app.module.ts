import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,

  ],
  imports: [
    BrowserModule,
    PhotosModule,
    HttpClientModule,  //<--- Importando o Modulo do  HttpClient 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
