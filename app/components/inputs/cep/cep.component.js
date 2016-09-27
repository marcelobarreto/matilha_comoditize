var inputCep = {
  bindings: {
    placeholder: '@',
    label: '@',
    model: '=',
    required: '@',
    error: '='
  },
  templateUrl: './cep.html'
};

angular
  .module('components.inputs')
  .component('inputCep', inputCep);
