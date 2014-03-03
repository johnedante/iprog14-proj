var MakeActivityView = function (container,model) {

	this.dDBtn = container.find('#dDView');
	this.dDBtn2 = container.find('#dDView2');

	model.addObserver(this);

	this.update = function(){
		// TODO
	
	}

}