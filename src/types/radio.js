export default ngModule => {
  ngModule.config(addRadioType);

  function addRadioType(formlyConfigProvider, formlyFoundationApiCheck) {
    const c = formlyFoundationApiCheck;
    formlyConfigProvider.setType({
      name: 'radio',
      template: require('./radio.html'),
      wrapper: ['templateLabel', 'templateHasError'],
      defaultOptions: {
        noFormControl: false
      },
      apiCheck: {
        templateOptions: c.shape({
          options: c.arrayOf(c.object),
          labelProp: c.string.optional,
          valueProp: c.string.optional
        })
      },
      apiCheckInstance: c
    });
  }
};
