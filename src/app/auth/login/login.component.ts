import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class LoginComponent {
  constructor(private _router: Router) {}

  public login() {
    this._router.navigateByUrl('/dashboard');
  }
}
