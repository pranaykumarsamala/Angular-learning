import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { DesignComponent } from './design/design.component';
import { GutterComponent } from './gutter/gutter.component';
import { RoleOfChefsComponent } from './role-of-chefs/role-of-chefs.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListingComponent } from './listing/listing.component';
import { Filter1Component } from './filter1/filter1.component';
import { Filter2Component } from './filter2/filter2.component';
import { Filter3Component } from './filter3/filter3.component';
import { Filter4Component } from './filter4/filter4.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { Submenu2Component } from './submenu2/submenu2.component';

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
    path: 'list',
    component: ListingComponent,
    children: [
      {
        path:'filter1',
        component: Filter1Component,
        children: [
          {
            path:'submenu',
            component: SubmenuComponent,
          },
          {
            path:'submenu2',
            component: Submenu2Component,
          }
        ]
      },
      {
        path:'filter2',
        component: Filter2Component
      },
      {
        path:'filter3',
        component: Filter3Component
      },
      {
        path:'filter4',
        component: Filter4Component
      },
    ]
  },
  {
    path:'',
    redirectTo: '/home',
    // redirectTo: '/list/filter1',
    pathMatch: 'full'
  },
  {
    path:'list',
    // component: ListingComponent,
    redirectTo: '/list/filter1',
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
