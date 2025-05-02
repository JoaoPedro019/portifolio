import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CardModule, DividerModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  email = ' joao17042003@gmail.com';
  telefone = '(11) 98167-4032';
}
