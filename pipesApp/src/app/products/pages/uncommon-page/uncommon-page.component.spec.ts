import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommonPageComponent } from './uncommon-page.component';

describe('UncommonPageComponent', () => {
  let component: UncommonPageComponent;
  let fixture: ComponentFixture<UncommonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UncommonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncommonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
