var DragDropController = function(view, model ) {
var index = 2;
var remDays = 0;

	$('#dragDropField').append('<div id="daydiv'+index+'" class="daydiv"></div>');
	$('#daydiv'+index).append('<div id="start'+index+'" class="start"></div>');
	$('#daydiv'+index).append('<div id="stats'+index+'" class="stats"></div>');
	$('#daydiv'+index).append('<div id="div'+index+'" class="droparea"></div>');
	$('#daydiv'+index).append('<button id="deleteDay'+index+'" class="delDay">REMOVE DAY</button>');

	index++;
	// Creates first Day on load
	makeDay(model);
	model.makeUpdate(); 

	// This creates testdata
	createTestData(); 

	//switches views
	view.mABtn.click(function(){	
		$('#dragDropView').addClass('blurry');
		$('#makeActivityView').fadeIn(200);
	});

	  //creates new days and divs to hold the activities for those days and connects them with .sortable()
	view.mABtn2.click(function(){
		$('#dragDropField').append('<div id="daydiv'+index+'" class="daydiv"></div>');
		$('#daydiv'+index).append('<div id="start'+index+'" class="start"></div>');
		$('#daydiv'+index).append('<div id="stats'+index+'" class="stats"></div>');
		$('#daydiv'+index).append('<div id="div'+index+'" class="droparea"></div>');
		$('#daydiv'+index).append('<button id="deleteDay'+index+'" class="delDay">REMOVE DAY</button>');

		index++;
		makeDay(model);
		model.makeUpdate();
	});

	view.mABtn3.click(function(){
		for(var i=model.parkedActivities.length;i>0;i--){
			model.removeParkedActivity(i-1);
		}
	});

}

	function makeDay(model) {
		var dayView = new DayView($('.droparea'),model);
		var dayController = new DayController(dayView,model);
	}
