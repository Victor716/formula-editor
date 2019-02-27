/**
 * @ngdoc directive
 * @name ngCalculator.component:keyboard
 * @function
 * @description
 * # keyboard
 */
app.component('keyboard', {
    templateUrl: './app/components/keyboard/keyboard.html',
    bindings: {
        onClick: "&"
    },
    controller: keyboardController,
    controllerAs: "keyboardCtrl"
});

function keyboardController($scope, $element, $attrs) {
    this.chars = {
        nums: ['CE', 'C', '←', '1', '2', '3', '4', '5', '6', '7', '8', '9', '±', '0', '.'],
        opChars: ['x²', 'x^y', 'sin', 'cos', 'tan', 'x³', 'y√x', 'sin﹣¹', 'cos﹣¹', 'tan﹣¹', '√', '10^x', 'log', 'Exp', 'Mod', '1/x', 'e^x', 'ln', 'dms', 'deg', '↑', 'π', 'n!', '(', ')'],
        basicChars: ['÷', '×', '-', '+', '=']
    }

    this.displayValue = (value) => {
        console.log("Component: keyboard output", value);
        this.output = value;
        this.onClick({
            value: value
        });
    }
    
}