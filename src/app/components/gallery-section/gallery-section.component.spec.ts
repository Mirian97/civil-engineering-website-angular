import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionComponent } from './gallery-section.component';

describe('GallerySectionComponent', () => {
  let component: GallerySectionComponent;
  let fixture: ComponentFixture<GallerySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
