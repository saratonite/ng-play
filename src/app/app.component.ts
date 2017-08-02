import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputType = 'text';
  funnyText = 'Why so serious :| ?'

  peoples = [{name:'Foo',order:0},{name:'Bar',order:0},{name:'Baz',order:0}];

  displayFix:false;
}
