import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { AuraBaseDesignTokens } from '@primeng/themes/aura/base';
import { definePreset } from '@primeng/themes';

const Mypreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{blue.500}',
          hoverColor: '{blue.400}',
          inverseColor: '#0f0f0',
        },
        button: {
          background: '{primary.color}',
          hoverBackground: '{primary.hoverColor}',
          color: '{primary.inverseColor}',
        },
        toggle: {
          checkedBackground: '{primary.color}',
          uncheckedBackground: '{blue.100}',
          handleBackground: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '{blue.500}',
          hoverColor: '{blue.400}',
          inverseColor: '#ffffff',
        },
        button: {
          background: '{primary.color}',
          hoverBackground: '{primary.hoverColor}',
          color: '{primary.inverseColor}',
        },
        toggle: {
          checkedBackground: '{primary.color}',
          uncheckedBackground: '{blue.100}',
          handleBackground: '#ffffff',
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Mypreset,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
  ],
};
