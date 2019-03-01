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
    this.header = "Formula Editor";
    
    /**
     * @param {String} char
     */
    this.opSeletor = (c) => {
    	switch(c) {
    		case 'CE':
    			return clearRecent;
    		case 'C':
    			return clearAll;
    		case '←':
    			return backspace;
    		case '±':
    			return pnSwitch;
    		case 'x²':
    			return "^2";
    		case 'x^y':
    			return "^";
    		case 'sin':
    			return sin;
    		case 'cos':
    			return cos;
    		case 'tan':
    			return tan;
    		case 'x³':
    			return "^3";
    		case 'y√x':
    			return yroot;
    		case 'sin﹣¹':
    			return arcsin;
    		case 'cos﹣¹':
    			return arccos;
    		case '√':
    			return sqrt;
    		case '10^x':
    			return pw10;
    		case 'log':
    			return log;
    		case 'Exp':
    			return "e+";
    		case 'Mod':
    			return "Mod";
    		case '1/x':
    			return reciprocal;
    		case 'e^x':
    			return epw;
    		case 'ln':
    			return ln;
    		case 'deg':
    			return deg;
    		case 'π':
    			return "π";
    		case 'n!':
    			return fac;
    		default:
    			return c;
    	}
    }
    
    function clearRecent() {
    
    }
    
    function clearAll() {
    
    }
    
    function backspace() {
    
    }
    
    function pnSwitch() {
    
    }
    
    function yroot(y) {
    	if (y === undefined) return;
    	return "yroot" + y;
    }
    
    function sin(c) {
    	if (c === undefined) return;
    	return "sin(" + c + ")";
    }
    
    function cos(c) {
    	if (c === undefined) return;
    	return "cos(" + c + ")";
    }
    
    function tan(c) {
    	if (c === undefined) return;
    	return "tan(" + c + ")";
    }
    
    function arcsin(c) {
    	if (c === undefined) return;
    	return "arcsin(" + c + ")";
    }
    
    function arccos(c) {
    	if (c === undefined) return;
    	return "arccos(" + c + ")";
    }
    
    function arctan(c) {
    	if (c === undefined) return;
    	return "arctan(" + c + ")";
    }
    
    function sqrt(c) {
    	if (c === undefined) return;
    	return "√(" + c + ")";
    }
    
    function pw10(c) {
    	if (c === undefined) return;
    	return "10^(" + c + ")";
    }
    
    function log(c) {
    	if (c === undefined) return;
    	return "log(" + c + ")";
    }
    
    function reciprocal(c) {
    	if (c === undefined) return;
    	return "1/(" + c + ")";
    }
    
    function epw(c) {
    	if (c === undefined) return;
    	return "e^" + c;
    }
    
    function ln(c) {
    	if (c === undefined) return;
    	return "ln(" + c + ")";
    }
    
    function deg(c) {
    	if (c === undefined) return;
    	return "deg(" + c + ")";
    }
    
    function fac(c) {
    	if (c === undefined) return;
    	return c + "!";
    }
    
    this.getKeyValue = (v) => {
        if (!this.input) this.input = new String();
        let g = this.opSeletor(v);
        if (typeof g === "function") {
        	if (this.input.length === 0) return; 
        	let len = this.input.length;
        		r = getNonOpChar(this.input),
        		s = len <= r.n ? '' : this.input.substring(0, len - r.n + 1);
        	this.input = s + g(r.s);
        } else {
        	if (this.input.length === 0 && !/^[0-9]+?$/.test(v)) return;
        	this.input += g;
        }
    }
    
    function getNonOpChar(str) {
    	let reg = /^[0-9]+?$/,
    		r = [],
    		c = 0;
    	for (let i = str.length - 1; i < str.length; i--) {
    		if (reg.test(str.charAt(i))) { 
    			r.unshift(str.charAt(i));
    			c++;
    		} else break; 
    	}
    	return { 
    			s: r.join(""),
    			n: c
    		};
    }
}
