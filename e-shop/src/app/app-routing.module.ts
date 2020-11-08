import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./@public/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./@public/pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./@public/pages/about/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }