import { ChangeDetectionStrategy, Component } from '@angular/core';
import {asyncScheduler, observeOn, of} from "rxjs";
import {AsyncScheduler} from "rxjs/internal/scheduler/AsyncScheduler";
import {AsapScheduler} from "rxjs/internal/scheduler/AsapScheduler";
import {HeaderComponent} from "./header/header.component";
import {RouterOutlet} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "@growthspace/ui";


@Component({
  selector: 'marketplace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, InputComponent, ReactiveFormsModule]
})
export class AppComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl('', {validators: [Validators.required]})
  })

  images = [
    `https://149369349.v2.pressablecdn.com/wp-content/uploads/2022/08/midjourneygirl-1024x585.png`,
    `https://cdn.arstechnica.net/wp-content/uploads/2023/03/midjourney_v5_hero_2-800x450.jpg`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71YwljqRsN5pyIfLyFnnbvpMbq875uwENYQ&usqp=CAU`
  ]

  names = ['Eliran', 'Maor', 'Shlomo', 'Nativ', 'Shai'];

  constructor() {

    this.form.valueChanges.subscribe(console.log)

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
