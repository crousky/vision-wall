import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipTagComponent } from './flip-tag.component';

describe('FlipTagComponent', () => {
  let component: FlipTagComponent;
  let fixture: ComponentFixture<FlipTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
