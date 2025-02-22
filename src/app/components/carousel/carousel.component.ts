import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper/types';

export interface CarouselItem {
  image: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {
  @Input() images: CarouselItem[] = [];

  @ViewChild('swiperRef', { static: true })
  protected _swiperRef?: ElementRef | undefined;
  swiper?: Swiper;

  ngOnInit() {
    this._initSwiper();
  }

  private _initSwiper() {
    const options: SwiperOptions = {
      pagination: true,
      slidesPerView: 1,
    };
    const swiperEl = this._swiperRef?.nativeElement;
    Object.assign(swiperEl, options);
    swiperEl.initialize();
    if (this.swiper) this.swiper.currentBreakpoint = false;
    this.swiper = this._swiperRef?.nativeElement.swiper;
    this.swiper?.off('slideChange');
  }
}
