import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    BindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
