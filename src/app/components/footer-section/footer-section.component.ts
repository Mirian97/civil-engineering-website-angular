import { Component } from '@angular/core';
import { CONTACT_LIST_FOOTER } from '../../constants/contact-list';
import { ButtonComponent } from '../button/button.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [SvgIconComponent, ButtonComponent],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss',
})
export class FooterSectionComponent {
  currentYear = new Date().getFullYear();
  contactList = CONTACT_LIST_FOOTER;
  whatsappLink = CONTACT_LIST_FOOTER.find((item) => item.icon === 'phone')
    ?.link;
}
