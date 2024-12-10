import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http'
import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core'
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router'
import { provideEffects } from '@ngrx/effects'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { routes } from './app.routes'
import { rootReducer } from './store'
import { AuthenticationEffects } from './store/authentication/authentication.effects'
import { FakeBackendProvider } from './core/helpers/fake-backend'
import { JwtInterceptor } from './core/helpers/jwt.interceptor'
import { ErrorInterceptor } from './core/helpers/error.interceptor'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideToastr } from 'ngx-toastr'

// Scroll
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    FakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingFeature),
    provideStore(rootReducer),
    provideEffects(AuthenticationEffects),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimations(),
    provideToastr(),
  ],
}
