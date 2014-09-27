angular
.module('app', [])
.controller('ExampleController', ExampleController);

function ExampleController() {

	var vm = this;
	vm.values = [];

	vm.refresh = refresh;
	
	vm.refresh();

	function refresh(){

		for (var i = 0; i != 100; ++i) {
			vm.values.push({name:'name'+i, value:i})
		}
	}
}
