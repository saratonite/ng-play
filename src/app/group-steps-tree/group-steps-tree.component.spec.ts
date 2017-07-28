import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStepsTreeComponent } from './group-steps-tree.component';

describe('GroupStepsTreeComponent', () => {
  let component: GroupStepsTreeComponent;
  let fixture: ComponentFixture<GroupStepsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupStepsTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupStepsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
