import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LettersAvatarModule } from './modules/letters-avatar/letters-avatar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LettersAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
