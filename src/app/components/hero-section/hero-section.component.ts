import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  scrollToServices(): void {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
