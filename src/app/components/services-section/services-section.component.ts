import { Component } from '@angular/core';
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
export class ServicesSectionComponent {
  serviceList = SERVICE_LIST;
}
