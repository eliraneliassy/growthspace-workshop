import { ChangeDetectionStrategy, Component } from '@angular/core';
import {asyncScheduler, observeOn, of} from "rxjs";
import {AsyncScheduler} from "rxjs/internal/scheduler/AsyncScheduler";
import {AsapScheduler} from "rxjs/internal/scheduler/AsapScheduler";


@Component({
  selector: 'marketplace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  images = [
    `https://149369349.v2.pressablecdn.com/wp-content/uploads/2022/08/midjourneygirl-1024x585.png`,
    `https://cdn.arstechnica.net/wp-content/uploads/2023/03/midjourney_v5_hero_2-800x450.jpg`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71YwljqRsN5pyIfLyFnnbvpMbq875uwENYQ&usqp=CAU`
  ]

  constructor() {

    console.log(1);
    Promise.resolve(2).then(console.log)
    of(3)
      .pipe(
        observeOn(asyncScheduler)
      )

      .subscribe(console.log)
    setTimeout(() => console.log(4), 0);
    console.log(5);

  }


}
