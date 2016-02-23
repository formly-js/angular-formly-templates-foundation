export default ngModule => {
  ngModule.config(addWrappers);

  function addWrappers(formlyConfigProvider) {
    formlyConfigProvider.setWrapper([
      {
        name: 'templateLabel',
        template: require('./label.html'),
        apiCheck: check => ({
          templateOptions: {
            label: check.string,
            required: check.bool.optional
          }
        })
      },
      {name: 'templateHasError', template: require('./has-error.html')}
    ]);
  }
};
