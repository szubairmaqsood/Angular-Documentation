import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableUseComponent } from './variable-use.component';

describe('VariableUseComponent', () => {
  let component: VariableUseComponent;
  let fixture: ComponentFixture<VariableUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
