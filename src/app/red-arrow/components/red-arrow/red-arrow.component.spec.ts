import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedArrowComponent } from './red-arrow.component';

describe('RedArrowComponent', () => {
  let component: RedArrowComponent;
  let fixture: ComponentFixture<RedArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
