var MakeActivityController = function(view, model ) {

	view.dDBtn.click(function(){
		$('#makeActivityView').hide();
		$('#dragDropView').show();
		
	});

	view.dDBtn2.click(function(){
		model.addActivity(new Activity("Introduction",10,0,""));
//		model.addActivity(new Activity(nameField.value,lengthField.value,typeList.value,descField.value));
		$('#makeActivityView').hide();
		$('#dragDropView').show();
		
	});

}
