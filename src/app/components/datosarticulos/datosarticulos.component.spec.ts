import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosarticulosComponent } from './datosarticulos.component';

describe('DatosarticulosComponent', () => {
  let component: DatosarticulosComponent;
  let fixture: ComponentFixture<DatosarticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosarticulosComponent]
    });
    fixture = TestBed.createComponent(DatosarticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
