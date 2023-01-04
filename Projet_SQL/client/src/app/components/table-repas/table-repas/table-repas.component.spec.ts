import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRepasComponent } from './table-repas.component';

describe('TableRepasComponent', () => {
  let component: TableRepasComponent;
  let fixture: ComponentFixture<TableRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
