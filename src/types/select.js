export default  ngModule => {
  ngModule.config(addSelectType);

  function addSelectType(formlyConfigProvider, formlyFoundationApiCheck) {
    const c = formlyFoundationApiCheck;
    formlyConfigProvider.setType({
      name: 'select',
      template: require('./select.html'),
      wrapper: ['templateLabel', 'templateHasError'],
      apiCheck: {
        templateOptions: c.shape({
          options: c.arrayOf(c.object),
          labelProp: c.string.optional,
          valueProp: c.string.optional,
          groupProp: c.string.optional
        })
      },
      apiCheckInstance: c
    });
  }
};
