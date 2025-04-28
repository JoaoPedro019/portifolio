import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'theme';

  constructor() {}

  getInitialTheme(): string {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  toggleTheme(isDarkMode: boolean): void {
    const element = document.querySelector('html');
    if (isDarkMode) {
      element?.classList.add('my-app-dark');
    } else {
      element?.classList.remove('my-app-dark');
    }

    localStorage.setItem(this.themeKey, isDarkMode ? 'dark' : 'light');
  }
}
