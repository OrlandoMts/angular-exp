import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy{

  private obs$!: Observable<number>;

  ngOnInit(): void {
    let i = 0;

    this.obs$ = new Observable( observer => {

        const intervalo = setInterval(() => {
          observer.next(i += 1)

          if(i === 4) {
            clearInterval( intervalo );
            observer.complete();
          }

          if(i === 2) {
            clearInterval( intervalo );
            observer.error("Se crasheo");
          }

        }, 1000)

      })

     this.obs$
      .pipe(
        retry(2)
      )
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.warn(error),
        complete: () => console.log("Se completo el observable")
      })
  }

  ngOnDestroy(): void {

  }
}
