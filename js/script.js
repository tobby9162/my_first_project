$(document).ready(function(){
	
	$( "#sortable" ).sortable({
		revert: true
	});
	$( "#draggable" ).draggable({
		connectToSortable: "#sortable",
		helper: "clone",
		revert: "invalid",
		start: function( event, ui ) {
			console.log("Drag Start");
		},
		stop: function( event, ui ) {
			console.log("Drag Stop");
		}
	});
	$( "ul, li" ).disableSelection();

});


function getSubpage(pageNo){

	var ajaxUrl = "./data/sub-page-"+pageNo+".json";

	$.ajax({
		url : ajaxUrl,
		method : "GET",
		dataType : "json",
		success : function(data){
			console.log(data);
			if(data.success == "1"){
				$("#subWrap").html(data.data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown){
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
		}
	});
}
