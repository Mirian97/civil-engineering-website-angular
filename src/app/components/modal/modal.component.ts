import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  showModal: boolean = false;

  onToggleModal(): void {
    this.showModal = !this.showModal;
  }
}
