import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {DataService} from "./Services/data.service";
import {authInterceptorProviders} from "./Interceptor/auth.interceptor";
import {provideHttpClient} from "@angular/common/http";
import {TokenStorageService} from "./Services/token.service";
import {EntryService} from "./Services/entry.service";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from "@angular/material/snack-bar";
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideAnimationsAsync(),
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3500}},
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    EntryService,
    TokenStorageService,
    provideHttpClient(),
    authInterceptorProviders,
    DataService, provideAnimationsAsync(),]
};
