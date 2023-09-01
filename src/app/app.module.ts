import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { HeaderComponent } from './header/header.component';
import { FotoComponent } from './foto/foto.component';
import { FotolistComponent } from './fotolist/fotolist.component';

import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotoComponent,
    FotolistComponent,
    FormularioComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
