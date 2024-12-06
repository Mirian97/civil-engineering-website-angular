import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Input() onToogleModal!: () => void;
}
