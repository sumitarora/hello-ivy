import * as core from '@angular/core';

import { HelloIvy } from './components/hello-ivy.component';

@core.Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements core.OnInit {
  dynamicCmp: any;
  ivyCmp: any;

  constructor(private injector: core.Injector) {}

  ngOnInit() {
    this.ivyCmp = core.ɵrenderComponent(HelloIvy, { host: 'hello-ivy' });

    import('./components/dynamic.component').then(c => {
      this.dynamicCmp = core.ɵrenderComponent(c.DynamicComponent, {
        host: 'dynamic-hosts',
        injector: this.injector,
        hostFeatures: [core.ɵLifecycleHooksFeature],
      });
    });

    // setTimeout(() => {
    //   this.ivyCmp.title = 'ivyCmp';
    //   core.ɵmarkDirty(this.ivyCmp);
    // }, 5000);
  }
}
