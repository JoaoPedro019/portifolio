import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import { DrawerModule } from 'primeng/drawer';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    ToolbarModule,
    ToggleSwitchModule,
    FormsModule,
    CardModule,
    CommonModule,
    RouterModule,
    DrawerModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [ThemeService, ScrollService],
})
export class HeaderComponent implements OnInit {
  activeSection = 'home';
  private observer: IntersectionObserver | null = null;
  private router = inject(Router);
  menuVisible = false;
  isDarkMode: boolean = false;
  navLinks = [
    { label: 'Início', path: 'home' },
    { label: 'Sobre Mim', path: 'about-me' },
    { label: 'Habilidades', path: 'skills' },
    { label: 'Experiências', path: 'experiences' },
    { label: 'Projetos', path: 'projects' },
    { label: 'Contato', path: 'contact' },
  ];

  constructor(
    public themeService: ThemeService,
    public scrollService: ScrollService
  ) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  ngOnInit() {
    this.isDarkMode = this.themeService.getInitialTheme() === 'dark';
    this.themeService.toggleTheme(this.isDarkMode);
  }

  toggleDarkMode() {
    this.applyTheme();
  }

  applyTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
  }

  navigateBySection(path: string) {
    this.scrollService.scrollToSection(path);
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    this.navLinks.forEach((link) => {
      const section = document.getElementById(link.path);
      if (section) {
        this.observer?.observe(section);
      }
    });
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
