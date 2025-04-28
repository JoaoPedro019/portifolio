import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ChipModule } from 'primeng/chip';
import { MOCK_EXPERIENCE } from '../../mocks/experiencias/mock-experiencia';
import { ExperienciaModel } from '../../models/experiencias/experiencia-card.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardModule, TimelineModule, ChipModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  experiencia: ExperienciaModel[] = [];

  ngOnInit(): void {
    this.experiencia = MOCK_EXPERIENCE;
  }
}
