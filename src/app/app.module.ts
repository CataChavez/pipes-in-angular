import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/es-CL';

registerLocaleData(locales);


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'es-CL' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
