var inputEmail = {
  bindings: {
    placeholder: '@',
    label: '@',
    model: '=',
    required: '@',
    error: '='
  },
  templateUrl: './email.html'
};

angular
  .module('components.inputs')
  .component('inputEmail', inputEmail);
