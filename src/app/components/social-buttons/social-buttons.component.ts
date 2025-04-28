import { Component, Input } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-social-buttons',
  standalone: true,
  imports: [RippleModule, ButtonModule],
  templateUrl: './social-buttons.component.html',
  styleUrl: './social-buttons.component.scss',
})
export class SocialButtonsComponent {
  @Input() github?: string;
  @Input() linkedin?: string;
  @Input() email?: string;
}
