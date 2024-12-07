import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FloatingContactComponent } from './components/floating-contact/floating-contact.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { FormationSectionComponent } from './components/formation-section/formation-section.component';
import { GallerySectionComponent } from './components/gallery-section/gallery-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    HeroSectionComponent,
    ServicesSectionComponent,
    FooterSectionComponent,
    FloatingContactComponent,
    FormationSectionComponent,
    ContactSectionComponent,
    GallerySectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Elio Rodrigues | Engenharia';
}
