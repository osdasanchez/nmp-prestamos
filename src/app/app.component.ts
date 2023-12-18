import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from "./modules/core/containers/public/layout/layout/layout.component";
import {MetalComponent} from "./modules/prestamo/components/metal/metal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent, MetalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'nmp-prestamos';
}


