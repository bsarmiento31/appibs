import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEquiposPage } from './editar-equipos.page';

describe('EditarEquiposPage', () => {
  let component: EditarEquiposPage;
  let fixture: ComponentFixture<EditarEquiposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEquiposPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEquiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
