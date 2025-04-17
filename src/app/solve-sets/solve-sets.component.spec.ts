import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveSetsComponent } from './solve-sets.component';

describe('SolveSetsComponent', () => {
  let component: SolveSetsComponent;
  let fixture: ComponentFixture<SolveSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolveSetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolveSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
