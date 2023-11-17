import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  isFooterVisible = true;
  ano: number = new Date().getFullYear();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isFooterVisible = this.shouldShowFooter(event.url);
      }
    });
  }

  private shouldShowFooter(url: string): boolean {
    return !['/login', '/register'].includes(url);
  }
}
