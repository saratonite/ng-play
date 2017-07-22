import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySoSeriousComponent } from './why-so-serious.component';

describe('WhySoSeriousComponent', () => {
  let component: WhySoSeriousComponent;
  let fixture: ComponentFixture<WhySoSeriousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhySoSeriousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhySoSeriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
