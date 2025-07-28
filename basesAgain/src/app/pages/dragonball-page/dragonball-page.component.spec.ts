import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballPageComponent } from './dragonball-page.component';

describe('DragonballPageComponent', () => {
  let component: DragonballPageComponent;
  let fixture: ComponentFixture<DragonballPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
