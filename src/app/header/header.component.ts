import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthServiceService) {}

  searchText: string = '';
  @Input() isHomeComponent: boolean = false;
  @Input() isCakeCompLoggedIn = false;
  @Input() orderCount = 0;
  @Output() searchedText: EventEmitter<string> = new EventEmitter<string>();

  onSearchText(event: string) {
    this.searchText = event;
    console.log(this.searchText);
    this.searchedText.emit(this.searchText);
  }

  logout() {
    this.authService.logout();
  }
}
