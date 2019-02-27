/**
 * @ngdoc directive
 * @name ngCalculator.component: key
 * @function
 * @description
 * # key
 */
app.component('key', {
            templateUrl: './app/components/key/key.html',
            bindings: {
                content: "@",
                onClick: "&"
            },
            controller: keyController,
            controllerAs: "keyCtrl"
         }
    );
    
function keyController($scope, $element, $attrs) {
    console.log();
    this.keyClick = () => {
        this.output = this.content;
        console.log("Component: key output", this.output);
        this.onClick({
            value: this.content
        });
    }
}
