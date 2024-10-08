import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
 @Output() featuredSelected  = new EventEmitter<string>()

  onselected(feature: string) {
    console.log(feature)
    this.featuredSelected.emit(feature);
  }
}
