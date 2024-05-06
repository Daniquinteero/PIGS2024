import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  searchResults: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (window.history.state.data) {
        this.searchResults = window.history.state.data;
        console.log(this.searchResults)
      }
    });
  }
}
