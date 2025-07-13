import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { SERVICE_LIST } from '../../constants/services-list';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { TitleSectionComponent } from '../title-section/title-section.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [TitleSectionComponent, SvgIconComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent implements AfterViewInit {
  serviceList = SERVICE_LIST;

  @ViewChildren('serviceItem') serviceItems!: QueryList<ElementRef>;

  private observerServiceItems() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 200);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    this.serviceItems.forEach((item) => {
      observer.observe(item.nativeElement);
    });
  }

  ngAfterViewInit(): void {
    this.observerServiceItems();
  }
}
