const ngModuleName = 'formlyFoundation';
const angular = require('./angular-fix');
const ngModule = angular.module(ngModuleName, [require('angular-formly')]);
ngModule.constant(
  'formlyFoundationApiCheck',
  require('api-check')({
    output: {
      prefix: 'angular-formly-foundation'
    }
  })
);
ngModule.constant('formlyFoundationVersion', VERSION);

require('./wrappers')(ngModule);
require('./types')(ngModule);
require('./run')(ngModule);

export default ngModuleName;
