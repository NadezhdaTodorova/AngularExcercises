import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArrayComponent } from './display-array.component';

describe('DisplayArrayComponent', () => {
  let component: DisplayArrayComponent;
  let fixture: ComponentFixture<DisplayArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
