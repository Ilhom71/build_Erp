// src/app/simple-translate-loader.ts
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class SimpleTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}  // HttpClient DI orqali keladi

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`./assets/i18n/${lang}.json`); // Observable qaytaradi!
  }
}
