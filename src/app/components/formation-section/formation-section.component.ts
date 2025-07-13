import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { EDUCATION_LIST } from '../../constants/education-list';
import { TitleSectionComponent } from '../title-section/title-section.component';

@Component({
  selector: 'app-formation-section',
  standalone: true,
  imports: [TitleSectionComponent],
  templateUrl: './formation-section.component.html',
  styleUrl: './formation-section.component.scss',
})
export class FormationSectionComponent implements AfterViewInit {
  educationList = EDUCATION_LIST;
  @ViewChildren('formationItem') educationItems!: QueryList<ElementRef>;

  private observeEducationItems() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 300); // ms delay between each item
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    this.educationItems.forEach((item) => {
      observer.observe(item.nativeElement);
    });
  }

  ngAfterViewInit() {
    this.observeEducationItems();
  }
}
