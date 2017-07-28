import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop-example',
  templateUrl: './drag-and-drop-example.component.html',
  styleUrls: ['./drag-and-drop-example.component.css']
})
export class DragAndDropExampleComponent implements OnInit {

  private peoples = ['foo','bar','baz']

  constructor() { }

  ngOnInit() {


  }

  onDropHandler($event) {

    console.log($event)

  }

  onDropChild($event) {

    console.log('Hi from dragon child')
  }

}
