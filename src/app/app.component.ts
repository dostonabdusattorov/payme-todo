import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private dom: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setAttribute(
      this.dom.body,
      'class',
      localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark'
        ? 'theme-dark mat-app-background'
        : 'theme-light mat-app-background'
    );
  }

  onToggleMode(mode: boolean): void {
    localStorage.setItem('theme', mode ? 'dark' : 'light');

    this.renderer.setAttribute(
      this.dom.body,
      'class',
      localStorage.getItem('theme') === 'light'
        ? 'theme-light mat-app-background'
        : 'theme-dark mat-app-background'
    );
  }
}
