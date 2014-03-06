var DayController = function(view, model ) {

	view.dayContainer.disableSelection().click( function(event, ui){
		var it = $(event.target);
		if(it.hasClass('act')){
			var old = it.attr('id');			//checks id of div that is being moved
			var od= old.substr(0, old.indexOf('.'));	//div id consists of a day indicator and a position with a . between them
			if (od<0){od=null;}							//originally called null null but it treated it as a "null" at time and null at other times, changed to -1 and this code-snippet
			var op= old.substr(old.indexOf('.')+1);
			console.log(od, op);
		//	model.actvar = [od,op];
			model.modifyActivity(od,op);	//changes the variable model.actvar and tells the listener that it has changed
			
			$('#dragDropView').addClass('blurry');
			$('#makeActivityView').show();
		}
	});

	console.log(view.timeField);

	view.timeField.focusin(function(){
				console.log("hej");
			});
}