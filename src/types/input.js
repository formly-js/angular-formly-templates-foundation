export default ngModule => {
  ngModule.config(addInputType);

  function addInputType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'input',
      template: '<input ng-model="model[options.key]">',
      wrapper: ['templateLabel', 'templateHasError' ],
      defaultOptions: {
        templateOptions: { type: 'text' }
      }
    });
  }
};
