var DragDropController = function(view, model ) {
var index = 3;

	view.mABtn.click(function(){
		$('#dragDropView').hide();
		$('#makeActivityView').show();
	});

	view.mABtn2.click(function(){

		$('#dragDropView').append('<div id="div'+index+'" class="droparea"></div>');
		index++;
		
		$(init);
	});
}

		$(init);
	function init() {
	model.addDay();
		$( ".droparea" ).sortable({
			connectWith: ".droparea",
	//		start: function(event, ui) { sta = $(ui.item[0]).position(); console.log(sta); },    
			stop: function(event, ui) { 
	//		sto = $(ui.item[0]).position(); 
			var old = $(ui.item[0]).attr('id');
			var od= old.substr(0, old.indexOf('.'));
			if (od<0){od=null;}
			var op= old.substr(old.indexOf('.')+1);		
			var notold = $(ui.item[0]).parent().attr('id');
			var nd = notold.substr(notold.indexOf('v')+1)-2;
			if (nd<0){nd=null;}
			var np = ($(ui.item[0]).offset().top-$(ui.item[0]).parent().offset().top-parseInt($(".droparea").css("border"),10)-parseInt($(".act").css("margin").charAt(0),10))/(parseInt($(".act").css("height"),10)+2*parseInt($(".act").css("padding"),10)+parseInt($(".act").css("margin"),10));
			console.log(od,op,nd,np); 
			model.moveActivity(od, op, nd, np);
	//		$(inner);
			}
		}).disableSelection();
	}
/*
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
		console.log(oldday, oldposition, newday, newposition);
		model.moveActivity(oldday, oldposition, newday, newposition);
		
		}
*/
