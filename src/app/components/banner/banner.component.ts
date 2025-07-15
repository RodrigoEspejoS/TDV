import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  template: ` <img id="banner" src="../banner/banner-home.jpg" alt="">`,
  styles: ` #banner{
    width: 100%;
    height: 100%;
}
`
})
export class BannerComponent {

}
