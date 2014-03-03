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
      connectWith: ".droparea"
    }).disableSelection();
  }


