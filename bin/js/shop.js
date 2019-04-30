var url = 'https://shop.connellmccarthy.com/cart/';
var urlend = ':1?channel=buy_button';

$('.option').click(function(e) {
	var current = $(this).attr('articleid');
	$('#' + current + ' .option.active').removeClass('active');
	$(this).addClass('active');
});

$('a.checkout').click(function() {
	var articleid = $(this).attr('id');
	var productselect = $('#' + articleid + ' .option.active').attr('id');
	window.open(url + productselect + urlend);
	
	event.preventDefault();
});