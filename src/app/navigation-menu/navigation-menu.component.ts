import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent{

  menuOpen = false;

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }
  
  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.burger-menu');
    if (!clickedInside) {
      this.closeMenu();
    }
  }


}
