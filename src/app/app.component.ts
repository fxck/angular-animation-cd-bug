import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  sequence,
  animateChild
} from '@angular/animations';
import { of, timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('outerRouteAnimation', [
      transition('* => *', [

        query(':enter, :leave',
          style({
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0
          }),
          { optional: true }
        ),

        query(':leave', [
          animate(
            '400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            style({ opacity: 0 }))
        ], { optional: true }),

        query(':enter', [
          style({
            transform: 'translate3d(0, 5px, 0)',
            opacity: 0
          }),
          animate(
            '600ms 400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            style({
              transform: 'translate3d(0, 0, 0)',
              opacity: 1
            }))
        ], { optional: true })

      ])
    ])
  ]
})
export class AppComponent {

  visible$ = of(false).pipe(mergeMap(() => timer(1000).pipe(map(() => true))));

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['key'];
  }

}
