import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimezoneDialogComponent } from './add-timezone-dialog.component';

describe('AddTimezoneDialogComponent', () => {
  let component: AddTimezoneDialogComponent;
  let fixture: ComponentFixture<AddTimezoneDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTimezoneDialogComponent]
    });
    fixture = TestBed.createComponent(AddTimezoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
