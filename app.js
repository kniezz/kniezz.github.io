
(function(){
	var app = angular.module.("gemStore",[]);
	
	app.controller("storeController", function(){
		this.product = gem;
	});
	
	var gem = {
		name: "Ruby",
		price: 30.25,
		description: "test"
	}
})();
