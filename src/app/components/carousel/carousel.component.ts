import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

export interface CarouselItem {
  image: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() images: CarouselItem[] = [];

  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    navText: ['', ''],
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
