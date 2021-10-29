import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(locales);
registerLocaleData(localeFr);


import { AppComponent } from './app.component';
import { CapitalizadePipe } from './pipes/capitalizade.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadePipe,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'es' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
