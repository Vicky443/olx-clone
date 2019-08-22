import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyadsPage } from './myads.page';

describe('MyadsPage', () => {
  let component: MyadsPage;
  let fixture: ComponentFixture<MyadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
