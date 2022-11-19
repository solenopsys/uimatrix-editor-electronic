import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementModuleComponent } from './element-module.component';

describe('ElementModuleComponent', () => {
  let component: ElementModuleComponent;
  let fixture: ComponentFixture<ElementModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
