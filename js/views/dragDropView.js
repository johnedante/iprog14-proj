var DragDropView = function (container,model) {

	this.mABtn = container.find('#mAView');
	this.mABtn2 = container.find('#mAView2');
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
		html='<div id="'+first+i+'" class="'+parked[i].getType().replace(" ", "")+' act"> '+parked[i].getLength()+' min '+parked[i].getName()+'</div>';
		$("#div1").append(html);
	}
//runs through all days, creates divs for all scheduled activities as well as adding the stats for them
	var k = 0;
		for(var j = 0;j<model.days.length;j++){
		var day = model.days[j];
				first = j+".";
		k=j+2;
		var html='';
		html=html+"Start time: " + day.getStart()+"</br>";
		html=html+"End time: " + day.getEnd()+"</br>";
		html=html+"Total length: " + day.getTotalLength() + " min</br>";
		html += '<div class="statbar">';
		$.each(ActivityType,function(index,type){
			html=html+"<div class='"+ ActivityType[index].replace(" ","") +"'style='height:" +  100*day.getLengthByType(index)/day.getTotalLength() + "%;'> </div>";
		});
		html += '</br></div>';		//the end of the stat addition (made for each day)
		$("#stats"+k).html(html);
		$("#div"+k).html("");
		for(var i=0;i<day._activities.length;i++){
			var html= '<div id="'+first+i+'" class="'+day._activities[i].getType().replace(" ", "")+' act"> '+day._activities[i].getLength()+' min '+day._activities[i].getName()+'</div>';
			$("#div"+k).append(html);
		}				//the end of the div addition (with all the info about the activities for that day)
	}
	
}