import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangerateTableComponent } from './exchangerate-table.component';

describe('ExchangerateTableComponent', () => {
  let component: ExchangerateTableComponent;
  let fixture: ComponentFixture<ExchangerateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangerateTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangerateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
