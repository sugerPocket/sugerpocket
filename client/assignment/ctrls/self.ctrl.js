'use strict';

(function() {

  angular
    .module('sugerpocket.assignment')
    .controller('assignmentCtrl', assignmentCtrl);

  assignmentCtrl.$inject = ['$scope', '$state'];

  function assignmentCtrl($scope, $state) {
    const vm = this;

    activate();

    ///////////////工具函数

    //////////////事件处理

    //////////////资源
    function initResource() {}

    //////////////初始化变量
    function initVariable() {}

    //////////////使用参数初始化变量
    function initParamsVariable() {}

    //////////////添加各种watch
    function initWatchEvent() {}

    function activate() {
      initVariable();
      initResource();
      initParamsVariable();
      initWatchEvent();
    }
  }
})();
