import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoUsarCupomComponent } from './como-usar-cupom.component';

describe('ComoUsarCupomComponent', () => {
  let component: ComoUsarCupomComponent;
  let fixture: ComponentFixture<ComoUsarCupomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoUsarCupomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoUsarCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
