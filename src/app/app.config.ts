import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
// Import the Modules instead of the experimental providers
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), provideRouter(routes),
    // Wrap the modules inside importProvidersFrom so they work seamlessly in standalone mode
    importProvidersFrom(
      NgxGoogleAnalyticsModule.forRoot('G-7JYYWZRZXH'), // 👈 Replace with your ID
      NgxGoogleAnalyticsRouterModule.forRoot()
    )
  ],
};
