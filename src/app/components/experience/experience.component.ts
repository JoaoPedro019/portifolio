import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent implements OnInit {
  experiencia: ExperienciaModel[] = [];
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }
  ngOnInit(): void {
    this.experiencia = MOCK_EXPERIENCE;
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }
}
