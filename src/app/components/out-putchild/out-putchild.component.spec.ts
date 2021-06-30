import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutPutchildComponent } from './out-putchild.component';

describe('OutPutchildComponent', () => {
  let component: OutPutchildComponent;
  let fixture: ComponentFixture<OutPutchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutPutchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPutchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
