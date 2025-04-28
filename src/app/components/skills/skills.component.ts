import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Habilidades,
  CategoriaHabilidades,
} from '../../models/habilidades/habilidades.model';
import { MOCK_SKILLS } from '../../mocks/habilidades/mock-habilidades';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { SelectButtonModule } from 'primeng/selectbutton';

import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, CardModule, TabViewModule, DividerModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  categories: CategoriaHabilidades[] = [];

  ngOnInit(): void {
    this.categories = MOCK_SKILLS;
  }
}
