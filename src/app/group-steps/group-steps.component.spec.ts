import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStepsComponent } from './group-steps.component';

describe('GroupStepsComponent', () => {
  let component: GroupStepsComponent;
  let fixture: ComponentFixture<GroupStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
