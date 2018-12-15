import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubinputComponent } from './subinput.component';

describe('SubinputComponent', () => {
  let component: SubinputComponent;
  let fixture: ComponentFixture<SubinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
