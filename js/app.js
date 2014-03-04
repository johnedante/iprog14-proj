$(function() {
	var model = new Model();

	var dragDropView = new DragDropView($('#dragDropView'),model);
	var dragDropController = new DragDropController(dragDropView,model);

	var makeActivityView = new MakeActivityView($('#makeActivityView'),model);
	var makeActivityController = new MakeActivityController(makeActivityView,model);

	$('#makeActivityView').hide();
	
	});