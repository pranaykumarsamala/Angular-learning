import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderRoutingModule } from './header.routing.module';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
