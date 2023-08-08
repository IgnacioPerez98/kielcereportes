import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorreporteComponent } from './selectorreporte.component';

describe('SelectorreporteComponent', () => {
  let component: SelectorreporteComponent;
  let fixture: ComponentFixture<SelectorreporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorreporteComponent]
    });
    fixture = TestBed.createComponent(SelectorreporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
