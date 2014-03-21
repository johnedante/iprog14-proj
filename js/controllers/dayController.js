var DayController = function(view, model ) {

	view.dayContainer.disableSelection().click( function(event, ui){
		var it = $(event.target);
		if(it.hasClass('act')){
			//checks id of div that is being moved
			var old = it.attr('id');
				//div id consists of a day indicator and a position with a . between them			
			var od= old.substr(0, old.indexOf('.'));
			//originally called null null but it treated it as a "null" at time and null at other times, changed to -1 and this code-snippet
			if (od<0){
				od=null;
			}							
			var op= old.substr(old.indexOf('.')+1);
			
		//	model.actvar = [od,op];
			model.modifyActivity(od,op);	//changes the variable model.actvar and tells the listener that it has changed
			
			$('#dragDropView').addClass('blurry');
			$('#makeActivityView').fadeIn();
		}
	});

	$('.timeField').change(function(){
				if(view.id==this.id){
					var time = this.value.split(":");
					if(time.length<2){time[1]=(0);}
					if(parseInt(time[1])>60||parseInt(time[1])<0||parseInt(time[0])>23||parseInt(time[0])<0){this.style.border="2px solid #f69";}else{
					this.style.border="2px solid #addfff";
					
					model.days[view.id].setStart(parseInt(time[0]),parseInt(time[1]));
				}
				}
	});

	$('.delDay').click(function(){
		var s = "deleteDay"+(view.id+2);
		if(s == this.id){
			model.removeDay(view.id);
			view.remove();
			this.remove();
		}
		
	});
}