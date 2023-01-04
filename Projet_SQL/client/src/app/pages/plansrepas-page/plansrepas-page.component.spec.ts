import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansrepasPageComponent } from './plansrepas-page.component';

describe('PlansrepasPageComponent', () => {
  let component: PlansrepasPageComponent;
  let fixture: ComponentFixture<PlansrepasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansrepasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansrepasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
