import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawfirmComponent } from './lawfirm.component';

describe('LawfirmComponent', () => {
  let component: LawfirmComponent;
  let fixture: ComponentFixture<LawfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
