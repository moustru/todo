import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './module';
import './../index.html';
import './../scss/app.scss';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);