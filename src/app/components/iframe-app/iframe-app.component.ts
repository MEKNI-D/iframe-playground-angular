import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-app',
  templateUrl: './iframe-app.component.html',
  styleUrls: ['./iframe-app.component.scss']
})
export class IframeAppComponent implements OnInit {

  url: string =
    'https://www.tagesschau.de/wirtschaft/verbraucher/neun-euro-ticket-preise-nahverkehr-spritpreise-angebot-sylt-101.html';
  urlSafe: SafeResourceUrl = '';

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
