import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PngTryTreeComponent } from './png-try-tree.component';

describe('PngTryTreeComponent', () => {
  let component: PngTryTreeComponent;
  let fixture: ComponentFixture<PngTryTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PngTryTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PngTryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
