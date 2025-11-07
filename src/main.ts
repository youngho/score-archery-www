import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './app/core/error-handler.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
}).catch((err) => {
  console.error('애플리케이션 부팅 실패:', err);
});
