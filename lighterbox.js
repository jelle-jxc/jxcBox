$(document).ready(function() {
	$('img[lb]').on('click', function() {
		var lb_img = $(this)[0];
		$('#lb-inner').html("<img src=" + lb_img.src + "/>");
		$('#lighterbox').show();
		var width = lb_img.clientWidth;
		$('#lb-inner').css('max-width', width);
	});
	$('#lighterbox').on('click', function() {
		$(this).hide();
		$('#lb-inner').html('');
	});
});