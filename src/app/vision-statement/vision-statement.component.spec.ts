import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionStatementComponent } from './vision-statement.component';

describe('VisionStatementComponent', () => {
  let component: VisionStatementComponent;
  let fixture: ComponentFixture<VisionStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisionStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
