import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WhySoSeriousComponent } from './why-so-serious/why-so-serious.component';

// PrimeNg Components
import {ButtonModule , TreeModule, TreeDragDropService , DragDropModule  } from 'primeng/primeng';
import { PngTryTreeComponent } from './png-try-tree/png-try-tree.component';
import { GroupStepsComponent } from './group-steps/group-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    WhySoSeriousComponent,
    PngTryTreeComponent,
    GroupStepsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    TreeModule,
    DragDropModule
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
