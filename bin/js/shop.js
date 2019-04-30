var dn_bomb_s, dn_bomb_m, dn_bomb_l, dn_bomb_xl, dn_bomb_xxl, dn_hood_s, dn_hood_m, dn_hood_l, dn_hood_xl, dn_hood_xxl, dn_tee_s, dn_tee_m, dn_tee_l, dn_tee_xl, dn_tee_xxl;
var url = 'https://connellmccarthy.myshopify.com/cart/';
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