
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
		headers[$(this).index()] = { sorter: "monetaryValue", sortInitialOrder: "desc" };
	});
	$(".tablesorter").tablesorter({
		headers: headers,
		dateFormat: "ddmmyyyy",
		widgets: ["filter"],
		widgetOptions : {
			filter_ignoreCase: true,
			filter_placeholder : { search : 'Filter', select : 'Filter' },
			filter_matchType : { 'input': 'match', 'select': 'exact' }
		}
	});
	$("div.details").hide();
	$("a.toggle-link").click( function() {
		var next = $(this).closest("div").next("div.details");
		next.toggle();
		$(this).text(next.is(":visible") ? "-" : "+");
		return false;
	});
	$("a.expand-all-link").click( function() {
		$("div.details").show();
		$("a.toggle-link").text("-");
		return false;
	});
	$("a.collapse-all-link").click( function() {
		$("div.details").hide();
		$("a.toggle-link").text("+");
		return false;
	});
}); 
