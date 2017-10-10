
$(document).ready(function() { 
	$.tablesorter.addParser({
		id: "monetaryValue",
		is: function (s) {
			return false;
		}, format: function (s) {
			return s.replace('$','').replace(/,/g,'');
		}, type: "numeric"
	});
	var headers = {};
	$(".tablesorter").find("th.amount").each(function() {
		headers[$(this).index()] = { sorter: "monetaryValue" };
	});
	$(".tablesorter").tablesorter({
		headers: headers
	});
}); 
