var DragDropController = function(view, model ) {
var index = 2;

	$('#dragDropField').append('<div id="daydiv'+index+'" class="daydiv"></div>');
	$('#daydiv'+index).append('<div id="start'+index+'" class="start"></div>');
	$('#daydiv'+index).append('<div id="stats'+index+'" class="stats"></div>');
	$('#daydiv'+index).append('<div id="div'+index+'" class="droparea"></div>');
	index++;
	makeDay(model); // Creates first Day on load

	createTestData(); // This creates testdata

	view.mABtn.click(function(){	//switches views
		$('#dragDropView').addClass('blurry');
		$('#makeActivityView').fadeIn();
	});

	view.mABtn2.click(function(){  //creates new days and divs to hold the activities for those days and connects them with .sortable()
		$('#dragDropField').append('<div id="daydiv'+index+'" class="daydiv"></div>');
		$('#daydiv'+index).append('<div id="start'+index+'" class="start"></div>');
		$('#daydiv'+index).append('<div id="stats'+index+'" class="stats"></div>');
		$('#daydiv'+index).append('<div id="div'+index+'" class="droparea"></div>');

		index++;
		makeDay(model);
		model.makeUpdate();
	});


	view.mABtn3.click(function(){  //creates new days and divs to hold the activities for those days and connects them with .sortable()
		$('#dragDropField').append('<div id="daydiv'+index+'" class="daydiv"></div>');
		$('#daydiv'+index).append('<div id="start'+index+'" class="start"></div>');
		$('#daydiv'+index).append('<div id="stats'+index+'" class="stats"></div>');
		$('#daydiv'+index).append('<div id="div'+index+'" class="droparea"></div>');

		index++;
		makeDay(model);
		model.makeUpdate();
	});


}

	function makeDay(model) {
		var dayView = new DayView($('.droparea'),model);
		var dayController = new DayController(dayView,model);
	}
