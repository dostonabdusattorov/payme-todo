import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private isDarkTheme: boolean = false;

  @HostBinding('class')
  get themeMode() {
    return this.isDarkTheme ? 'theme-dark' : 'theme-light';
  }

  onToggleMode(mode: boolean): void {
    console.log(mode);
    this.isDarkTheme = mode;
  }
}
