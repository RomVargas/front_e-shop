import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule }  from './@admin/pages/admin.module';
import { PublicModule } from './@public/pages/public.module';
import { GraphqlModule } from './@graphql/modules/graphql.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from '@shop/pages/forms/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    PublicModule,
    LoginModule,
    GraphqlModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
