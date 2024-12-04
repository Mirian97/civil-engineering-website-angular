import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FloatingContactComponent } from './components/floating-contact/floating-contact.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { FormationSectionComponent } from './components/formation-section/formation-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ServicesSectionComponent,
    FooterSectionComponent,
    FloatingContactComponent,
    FormationSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Élio Rodrigues | Engenharia';
}
