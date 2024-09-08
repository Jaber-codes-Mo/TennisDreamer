import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideServerRendering } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';

const config = {
  providers: [
    provideServerRendering(),
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
};

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
