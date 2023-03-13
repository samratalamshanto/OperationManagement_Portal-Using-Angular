import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCommonComponentComponent } from './case-common-component.component';

describe('CaseCommonComponentComponent', () => {
  let component: CaseCommonComponentComponent;
  let fixture: ComponentFixture<CaseCommonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseCommonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseCommonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
