import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
  imports: [CommonModule, RouterModule],
})
export class ProgressComponent {}
