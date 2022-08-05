import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductctItemComponent } from './productct-item.component';

describe('ProductctItemComponent', () => {
  let component: ProductctItemComponent;
  let fixture: ComponentFixture<ProductctItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductctItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductctItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
