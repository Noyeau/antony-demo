/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AntonyComponent } from './antony.component';

describe('AntonyComponent', () => {
  let component: AntonyComponent;
  let fixture: ComponentFixture<AntonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
