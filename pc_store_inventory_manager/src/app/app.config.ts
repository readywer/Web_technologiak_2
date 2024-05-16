import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { accessTokenInterceptor } from './services/access-token.interceptor';
import { provideToastr } from 'ngx-toastr';
import { unauthorizedInterceptor } from './services/unauthorized.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([accessTokenInterceptor, unauthorizedInterceptor]))
  ]
};