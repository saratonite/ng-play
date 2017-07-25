import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WhySoSeriousComponent } from './why-so-serious/why-so-serious.component';

// PrimeNg Components
import {ButtonModule , TreeModule, TreeDragDropService  } from 'primeng/primeng';
import { PngTryTreeComponent } from './png-try-tree/png-try-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    WhySoSeriousComponent,
    PngTryTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    TreeModule
  ],
  providers: [
    TreeDragDropService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent]
})
export class AppModule { }
