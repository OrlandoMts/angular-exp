import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  private _interSub!: Subscription;
  private obs$!: Observable<number>;

  ngOnInit(): void {
    /* this.retornaObservable()
      .pipe(retry(2))
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.warn(error),
        complete: () => console.log('Se completo el observable'),
      }); */

    this._interSub = this.retornaInterval().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this._interSub.unsubscribe();
  }

  public retornaObservable(): Observable<number> {
    let i = 0;

    return (this.obs$ = new Observable((observer) => {
      const intervalo = setInterval(() => {
        observer.next((i += 1));

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          clearInterval(intervalo);
          observer.error('Se crasheo');
        }
      }, 1000);
    }));
  }

  public retornaInterval() {
    const intervalo$ = interval(1000).pipe(
      take(10),
      map((value) => value + 1),
      filter((value) => (value % 2 === 0 ? true : false))
    );
    return intervalo$;
  }
}
