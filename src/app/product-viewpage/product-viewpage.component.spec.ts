import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewpageComponent } from './product-viewpage.component';

describe('ProductViewpageComponent', () => {
  let component: ProductViewpageComponent;
  let fixture: ComponentFixture<ProductViewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductViewpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductViewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
