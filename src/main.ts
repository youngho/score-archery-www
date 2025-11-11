import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, PreloadAllModules, withInMemoryScrolling, withPreloading } from '@angular/router';
import { routes } from './app/app.routes';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { GlobalErrorHandler } from './app/core/error-handler.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

class AppTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}
  getTranslation(lang: string): Observable<Record<string, any>> {
    return this.http.get<Record<string, any>>(`./assets/i18n/${lang}.json`);
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
    ),
    provideAnimations(),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'ko',
        loader: {
          provide: TranslateLoader,
          useClass: AppTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
}).catch((err) => {
  console.error('애플리케이션 부팅 실패:', err);
});
