import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultadeudaComponent } from './consultadeuda.component';

describe('ConsultadeudaComponent', () => {
  let component: ConsultadeudaComponent;
  let fixture: ComponentFixture<ConsultadeudaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultadeudaComponent]
    });
    fixture = TestBed.createComponent(ConsultadeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
