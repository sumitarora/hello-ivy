import * as core from '@angular/core';
import { HigherOrderComponent } from './higher-order.component';

@HigherOrderComponent()
export class HelloIvy {
  static ngComponentDef = core.ɵɵdefineComponent({
    type: HelloIvy,
    selectors: [['app-hello-ivy']],
    consts: 5,
    vars: 1,
    factory: () => new HelloIvy(),
    inputs: {
      title: 'title',
    },
    template: (renderFlags, ctx) => {
      if (renderFlags & core.ɵRenderFlags.Create) {
        core.ɵɵelementStart(0, 'div');
        core.ɵɵelementStart(1, 'h1');
        core.ɵɵtext(2, ctx.title);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, 'button', ['class', 'btn btn-danger']);
        core.ɵɵlistener('click', $event => ctx.changeTitle());
        core.ɵɵtext(4, 'Change Title');
        core.ɵɵelementEnd();
      }
      if (renderFlags & core.ɵRenderFlags.Update) {
        core.ɵɵselect(2);
        core.ɵɵtextInterpolate1(' ', ctx.title, '\n');
      }
    },
  });

  title = 'Hello from Ivy';

  changeTitle() {
    this.title = 'New Title';
    core.ɵdetectChanges(this);
  }
}
