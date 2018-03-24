
$(document).ready(function() { 
	$.tablesorter.addParser({
		id: "monetaryValue",
		is: function (s) {
			return false;
		}, format: function (s) {
			return s.replace('$','').replace(' 2', '').replace(/,/g,'');
		}, type: "numeric"
	});
	var headers = {};
	$(".tablesorter").find("th.amount").each(function() {
		headers[$(this).index()] = { sorter: "monetaryValue" };
	});
	$(".tablesorter").tablesorter({
		headers: headers
	});
	$("tr.details").hide();
	$("a.toggle-link").click( function() {
		var next = $(this).closest("tr").next("tr.details");
		next.toggle();
		$(this).text(next.is(":visible") ? "-" : "+");
		return false;
	});
}); 
