var MakeActivityController = function(view, model ) {

	view.dDBtn.click(function(){
		$('#makeActivityView').hide();
		$('#dragDropView').show();
		$( "#div1").append('<div class="work">snälla?</div>');
	});

}
