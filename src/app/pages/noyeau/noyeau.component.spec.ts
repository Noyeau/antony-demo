/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoyeauComponent } from './noyeau.component';

describe('NoyeauComponent', () => {
  let component: NoyeauComponent;
  let fixture: ComponentFixture<NoyeauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoyeauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoyeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
