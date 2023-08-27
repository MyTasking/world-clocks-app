import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldClocksComponent } from './world-clocks.component';

describe('WorldClocksComponent', () => {
  let component: WorldClocksComponent;
  let fixture: ComponentFixture<WorldClocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldClocksComponent]
    });
    fixture = TestBed.createComponent(WorldClocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});