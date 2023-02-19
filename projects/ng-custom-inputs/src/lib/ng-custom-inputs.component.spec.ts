import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomInputsComponent } from './ng-custom-inputs.component';

describe('NgCustomInputsComponent', () => {
  let component: NgCustomInputsComponent;
  let fixture: ComponentFixture<NgCustomInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCustomInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCustomInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
