import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iframe-playground-angular';
  url: string =
    'https://www.tagesschau.de/wirtschaft/verbraucher/neun-euro-ticket-preise-nahverkehr-spritpreise-angebot-sylt-101.html';
  urlSafe: SafeResourceUrl = '';

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
