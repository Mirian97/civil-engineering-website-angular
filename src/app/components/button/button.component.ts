import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'lg' | 'md' = 'md';
  @Input() type: 'button' | 'menu' | 'reset' | 'submit' = 'button';
}
