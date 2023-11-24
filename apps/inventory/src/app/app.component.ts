import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ProductListComponent } from '@angular-monorepo/products';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ProductListComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';
}
