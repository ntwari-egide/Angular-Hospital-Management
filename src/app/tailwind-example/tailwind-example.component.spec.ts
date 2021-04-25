import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindExampleComponent } from './tailwind-example.component';

describe('TailwindExampleComponent', () => {
  let component: TailwindExampleComponent;
  let fixture: ComponentFixture<TailwindExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailwindExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailwindExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
