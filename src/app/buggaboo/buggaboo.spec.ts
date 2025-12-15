import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buggaboo } from './buggaboo';

describe('Buggaboo', () => {
  let component: Buggaboo;
  let fixture: ComponentFixture<Buggaboo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Buggaboo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buggaboo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
