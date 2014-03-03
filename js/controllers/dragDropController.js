var DragDropController = function(view, model ) {
var index = 2;
	view.mABtn.click(function(){
		$('#dragDropView').hide();
		$('#makeActivityView').show();
	});

	view.mABtn2.click(function(){
		$('#dragDropView').append('<div id="div'+index+'" class="droparea" style="height:200px;width:100px;border:1px solid black;float:left;">');
		$(init);
	});
}

		$(init);
	function init() {
	  $( ".droparea" ).sortable({
      connectWith: ".droparea"
    }).disableSelection();
  }


