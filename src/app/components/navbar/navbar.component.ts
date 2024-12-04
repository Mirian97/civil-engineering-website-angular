import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAVBAR_LIST } from '../../constants/navbar-list';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarItemComponent, RouterModule, SvgIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navbarList = NAVBAR_LIST;
}
