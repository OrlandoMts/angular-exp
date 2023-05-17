import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Event, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  private _routeSub!: Subscription;
  public title: string = '';

  constructor(private router: Router) {
    this.setTitleLayout();
  }

  ngOnDestroy(): void {
    this._routeSub.unsubscribe();
  }

  public setTitleLayout() {
    this._routeSub = this.router.events
      .pipe(
        filter(
          (event: Event): event is ActivationEnd =>
            event instanceof ActivationEnd
        ),
        filter((event: ActivationEnd) =>
          event.snapshot.firstChild === null ? true : false
        ),
        map((event: ActivationEnd) => {
          return event.snapshot?.data['title'];
        })
      )
      .subscribe((titleroute: string) => {
        this.title = titleroute;
        document.title = `AdminPro - ${titleroute}`;
      });
  }
}
