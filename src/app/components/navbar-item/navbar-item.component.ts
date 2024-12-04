import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
})
export class NavbarItemComponent {
  @Input() location!: string;
  @Input() name!: string;
}
