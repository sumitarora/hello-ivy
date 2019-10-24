import * as core from '@angular/core';
import { FakeService } from '../services/fake.service';
import { HigherOrderComponent } from './higher-order.component';

@HigherOrderComponent()
@core.Component({
  selector: 'app-dynamic-component',
  template: `
    <h1>{{ title }}</h1>
    <button class="btn btn-primary"  (click)="changeTitle()">Change Title</button>
  `,
})
export class DynamicComponent implements core.OnInit {
  @core.Input()
  title = 'App Dynamic Component';

  constructor(private fakeService: FakeService) {}

  changeTitle() {
    this.title = this.fakeService.upperCaseTitle('aa');
    core.ɵdetectChanges(this);
  }

  ngOnInit() {
    console.log('init dynamic component');
  }
}
