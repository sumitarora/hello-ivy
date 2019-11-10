import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
  `,
})
export class HelloComponent {
  title = 'Hello Component';
}
