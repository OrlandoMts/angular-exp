import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PagesComponent {}
