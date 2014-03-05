var MakeActivityController = function(view, model ) {

	view.dDBtn.click(function(){	//changes views without changing the model
		$('#makeActivityView').hide();
		$('#dragDropView').show();
		
	});

	view.dDBtn2.click(function(){	//changes views after having changed the model
		$('#makeActivityView').hide();
		$('#dragDropView').show();
		model.addActivity(new Activity(nameField.value,lengthField.value,typeList.value,descField.value));
		$('.mAF').val("");
	});

}
