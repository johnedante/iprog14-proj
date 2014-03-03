var MakeActivityController = function(view, model ) {

	view.dDBtn.click(function(){
		$('#makeActivityView').hide();
		$('#dragDropView').show();
		
	});

	view.dDBtn2.click(function(){
		model.addActivity(new Activity("Testaktivitet",10,0,"Test"));
		$('#makeActivityView').hide();
		$('#dragDropView').show();
	
	});
}
