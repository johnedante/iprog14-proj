var DragDropController = function(view, model ) {
var index = 3;

	view.mABtn.click(function(){	//switches views
		$('#dragDropView').hide();
		$('#makeActivityView').show();
	});

	view.mABtn2.click(function(){  //creates new days and divs to hold the activities for those days and connects them with .sortable()
		$('#dragDropView').append('<div id="daydiv'+index+'" class="daydiv"></div>');
		$('#daydiv'+index).append('<div id="stats'+index+'" class="stats"></div>');
		$('#daydiv'+index).append('<div id="div'+index+'" class="droparea"></div>');

		index++;
		$(init);
	});
}

		$(init);
	function init() {
	model.addDay();		//adds a day to the model
		$( ".droparea" ).sortable({		//we bind together all divs with the class .droparea and enable drag/drop/sort thanks to jquery
			connectWith: ".droparea",
	//		start: function(event, ui) { sta = $(ui.item[0]).position(); console.log(sta); }, 
	// 		part of the old positioning code   
			stop: function(event, ui) { 
	//		sto = $(ui.item[0]).position(); 
	//		part of the old positioniong code
			var it = $(ui.item[0]);
			var old = it.attr('id');			//checks id of div that is being moved
			var od= old.substr(0, old.indexOf('.'));	//div id consists of a day indicator and a position with a . between them
			if (od<0){od=null;}							//originally called null null but it treated it as a "null" at time and null at other times, changed to -1 and this code-snippet
			var op= old.substr(old.indexOf('.')+1);		//positional information from div id
			var notold = it.parent().attr('id');		//shows the parent id of the target location
			var nd = notold.substr(notold.indexOf('v')+1)-2;	//parent id ends with a number which we use to pinpoint the day
			if (nd<0){nd=null;}									//if the modified number is below 0 we set it to null so that it can go to the parked activities
			//var np = ($(ui.item[0]).offset().top-$(ui.item[0]).parent().offset().top-parseInt($(".droparea").css("border"),10)-parseInt($(".act").css("margin").charAt(0),10))/(parseInt($(".act").css("height"),10)+2*parseInt($(".act").css("padding"),10)+parseInt($(".act").css("margin"),10));
			var np = it.parent().children().length-1
			-it.nextUntil("div.ui-sortable-placeholder").length;
			//very long code snippet that checks where on the screen the activity is dropped, subtracts the position of the parent, subtracts the border of the parent, subtracts the top margin of the first and/or only activity (i.e. sets it to 0 for the first location) and divide this by the height+padding+margin of the activities to pinpoint the location if it is not the first activity there.. this code has been made so long in order to be able to modify appearance of the web page without losing the functionality of model.moveActivity()
			console.log(od,op,nd,np); 	//prints out the four variables needed for model.moveActivity to make sure that they are correct
			model.moveActivity(od, op, nd, np); //moveActivity()... for moving activities =)
	//		$(inner);    no longer used
			}
		}).disableSelection();
	}
/* this function was used in order to calculate the variables needed for model.moveActivity() 
by means of positioning, which is a bad way of doing it, but due to there being no great way that we could
think of to show the newposition variable, this was a quick fix in order to test the model, listeners, etc.
	function inner() {
		var tt = 9;
		var nt = 20;
		var ll = 191;
		var nl = 182;
		var oldday = (sta.left-ll)/nl;
		if (oldday<0) {oldday=null};
		var newday = (sto.left-ll)/nl;
		if (newday<0) {newday=null};
		var oldposition = (sta.top-tt)/nt;
		var newposition = (sto.top-tt)/nt;
		console.log(oldday, oldposition, newday, newposition);
		model.moveActivity(oldday, oldposition, newday, newposition);
		
		}
*/
