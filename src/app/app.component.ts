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
      'theme-light mat-app-background'
    );
  }

  onToggleMode(mode: boolean): void {
    this.renderer.setAttribute(
      this.dom.body,
      'class',
      mode ? 'theme-dark mat-app-background' : 'theme-light mat-app-background'
    );
  }
}
