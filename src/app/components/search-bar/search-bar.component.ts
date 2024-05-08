import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  constructor(private router: Router) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.searchTerm = ''
      }
    });
  }

  searchProducts(): void {
    if (this.searchTerm.trim() !== '') {
      const url = `/search?q=${encodeURIComponent(this.searchTerm)}`;
      this.router.navigateByUrl(url);
    }
  }

  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.searchProducts();
    }
  }
}
