var DragDropView = function (container,model) {

	this.mABtn = container.find('#mAView');
	this.mABtn2 = container.find('#mAView2');
	model.addObserver(this);
	
	
this.update = function(){
$(as);
}



}
$(as);
function as(){
var parked = model.parkedActivities;
	var first= "-1.";
	$("#div1").html("");
for(var i=0;i<parked.length;i++){
	var html= '<div id="'+first+i+'" class="'+parked[i].getType().replace(" ", "")+' act"> '+parked[i].getLength()+' min '+parked[i].getName()+'</div>';
	$("#div1").append(html);
	}
	var k = 0;
		for(var j = 0;j<model.days.length;j++){
		var day = model.days[j];
				first = j+".";
	k=j+2;
	var html="";
		html=html+"Day Start: " + day.getStart()+"</br>";
	html=html+"Day End: " + day.getEnd()+"</br>";
	html=html+"Day Length: " + day.getTotalLength() + " min</br>";
	html += '<div class="statbar">';
	$.each(ActivityType,function(index,type){
		html=html+"<div class='"+ ActivityType[index].replace(" ","") +"'style='height:" +  100*day.getLengthByType(index)/day.getTotalLength() + "%;'> </div>";
		});
	html += '</div>';
	$("#stats"+k).html(html);
	$("#div"+k).html("");
	for(var i=0;i<day._activities.length;i++){
	var html= '<div id="'+first+i+'" class="'+day._activities[i].getType().replace(" ", "")+' act"> '+day._activities[i].getLength()+' min '+day._activities[i].getName()+'</div>';
	$("#div"+k).append(html);
	}
}
	
}