var MakeActivityView = function (container,model) {

	this.dDBtn = container.find('#dDView');

	model.addObserver(this);

	this.update = function(){
		// TODO
	}

}