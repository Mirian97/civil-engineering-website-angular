import { Component } from '@angular/core';
import { EDUCATION_LIST } from '../../constants/education-list';
import { TitleSectionComponent } from '../title-section/title-section.component';

@Component({
  selector: 'app-formation-section',
  standalone: true,
  imports: [TitleSectionComponent],
  templateUrl: './formation-section.component.html',
  styleUrl: './formation-section.component.scss',
})
export class FormationSectionComponent {
  educationList = EDUCATION_LIST;
}
