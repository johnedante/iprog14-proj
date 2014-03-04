var MakeActivityView = function (container,model) {

	this.dDBtn = container.find('#cancelBtn');
	this.dDBtn2 = container.find('#saveBtn');

	model.addObserver(this);

	this.update = function(){
		// TODO
	
	}

}