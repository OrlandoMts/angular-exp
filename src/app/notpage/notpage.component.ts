import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-notpage',
  templateUrl: './notpage.component.html',
  styleUrls: ['./notpage.component.css'],
  imports: [CommonModule, RouterModule],
})
export class NotPageComponent {}
