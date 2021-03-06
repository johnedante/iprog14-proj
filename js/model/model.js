// JavaScript Document
// The possible activity types
var ActivityType = ["Presentation","Group Work","Discussion","Break"]
var selectedActivity = null;



// This is an activity constructor
// When you want to create a new activity you just call
// var act = new Activity("some activity",20,1,"Some description);
function Activity(name,length,typeid,description){
	var _name = name;
	var _length = parseInt(length);
	var _typeid = typeid;
	var _description = description;
	
	// sets the name of the activity
	this.setName = function(name) {
		_name = name;
		model.notifyObservers();
	}

	// get the name of the activity
	this.getName = function(name) {
		return _name;
	}
	
	// sets the length of the activity
	this.setLength = function(length) {
		_length = length;
		model.notifyObservers();
	}

	// get the name of the activity
	this.getLength = function() {
		return _length;
	}
	
	// sets the typeid of the activity
	this.setTypeId = function(typeid) {
		_typeid = typeid;
		model.notifyObservers();
	}

	// get the type id of the activity
	this.getTypeId = function() {
		return _typeid;
	}
	
	// sets the description of the activity
	this.setDescription = function(description) {
		_description = description;
		model.notifyObservers();
	}

	// get the description of the activity
	this.getDescription = function() {
		return _description;
	}
	
	// This method returns the string representation of the
	// activity type.
	this.getType = function () {
		return ActivityType[_typeid];
	};
}

// This is a day consturctor. You can use it to create days, 
// but there is also a specific function in the Model that adds
// days to the model, so you don't need call this yourself.
function Day(startH,startM) {
	this._start = startH * 60 + startM;
	this._activities = [];

	// sets the start time to new value
	this.setStart = function(startH,startM) {
		this._start = startH * 60 + startM;
		model.notifyObservers();
	}

	// returns the total length of the acitivities in 
	// a day in minutes
	this.getTotalLength = function () {
		var totalLength = 0;
		$.each(this._activities,function(index,activity){
			totalLength += parseInt(activity.getLength());
		});
		return totalLength;
	};
	
	// returns the string representation Hours:Minutes of 
	// the end time of the day
	this.getEnd = function() {
		var end = this._start + this.getTotalLength();
		var dayz = "";
		var m=end % 60;
		if(Math.floor(end/(60*24))>0){
			dayz+= " +"+Math.floor(end/(60*24))+" day";
				if(Math.floor(end/(60*24))>1){
					dayz+="s";
				}
		}

		if (m.toString().length==1){
		m = "0"+m;
		}
		return (Math.floor(end/60))%24 + ":" + m + dayz;
	};
	
	// returns the string representation Hours:Minutes of 
	// the start time of the day
	this.getStart = function() {
		var m=this._start % 60;
		if (m.toString().length==1){
		m = "0"+m;
		}
		return Math.floor(this._start/60) + ":"+ m;
	};
	
	// returns the length (in minutes) of activities of certain type
	this.getLengthByType = function (typeid) {
		var length = 0;
		$.each(this._activities,function(index,activity){
			if(activity.getTypeId() == typeid){
				length += parseInt(activity.getLength());
			}
		});
		return length;
	};
	
	// adds an activity to specific position
	// if the position is not provided then it will add it to the 
	// end of the list
	this._addActivity = function(activity,position){
		if(position != null){
			this._activities.splice(position,0,activity);
		} else {
			this._activities.push(activity);
		}
	};
	
	// removes an activity from specific position
	// this method will be called when needed from the model
	// don't call it directly
	this._removeActivity = function(position) {
		return this._activities.splice(position,1)[0];
	};
	
	// moves activity inside one day
	// this method will be called when needed from the model
	// don't call it directly
	this._moveActivity = function(oldposition,newposition) {
		var activity = this._removeActivity(oldposition);
		this._addActivity(activity, newposition);
	};
}


