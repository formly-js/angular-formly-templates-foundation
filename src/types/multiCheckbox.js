export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'multiCheckbox',
      template: require('./multiCheckbox.html'),
      wrapper: ['templateLabel', 'templateHasError'],
      defaultOptions: {
        noFormControl: false
      },
      apiCheck: check => ({
        templateOptions: {
          options: check.arrayOf(check.object),
          labelProp: check.string.optional,
          valueProp: check.string.optional
        }
      }),
      controller: /* @ngInject */ function($scope) {
        const to = $scope.to;
        const opts = $scope.options;
        $scope.multiCheckbox = {
          checked: [],
          change: setModel
        };

        // initialize the checkboxes check property
        const modelValue = $scope.model[opts.key];
        if (angular.isArray(modelValue)) {
          const valueProp = to.valueProp || 'value';
          angular.forEach(to.options, function(v, index) {
            $scope.multiCheckbox.checked[index] = modelValue.indexOf(v[valueProp]) !== -1;
          });
        }

        function setModel() {
          $scope.model[opts.key] = [];
          angular.forEach($scope.multiCheckbox.checked, (checkbox, index) => {
            if (checkbox) {
              $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
            }
          });
        }
      }
    });
  }
};
