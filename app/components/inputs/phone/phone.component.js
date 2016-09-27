var inputPhone = {
  bindings: {
    placeholder: '@',
    label: '@',
    model: '=',
    required: '@',
    error: '='
  },
  templateUrl: './phone.html'
};

angular
  .module('components.inputs')
  .component('inputPhone', inputPhone);
