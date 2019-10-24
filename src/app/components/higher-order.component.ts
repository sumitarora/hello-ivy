export function HigherOrderComponent() {
  return component => {
    const originalFactory = component.ngComponentDef.factory;
    component.ngComponentDef.factory = (...args) => {
      const context = originalFactory(...args);
      if (context.title) {
        context.title = 'Higher ' + context.title;
      }

      component.ngComponentDef.onInit = () => {
        if (context.ngOnInit) {
          console.log('ngOnInit', context.constructor.name);
          context.ngOnInit();
        }
      };

      return context;
    };
    return component;
  };
}
