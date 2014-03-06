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
		var html='<div id="'+first+i+'" class="'+parked[i].getType().replace(" ", "")+' act"> '+parked[i].getLength()+' min '+parked[i].getName()+'</div>';
		$("#div1").append(html);
	}
//runs through all days, creates divs for all scheduled activities as well as adding the stats for them
	/*var k = 0;
		for(var j = 0;j<model.days.length;j++){
		var day = model.days[j];
				first = j+".";
		k=j+2;
		var html='';
		html += '<p>Start time: <input class="timeField" value="'+ day.getStart()+'"</input></p>'
		+"<p>End time: " + day.getEnd()+"</p>"
		+"<p>Total length: " + day.getTotalLength() + " min</p>"
		+'<div class="statbar">';
		$.each(ActivityType,function(index,type){
			html+="<div class='"+ ActivityType[index].replace(" ","") +"'style='height:" +  100*day.getLengthByType(index)/day.getTotalLength() + "%;'> </div>";
		});
		html += '</div><div class="statline"></div>';		//the end of the stat addition (made for each day)
		$("#stats"+k).html(html);
		$("#div"+k).html("");
		var acttime = day._start;
		console.log(acttime);
		for(var i=0;i<day._activities.length;i++){
			var m = acttime %60;
			if (m.toString().length==1){m = "0"+m;}
			var time = Math.floor(acttime/60) + ":" + m;
			var html= '<div id="'+first+i+'" class="'+day._activities[i].getType().replace(" ", "")+' act"> '+time+' '+day._activities[i].getName()+'</div>';
			$("#div"+k).append(html);
			acttime += parseInt(day._activities[i].getLength(),10);
		}				//the end of the div addition (with all the info about the activities for that day)
	}*/
	
}