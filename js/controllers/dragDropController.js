var DragDropController = function(view, model ) {
var index = 2;

	$('#dragDropField').append('<div id="daydiv'+index+'" class="daydiv"></div>');
	$('#daydiv'+index).append('<div id="start'+index+'" class="start"></div>');
	$('#daydiv'+index).append('<div id="stats'+index+'" class="stats"></div>');
	$('#daydiv'+index).append('<div id="div'+index+'" class="droparea"></div>');

	index++;
	// Creates first Day on load
	makeDay(model); 

	// This creates testdata
	createTestData(); 

	//switches views
	view.mABtn.click(function(){	
		$('#dragDropView').addClass('blurry');
		$('#makeActivityView').fadeIn();
	});

	  //creates new days and divs to hold the activities for those days and connects them with .sortable()
	view.mABtn2.click(function(){
		$('#dragDropField').append('<div id="daydiv'+index+'" class="daydiv"></div>');
		$('#daydiv'+index).append('<div id="start'+index+'" class="start"></div>');
		$('#daydiv'+index).append('<div id="stats'+index+'" class="stats"></div>');
		$('#daydiv'+index).append('<div id="div'+index+'" class="droparea"></div>');
		$('#daydiv'+index).append('<button id="deleteDay'+index+'" class="delDay">DELETE DAY</button>');

		index++;
		makeDay(model);
		model.makeUpdate();
	});
}

	function makeDay(model) {
		var dayView = new DayView($('.droparea'),model);
		var dayController = new DayController(dayView,model);
	}
