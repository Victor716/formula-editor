/**
 * @ngdoc directive
 * @name adminApp.directive: ngCalculator
 * @function
 * @description
 * #ngCalculator
 */
app.directive('ngCalculator', ['$http', function ($http) {
        return {
            restrict: 'AE',
            templateUrl: './app/components/wrapper/ng-calculator.html',
            scope: {},
            controller: wrapperController,
            controllerAs: "wrapperCtrl"
         }
    }]);

function wrapperController($scope, $element, $attrs) {
    this.header = "NG-CALCULATOR";
    this.getKeyValue = (v) => {
        console.log("Component: wrapper output", v);
        if (!this.input) this.input = new String();
        this.input += v;
    }
}