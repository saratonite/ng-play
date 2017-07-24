import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import '../../node_modules/primeng/resources/themes/omega/theme.css';
import '../../node_modules/primeng/resources/primeng.min.css'

import { AppComponent } from './app.component';
import { WhySoSeriousComponent } from './why-so-serious/why-so-serious.component';

// PrimeNg Components
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    WhySoSeriousComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent]
})
export class AppModule { }
