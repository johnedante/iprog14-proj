var DragDropView = function (container,model) {

	this.mABtn = container.find('#mAView');
	this.mABtn2 = container.find('#mAView2');
	model.addObserver(this);

	this.update = function(){
		// TODO
	}

}