import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './service/language';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TranslateModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  currentLang = signal('uz');

  // constructor(private langService: LanguageService) {
  //   this.currentLang.set(this.langService.getLang());
  // }

  // changeLang(lang: 'uz' | 'en' | 'ru') {
  //   this.langService.setLang(lang);
  //   this.currentLang.set(lang);
  // }
}
