/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropupComponent } from './dropup.component';

describe('DropupComponent', () => {
  let component: DropupComponent;
  let fixture: ComponentFixture<DropupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
