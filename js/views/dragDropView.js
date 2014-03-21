var DragDropView = function (container,model) {

	this.mABtn = container.find('#mAView');
	this.mABtn2 = container.find('#mAView2');
	this.mABtn3 = container.find('#mAView3');
	model.addObserver(this);
	
	
this.update = function(){
$(as);
}



}
$(as);		
function as(){   //runs on model updates
var parked = model.parkedActivities;	//runs through all parked activities and adds divs with the information about them
	var first= "-1.";
	$("#div1").html("");
for(var i=0;i<parked.length;i++){
		var html='<div id="'+first+i+'" class="'+parked[i].getType().replace(" ", "")+' act"> '+parked[i].getLength()+' min '+parked[i].getName()+'</div>';
		$("#div1").append(html);
	}
	
}