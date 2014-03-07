var MakeActivityController = function(view, model ) {

	view.dDBtn.click(function(){	//changes views without changing the model
		$('#makeActivityView').fadeOut();
		$('#dragDropView').removeClass('blurry');
		nameField.style.border="1px solid #dedede";
		lengthField.style.border="1px solid #dedede";
	});

	view.dDBtn2.click(function(){	//changes views after having changed the model
		if(lengthField.value>0&&nameField.value!=""){
			$('#makeActivityView').fadeOut();
			$('#dragDropView').removeClass('blurry');
			var av= model.actvar;  
			console.log(av);
			model.actvar = ["none","none"];
			//model.modifyActivity("none","none");
			if (av[0]== "none"){  // if av[0] is "none", then it is a new activity and a new one should be created, otherwise the activity should be modified
				model.addActivity(new Activity(nameField.value,lengthField.value,typeList.value,descField.value));}
			else{
				model.modActivity(new Activity(nameField.value,lengthField.value,typeList.value,descField.value), av[0], av[1]);
			}

			$('.mAF').val(""); //resets the values of the inputs
			nameField.style.border="1px solid #dedede";
			lengthField.style.border="1px solid #dedede";
			model.makeUpdate();
	}
	else{ if(nameField.value==""){nameField.style.border="1px solid #f69";}else{nameField.style.border="1px solid #dedede";}
	if(lengthField.value<1){lengthField.style.border="1px solid #f69";}else{lengthField.style.border="1px solid #dedede";}}
	});

}
