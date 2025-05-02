import { Component, inject } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { SocialButtonsComponent } from '../social-buttons/social-buttons.component';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RippleModule, ButtonModule, SocialButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ScrollService],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  animationState = 'in';
  loadingCurriculo = false;
  private router = inject(Router);
  constructor(public scrollService: ScrollService) {}

  downloadCurriculo(): void {
    this.loadingCurriculo = true;
    const link = document.createElement('a');
    link.href = 'assets/files/curriculo.pdf';
    link.download = 'Curriculo_JoaoPedro.pdf';
    link.click();
    this.loadingCurriculo = false;
  }
  navigateByProjects() {
    this.scrollService.scrollToSection('projects');
  }
}
