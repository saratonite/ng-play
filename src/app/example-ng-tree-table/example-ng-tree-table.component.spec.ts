import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgTreeTableComponent } from './example-ng-tree-table.component';

describe('ExampleNgTreeTableComponent', () => {
  let component: ExampleNgTreeTableComponent;
  let fixture: ComponentFixture<ExampleNgTreeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNgTreeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNgTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
