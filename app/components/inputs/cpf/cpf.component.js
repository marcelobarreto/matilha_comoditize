var inputCpf = {
  bindings: {
    placeholder: '@',
    label: '@',
    model: '=',
    required: '@',
    error: '='
  },
  templateUrl: './cpf.html'
};

angular
  .module('components.inputs')
  .component('inputCpf', inputCpf);
