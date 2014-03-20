var DayView = function (container,model) {

	var index=0;
	var sortableIn = 1;

	this.id = model.days.length;
	//adds a day to the model
	model.addDay();		
	
	$("#start"+parseInt(this.id+2)).html('<p style="margin-left:-28px;"><STRONG>Start time: </STRONG><input id="'+this.id+'" class="timeField" value="'+ model.days[this.id].getStart()+'"</input></p>');
	console.log("#start"+parseInt(this.id+2));

//we bind together all divs with the class .droparea and enable drag/drop/sort thanks to jquery
	this.dayContainer = container.sortable({		
			connectWith: ".droparea",

			stop: function(event, ui) {
			var it = $(ui.item[0]);
			
			//checks id of div that is being moved
			var old = it.attr('id');			

			//div id consists of a day indicator and a position with a . between them
			var od= old.substr(0, old.indexOf('.'));
			//originally called null null but it treated it as a "null" at time and null at other times, changed to -1 and this code-snippet	
			if (od<0){
				od=null;
			}
			//positional information from div id							
			var op= parseInt(old.substr(old.indexOf('.')+1));		
			//shows the parent id of the target location
			var notold = it.parent().attr('id');
			//parent id ends with a number which we use to pinpoint the day		
			var nd = notold.substr(notold.indexOf('v')+1)-2;
			//if the modified number is below 0 we set it to null so that it can go to the parked activities	
			if (nd<0){
				nd=null;
			}									
			
			//very long code snippet that checks where on the screen the activity is dropped, 
			//subtracts the position of the parent, subtracts the border of the parent,
			// subtracts the top margin of the first and/or only activity (i.e. sets it to 0 for the first location) 
			//and divide this by the height+padding+margin of the activities to pinpoint the location if it is not the first activity there.. 
			//this code has been made so long in order to be able to modify appearance of the web page without losing the functionality of model.moveActivity()
			var np = it.parent().children().length-1
			-it.nextUntil("div.ui-sortable-placeholder").length;
			model.moveActivity(od, op, nd, np); //moveActivity()... for moving activities =)
	
			}
		});

	model.addObserver(this);

	

	this.update = function() {
		var day = model.days[this.id]
		var first = this.id+".";
		var k=parseInt(this.id+2);
		var html='';
		html += "<p><STRONG>End time: </STRONG>" + day.getEnd()+"</p>"
		+"<p><STRONG>Total length: </STRONG>" + day.getTotalLength() + " min</p>"
		+'<div class="statbar">';
		$.each(ActivityType,function(index,type){
			html+="<div class='"+ ActivityType[index].replace(" ","") +"'style='height:" +  100*day.getLengthByType(index)/day.getTotalLength() + "%;'> </div>";
		});
		html += '</div><div class="statline"></div>';		//the end of the stat addition (made for each day)
		$("#stats"+k).html(html);
		$("#div"+k).html("");
		var acttime = day._start;
		for(var i=0;i<day._activities.length;i++){
			var m = acttime %60;
			if (m.toString().length==1){m = "0"+m;}
			var time = Math.floor(acttime/60) + ":" + m;
			var html= '<div id="'+first+i+'" class="'+day._activities[i].getType().replace(" ", "")+' act"><p style="float:left;margin:0;"><STRONG>'+day._activities[i].getName()+'</strong></p> <p style="float:right;margin:0;">'+time+'</p></div>';
			$("#div"+k).append(html);
			acttime += parseInt(day._activities[i].getLength(),10);
		}
	}

	this.remove = function (){
		var i = this.id + 2;
		
		$("#daydiv"+i).remove();
	}

}