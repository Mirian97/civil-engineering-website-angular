import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import 'swiper/css';
import 'swiper/css/pagination';
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
export class CarouselComponent implements AfterViewInit {
  @Input() images: CarouselItem[] = [];
  @ViewChild('swiperRef', { static: true })
  protected swiperRef?: ElementRef | undefined;
  swiper?: Swiper;

  private initSwiper() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    const options: SwiperOptions = {
      pagination: {
        clickable: false,
        enabled: true,
      },
      slidesPerView: 1,
    };
    const swiperEl = this.swiperRef?.nativeElement;
    Object.assign(swiperEl, options);
    swiperEl.initialize();
    this.swiper = swiperEl.swiper;
  }

  ngAfterViewInit() {
    this.initSwiper();
  }

  public reinitializeSwiper() {
    setTimeout(() => this.initSwiper());
  }
}
