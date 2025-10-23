
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { App } from './app/app';  
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter([]) 
  ],
}).catch(err => console.error(err));
