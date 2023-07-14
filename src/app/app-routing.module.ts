import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { DesignComponent } from './design/design.component';
import { GutterComponent } from './gutter/gutter.component';
import { RoleOfChefsComponent } from './role-of-chefs/role-of-chefs.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: BannerComponent
  },
  {
    path: 'about-us',
    component: DesignComponent
  },
  {
    path: 'landing',
    component: GutterComponent
  },
  {
    path: 'team',
    component: RoleOfChefsComponent
  },
  {
    path: 'contact',
    component: FormComponent
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // wildcart root
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
