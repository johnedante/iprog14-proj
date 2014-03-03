var DragDropView = function (container,model) {

	this.mABtn = container.find('#mAView');
	this.mABtn2 = container.find('#mAView2');
	model.addObserver(this);

	$(as);
	this.update = function (){
		for(var j = 0;j<model.days.length;j++){
		var day = model.days[j];
	k=j+2;
	for(var i=0;i<day._activities.length;i++){
	var html= '<div class="'+day._activities[i].getType().replace(" ", "")+'"> '+day._activities[i].getLength()+' min '+day._activities[i].getName()+'</div>';
	$("#div"+k).append(html);
	}
	}

}


}

function as(){
		// TODO
		for(var j = 0;j<model.days.length;j++){
		var day = model.days[j];
	k=j+2;
	for(var i=0;i<day._activities.length;i++){
	var html= '<div class="'+day._activities[i].getType().replace(" ", "")+'"> '+day._activities[i].getLength()+' min '+day._activities[i].getName()+'</div>';
	$("#div"+k).append(html);
	}
}
};
