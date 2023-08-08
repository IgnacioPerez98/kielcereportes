import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosclientesComponent } from './datosclientes.component';

describe('DatosclientesComponent', () => {
  let component: DatosclientesComponent;
  let fixture: ComponentFixture<DatosclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosclientesComponent]
    });
    fixture = TestBed.createComponent(DatosclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
