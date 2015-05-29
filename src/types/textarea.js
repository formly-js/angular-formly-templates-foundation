export default  ngModule => {
  ngModule.config(addTextareaType);

  function addTextareaType(formlyConfigProvider, formlyFoundationApiCheck) {
    const c = formlyFoundationApiCheck;
    formlyConfigProvider.setType({
      name: 'textarea',
      template: '<textarea class="" ng-model="model[options.key]"></textarea>',
      wrapper: ['templateLabel', 'templateHasError'],
      defaultOptions: {
        ngModelAttrs: {
          rows: {attribute: 'rows'},
          cols: {attribute: 'cols'}
        }
      },
      apiCheck: {
        templateOptions: c.shape({
          rows: c.number.optional,
          cols: c.number.optional
        })
      },
      apiCheckInstance: c
    });
  }
};
