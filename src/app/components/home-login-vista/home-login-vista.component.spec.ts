import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoginVistaComponent } from './home-login-vista.component';

describe('HomeLoginVistaComponent', () => {
  let component: HomeLoginVistaComponent;
  let fixture: ComponentFixture<HomeLoginVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLoginVistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLoginVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
