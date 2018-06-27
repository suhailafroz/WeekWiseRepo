import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent],
  declarations: [LandingPageComponent]
})
export class AdminModule { }
