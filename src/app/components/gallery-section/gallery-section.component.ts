import { Component } from '@angular/core';
import { GALLERY_LIST } from '../../constants/gallery-list';
import { CarouselComponent } from '../carousel/carousel.component';
import { ModalComponent } from '../modal/modal.component';
import { TitleSectionComponent } from '../title-section/title-section.component';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [TitleSectionComponent, ModalComponent, CarouselComponent],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss',
})
export class GallerySectionComponent {
  galleryList = GALLERY_LIST;
}
