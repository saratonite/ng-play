import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PngTryTreeTableComponent } from './png-try-tree-table.component';

describe('PngTryTreeTableComponent', () => {
  let component: PngTryTreeTableComponent;
  let fixture: ComponentFixture<PngTryTreeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PngTryTreeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PngTryTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
