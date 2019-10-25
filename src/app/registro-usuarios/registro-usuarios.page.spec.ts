import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuariosPage } from './registro-usuarios.page';

describe('RegistroUsuariosPage', () => {
  let component: RegistroUsuariosPage;
  let fixture: ComponentFixture<RegistroUsuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUsuariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
