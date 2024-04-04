import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  cakeName: string = '';
  cakeType: string = 'All';
  @Output() searchText: EventEmitter<string> = new EventEmitter<string>();
  searchInput() {
    this.searchText.emit(this.cakeName);
  }
}
