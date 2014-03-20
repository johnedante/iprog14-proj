var MakeActivityView = function (container,model) {

	this.dDBtn = container.find('#cancelBtn');
	this.dDBtn2 = container.find('#saveBtn');
	this.dDBtn3 = container.find('#deleteBtn');

	model.addObserver(this);

	this.update = function(){
		if (model.actvar[0]== "none"){console.log("blah");} //if it is a new activity, it does nothing here
			else{console.log("tada");						//else, it checks if it is parked or a day-activity
			if (model.actvar[0]==null){
				var act = model.parkedActivities[model.actvar[1]]}
				else {
				var act = model.days[model.actvar[0]]._activities[model.actvar[1]];
			}
		 $("#nameField").val(act.getName());		//populates the input fields after having found the proper activity
		 $("#lengthField").val(act.getLength());
		 $("#typeList").val(act.getTypeId());
		 $("#descField").val(act.getDescription());
		 $("#deleteBtn").show();
		}
	}

}