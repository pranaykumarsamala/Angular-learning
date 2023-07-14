import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { BindingsComponent } from './bindings/bindings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { DesignComponent } from './design/design.component';
import { ListComponent } from './list/list.component';
import { GutterComponent } from './gutter/gutter.component';
import { RoleOfChefsComponent } from './role-of-chefs/role-of-chefs.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    BindingsComponent,
    NavbarComponent,
    BannerComponent,
    DesignComponent,
    ListComponent,
    GutterComponent,
    RoleOfChefsComponent,
    FormComponent,
    FooterComponent,
    PageNotFoundComponent
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
