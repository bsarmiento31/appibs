import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesUsersPage } from './detalles-users.page';

describe('DetallesUsersPage', () => {
  let component: DetallesUsersPage;
  let fixture: ComponentFixture<DetallesUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesUsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
