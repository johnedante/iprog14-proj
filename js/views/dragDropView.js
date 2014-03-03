var DragDropView = function (container,model) {

	this.mABtn = container.find('#mAView');
	this.mABtn2 = container.find('#mAView2');
	model.addObserver(this);

	$(as);
	
	this.update = function (){
	var parked = model.parkedActivities;
	var first= "nullday";
	for(var i=0;i<parked.length;i++){
		var html= '<div id="'+first+i+'" class="'+parked[i].getType().replace(" ", "")+'"> '+parked[i].getLength()+' min '+parked[i].getName()+'</div>';
		$("#div1").append(html);
	}
		for(var j = 0;j<model.days.length;j++){
		var day = model.days[j];
		first = j+"day";
	k=j+2;
	for(var i=0;i<day._activities.length;i++){
	var html= '<div id="'+first+i+'" class="'+day._activities[i].getType().replace(" ", "")+'"> '+day._activities[i].getLength()+' min '+day._activities[i].getName()+'</div>';
	$("#div"+k).append(html);
	}
	}

}


}

function as(){
var parked = model.parkedActivities;
	var first= "nullday";
for(var i=0;i<parked.length;i++){
	var html= '<div id="'+first+i+'" class="'+parked[i].getType().replace(" ", "")+'"> '+parked[i].getLength()+' min '+parked[i].getName()+'</div>';
	$("#div1").append(html);
	}
	var k = 0;
		for(var j = 0;j<model.days.length;j++){
		var day = model.days[j];
		first = j+"day";
	k=j+2;
	for(var i=0;i<day._activities.length;i++){
	var html= '<div id="'+first+i+'" class="'+day._activities[i].getType().replace(" ", "")+'"> '+day._activities[i].getLength()+' min '+day._activities[i].getName()+'</div>';
	$("#div"+k).append(html);
	}
}
};
