import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerVerMasComponent } from './banner-ver-mas.component';

describe('BannerVerMasComponent', () => {
  let component: BannerVerMasComponent;
  let fixture: ComponentFixture<BannerVerMasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerVerMasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerVerMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
