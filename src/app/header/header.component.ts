import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output()
  readonly toggleMode = new EventEmitter<boolean>();

  onToggleMode({ checked }: MatSlideToggleChange) {
    this.toggleMode.emit(checked);
  }
}
