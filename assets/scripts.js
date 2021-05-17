$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$( document ).ready(function() {
	$('img').click(function(){
	    if($(this).hasClass("zoom")) {
	        $(this).removeClass('zoom');
	    } else {
	        $(this).addClass('zoom');
	    }
	});
});