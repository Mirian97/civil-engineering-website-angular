import { Component } from '@angular/core';
import { CONTACT_LIST_FLOATING } from '../../constants/contact-list';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './floating-contact.component.html',
  styleUrl: './floating-contact.component.scss',
})
export class FloatingContactComponent {
  contactList = CONTACT_LIST_FLOATING;
}
