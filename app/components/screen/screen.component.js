/**
 * @ngdoc component
 * @name ngCalculator.component:screen
 * @function
 * @description
 * # screen
 */
app.component('screen', {
            templateUrl: './app/components/screen/screen.html',
            bindings: {
                input: "=",
                content: "@"
            },
            controller: screenController,
            controllerAs: "screenCtrl"
});
function screenController($scope, $element, $attrs) {
      this.print = function() {
            console.log(this.input);
      }


}