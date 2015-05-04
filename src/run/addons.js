export default ngModule => {
  ngModule.run(addAddonsManipulator);

  function addAddonsManipulator(formlyConfig, formlyFoundationApiCheck) {
    var addonTemplate = require('./addons.html');
    const addonChecker = formlyFoundationApiCheck.shape({
      class: formlyFoundationApiCheck.string.optional,
      text: formlyFoundationApiCheck.string.optional
    }).strict.optional;
    const api = formlyFoundationApiCheck.shape({
      templateOptions: formlyFoundationApiCheck.shape({
        addonLeft: addonChecker,
        addonRight: addonChecker
      })
    });
    formlyConfig.templateManipulators.preWrapper.push(function(template, options) {
      if (options.type !== 'input' || (!options.templateOptions.addonLeft && !options.templateOptions.addonRight)) {
        return template;
      }
      formlyFoundationApiCheck.warn([api], [options]);
      return addonTemplate.replace('<formly-transclude></formly-transclude>', template);
    });
  }
};