// this is our main module that contians days and praked activites
function Model(){
	this.actvar = ["none", "none"]; //contains information about activity position in case of modification
	this.days = [];
	this.removedDays = [];
	
	this.parkedActivities = [];
	
	this.modifyActivity = function (d,p) { //changes actvar and notifies observers
		this.actvar = [d,p];
		this.notifyObservers();
	}
	this.modActivity = function (activity,d,p) { //removes the loaded activity and adds the same activity with the changes

		if (d==null){
			this.removeParkedActivity(p);
			this.addActivity(activity,d,p);
		}
		else{
			this.days[d]._removeActivity(p);
			this.addActivity(activity,d,p);	

		}
		this.notifyObservers();
	}
	this.removeActivity = function (activity, d, p){
		var con = false;
		for(var j = 0; j < this.removedDays.length;j++){
			if(d == this.removedDays[j] ){
				con = true;
				break;
			}
		}
		if(!con){
			if(d == null){
				return this.removeParkedActivity(p);
			}else{
				return this.days[d]._removeActivity(p);
			}
			this.notifyObservers();
			
		}
	}
	// adds a new day. if startH and startM (start hours and minutes)
	// are not provided it will set the default start of the day to 08:00
	this.addDay = function (startH,startM) {
		var day;
		if(startH){
			day = new Day(startH,startM);
		} else {
			day = new Day(8,0);
		}
		this.days.push(day);
		this.notifyObservers();
		return day;
	};

	
	
	// add an activity to model
	this.addActivity = function (activity,day,position) {
		var con = false;
		for(var j = 0; j < this.removedDays.length;j++){
			if(day == this.removedDays[j]){
				con = true;
				break;
			}
		}
		if(con){
			
		}else{
			if(day != null) {
				this.days[day]._addActivity(activity,position);
			} else {
				this.parkedActivities.push(activity);
			}
			this.notifyObservers();
		}
	}
	
	// add an activity to parked activities
	this.addParkedActivity = function(activity){
		this.parkedActivities.push(activity);
		this.notifyObservers();
	};
	
	// remove an activity on provided position from parked activites 
	this.removeParkedActivity = function(position) {
		act = this.parkedActivities.splice(position,1)[0];
		this.notifyObservers();
		return act;
	};

	//Move all activies for a certain day to the activity pool and add the erased day to removedDays.
	//We need to do continous checks in a lot of the functions belonging to model to make sure that it does not update/access erased days.
	this.removeDay = function(day){
		var con = false;
		for(var j = 0; j < this.removedDays.length;j++){
			if(day == this.removedDays[j]){
				con = true;
				break;
			}
		}
		if(!con){
			var lt = this.days[day]._activities.length;
			for(var i = lt-1; i >=0; i--){
				var activity = this.days[day]._activities[i];
				this.addParkedActivity(activity);
				this.removeActivity(activity,day,i);
			}
			
		this.notifyObservers();
		}
		
	};

	
	// moves activity between the days, or day and parked activities.
	// to park activity you need to set the new day to null
	// to move a parked activity to let's say day 0 you set oldday to null
	// and new day to 0
	this.moveActivity = function(oldday, oldposition, newday, newposition) {
		
		for(var j = 0; j < this.removedDays.length;j++){
			if(oldday == this.removedDays[j] || newday== this.removedDays[j]){
				
				return;
			}
		}
		if(oldday !== null && oldday == newday) {
			this.days[oldday]._moveActivity(oldposition,newposition);
		}else if(oldday == null && newday == null) {
			var activity = this.removeParkedActivity(oldposition);
			this.addParkedActivity(activity,newposition);
		}else if(oldday == null) {
			var activity = this.removeParkedActivity(oldposition);
			this.days[newday]._addActivity(activity,newposition);
		}else if(newday == null) {
			var activity = this.days[oldday]._removeActivity(oldposition);
			this.addParkedActivity(activity);
		} else {
			var activity = this.days[oldday]._removeActivity(oldposition);
			this.days[newday]._addActivity(activity,newposition);
		}
		this.notifyObservers();

	};

	this.amountOfDays = function(){
		return this.days.length -this.removedDays.length;
	}
	
	//*** OBSERVABLE PATTERN ***
	var listeners = [];
	
	this.notifyObservers = function (args) {
	    for (var i = 0; i < listeners.length; i++){
			var con = false;
			for(var j = 0; j < model.removedDays.length;j++){
				if(i == model.removedDays[j]){
					con = true;
					break;
				}
			}
			if(!con){
		        listeners[i].update(args);
			}
	
	    }
	};
	
	this.addObserver = function (listener) {
	    listeners.push(listener);
	};
	
	//*** END OBSERVABLE PATTERN ***

	this.makeUpdate = function() {
		this.notifyObservers();
	};
}

// this is the instance of our main model
// this is what you should use in your application
var model = new Model();
// you can use this method to create some test data and test your implementation
function createTestData(){
	//model.addDay();
	model.addActivity(new Activity("Introduction",10,0,""),0);
	model.addActivity(new Activity("Idea 1",30,0,""),0);
	model.addActivity(new Activity("Working in groups",35,1,""),0);
	model.addActivity(new Activity("Idea 1 discussion",15,2,""),0);
	model.addActivity(new Activity("Coffee break",20,3,""),0);
	
	console.log("Day Start: " + model.days[0].getStart());
	console.log("Day End: " + model.days[0].getEnd());
	console.log("Day Length: " + model.days[0].getTotalLength() + " min");
	
}