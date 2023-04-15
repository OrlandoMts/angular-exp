import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [],
  imports: [CommonModule, FormsModule],
})
export class IncrementComponent {
  @Input('progress') progress: number = 1;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() newProgEvent = new EventEmitter<number>();

  public increase() {
    this.progress >= 100 ? (this.progress = 100) : (this.progress += 1);
    this.newProgEvent.emit(this.progress);
  }

  public decrease() {
    this.progress >= 100 ? (this.progress = 100) : (this.progress -= 1);
    this.progress <= 0 ? (this.progress = 0) : (this.progress -= 1);
    this.newProgEvent.emit(this.progress);
  }
}
