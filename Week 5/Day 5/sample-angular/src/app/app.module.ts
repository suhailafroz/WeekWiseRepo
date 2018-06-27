import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { AnotherComponentComponent } from './another-component/another-component.component';
import { RouterModule } from '@angular/router';
import { route } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    AnotherComponentComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
