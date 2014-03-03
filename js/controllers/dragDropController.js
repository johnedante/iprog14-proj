var DragDropController = function(view, model ) {

	view.mABtn.click(function(){
		$('#dragDropView').hide();
		$('#makeActivityView').show();
	});

}

function allowDrop(ev){
	ev.preventDefault();
}

function drag(ev){
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev){
	ev.preventDefault();
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}