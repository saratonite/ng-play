import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropExampleComponent } from './drag-and-drop-example.component';

describe('DragAndDropExampleComponent', () => {
  let component: DragAndDropExampleComponent;
  let fixture: ComponentFixture<DragAndDropExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
