import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { MOCK_PROJETOS } from '../../mocks/projetos/mock-projetos';
import { Projetos } from '../../models/projetos/projetos.model';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ChipModule } from 'primeng/chip';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    ChipModule,
    PanelMenuModule,
    MenubarModule,
    RouterModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projetos: Projetos[] = [];
  menuItems: MenuItem[] = [];
  filteredProjects: Projetos[] = [];
  selectedCategory: string = 'Todos';
  constructor() {}

  ngOnInit(): void {
    this.projetos = MOCK_PROJETOS;
    this.filteredProjects = [...this.projetos];
    this.menuItems = [
      {
        label: 'Todos',
        command: () => this.filterProjects('Todos'),
      },
      {
        label: 'Frontend',
        command: () => this.filterProjects('Frontend'),
      },
      {
        label: 'Backend',
        command: () => this.filterProjects('Backend'),
      },
      {
        label: 'Fullstack',
        command: () => this.filterProjects('Fullstack'),
      },
    ];
  }

  filterProjects(category: string): void {
    if (category === 'Todos') {
      this.filteredProjects = [...this.projetos];
    } else {
      this.filteredProjects = this.projetos.filter(
        (projeto) => projeto.categoria === category
      );
    }
  }
  openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
