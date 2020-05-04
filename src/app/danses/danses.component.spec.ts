import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DansesComponent } from './danses.component';

describe('DansesComponent', () => {
  let component: DansesComponent;
  let fixture: ComponentFixture<DansesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DansesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DansesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
