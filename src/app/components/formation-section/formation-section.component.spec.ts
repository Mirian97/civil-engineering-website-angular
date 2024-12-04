import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationSectionComponent } from './formation-section.component';

describe('FormationSectionComponent', () => {
  let component: FormationSectionComponent;
  let fixture: ComponentFixture<FormationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
