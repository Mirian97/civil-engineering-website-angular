import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

interface CarouselItem {
  name: string;
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
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    mouseDrag: false,
    touchDrag: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      600: {
        items: 3,
      },
    },
  };
}
