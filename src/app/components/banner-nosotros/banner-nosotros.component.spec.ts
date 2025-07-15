import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNosotrosComponent } from './banner-nosotros.component';

describe('BannerNosotrosComponent', () => {
  let component: BannerNosotrosComponent;
  let fixture: ComponentFixture<BannerNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
