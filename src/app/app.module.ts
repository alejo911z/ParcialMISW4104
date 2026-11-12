import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';
import { CafeModule } from './cafe/cafe.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, CafeModule],
providers: [
  provideBrowserGlobalErrorListeners(),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideHttpClient(),
],
  bootstrap: [App],
})
export class AppModule {}
