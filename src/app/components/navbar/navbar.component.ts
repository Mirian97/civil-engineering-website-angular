import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { NAVBAR_LIST } from '../../constants/navbar-list';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarItemComponent, RouterModule, SvgIconComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navbarList = NAVBAR_LIST;
  showMenuObject = new BehaviorSubject<boolean>(false);
  isShowMenu$: Observable<boolean> = this.showMenuObject.asObservable();

  onToggleMenu(): void {
    this.showMenuObject.next(!this.showMenuObject.value);
  }
}
