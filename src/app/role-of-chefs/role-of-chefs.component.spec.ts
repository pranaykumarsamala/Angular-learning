import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleOfChefsComponent } from './role-of-chefs.component';

describe('RoleOfChefsComponent', () => {
  let component: RoleOfChefsComponent;
  let fixture: ComponentFixture<RoleOfChefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleOfChefsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleOfChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
