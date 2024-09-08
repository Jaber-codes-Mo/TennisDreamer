import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademieComponent } from './academie.component';

describe('AcademieComponent', () => {
  let component: AcademieComponent;
  let fixture: ComponentFixture<AcademieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
