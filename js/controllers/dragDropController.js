var DragDropController = function(view, model ) {
var index = 3;

	view.mABtn.click(function(){
		$('#dragDropView').hide();
		$('#makeActivityView').show();
	});

	view.mABtn2.click(function(){
		$('#dragDropView').append('<div id="div'+index+'" class="droparea" style="height:100px;width:180px;border:1px solid black;float:left;">');
		model.addDay();
		index++;
		
		$(init);
	});
}

		$(init);
	function init() {
		$( ".droparea" ).sortable({
			connectWith: ".droparea",
			start: function(event, ui) { sta = $(ui.item[0]).position(); console.log(sta); },    
			stop:function(event, ui) { sto = $(ui.item[0]).position(); console.log(sto); $(inner);}
		//could use naming system for starting location $(ui.item[0]).attr('id'); but not for stop
		}).disableSelection();

	}
	function inner() {
		var tt = 9;
		var nt = 20;
		var ll = 191;
		var nl = 182;
		var oldday = (sta.left-ll)/nl;
		if (oldday<0) {oldday=null};
		var newday = (sto.left-ll)/nl;
		if (newday<0) {newday=null};
		var oldposition = (sta.top-tt)/nt;
		var newposition = (sto.top-tt)/nt;
		model.moveActivity(oldday, oldposition, newday, newposition);
		}

