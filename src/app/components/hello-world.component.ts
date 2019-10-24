import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { HigherOrderComponent } from './higher-order.component';

@HigherOrderComponent()
@Component({
  selector: 'app-hello-world',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <button class="btn btn-success" (click)="changeTitle()">Change Title</button>
    </div>
  `,
})
export class HelloWorldComponent {
  title = 'Hello World Component';

  changeTitle() {
    this.title = 'New Title';
  }
}
