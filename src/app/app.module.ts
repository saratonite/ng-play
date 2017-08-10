import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WhySoSeriousComponent } from './why-so-serious/why-so-serious.component';

// PrimeNg Components
import {ButtonModule , TreeModule, TreeDragDropService , DragDropModule ,TreeTableModule,SharedModule, AutoCompleteModule } from 'primeng/primeng';
import {TreeTableModule as NGTreeTableModule } from "ng-treetable";
import { PngTryTreeComponent } from './png-try-tree/png-try-tree.component';
import { GroupStepsComponent } from './group-steps/group-steps.component';
import { GroupStepsTreeComponent } from './group-steps-tree/group-steps-tree.component';
import { DragAndDropExampleComponent } from './drag-and-drop-example/drag-and-drop-example.component';
import { changeOrder } from './pipes/orderChange';
import { PngTryTreeTableComponent } from './png-try-tree-table/png-try-tree-table.component';
import { ExampleNgTreeTableComponent } from './example-ng-tree-table/example-ng-tree-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WhySoSeriousComponent,
    PngTryTreeComponent,
    GroupStepsComponent,
    GroupStepsTreeComponent,
    DragAndDropExampleComponent,
    changeOrder,
    PngTryTreeTableComponent,
    ExampleNgTreeTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    TreeModule,
    DragDropModule,
    TreeTableModule,
    SharedModule,
    AutoCompleteModule,
    NGTreeTableModule
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
