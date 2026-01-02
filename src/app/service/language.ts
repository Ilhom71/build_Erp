import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') as 'uz' | 'en' | 'ru';
    const lang = savedLang || 'uz';
    
    this.translate.setDefaultLang('uz');
    this.translate.use(lang);
  }

  setLang(lang: 'uz' | 'en' | 'ru') {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  getLang(): string {
    return this.translate.currentLang || 'uz';
  }
}