import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasictopicComponent } from './basictopic.component';

describe('BasictopicComponent', () => {
  let component: BasictopicComponent;
  let fixture: ComponentFixture<BasictopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasictopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasictopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
