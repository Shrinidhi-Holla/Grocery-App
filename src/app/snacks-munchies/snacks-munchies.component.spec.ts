import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksMunchiesComponent } from './snacks-munchies.component';

describe('SnacksMunchiesComponent', () => {
  let component: SnacksMunchiesComponent;
  let fixture: ComponentFixture<SnacksMunchiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnacksMunchiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnacksMunchiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
