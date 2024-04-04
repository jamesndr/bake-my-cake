import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  cakeType: string = 'All';
  @Output() filterText: EventEmitter<string> = new EventEmitter<string>();
  onSelectChange() {
    this.filterText.emit(this.cakeType);
  }
}
