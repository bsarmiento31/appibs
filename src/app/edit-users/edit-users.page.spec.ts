import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsersPage } from './edit-users.page';

describe('EditUsersPage', () => {
  let component: EditUsersPage;
  let fixture: ComponentFixture<EditUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
