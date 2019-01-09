// Australia map code from https://medium.com/@devinmarieb/from-a-to-z-with-d3-35d28e7bfce6

var count = 1;
var text;
var information = document.querySelector('.map-information');
var width = 800,
	height = 600;
var svg = d3.select('.map-container').append('svg')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'map');
var projection = d3.geo.albers()
	.translate([width / 2, height / 2])
	.scale(900)
	.rotate([-133, 50]) //add a third index of 10
	.center([0, 25]);
var path = d3.geo.path()
	.projection(projection);
var zoom = d3.behavior.zoom()
	.translate(projection.translate())
	.scale(projection.scale())
	.scaleExtent([height, 100 * height])
	.on('zoom', zoomed);
var g = svg.append('g')
	.call(zoom);
g.append('rect')
    .attr('class', 'map-background')
    .attr('width', width)
    .attr('height', height);
	
d3.json('map/australia.json', function (error, aus) {
	if (error) return console.error(error);
	g.selectAll()
		.data(topojson.feature(aus, aus.objects.collection).features)
		.enter().append('path')
		.attr('class', 'map-unit')
		.attr('id', function () { return 'region' + count++ })
		.attr('d', path);
	g.selectAll('.pin')
		.data(locations)
		.enter().append('circle', '.pin')
		.attr('class', 'map-location')
		.attr('data-name', function (d) { return d.name; })
		.attr('data-info', function (d) { return d.information; })
		.attr('r', 5)
		.attr('transform', function (d) {
			return 'translate(' + projection([
				d.longitude,
				d.latitude
			]) + ')'
		});
});

//function checkRegionName(name) {
//	switch (name) {
//		case region3:
//			text = 'Northern Territory';
//			break;
//		case region4:
//			text = 'Western Australia';
//			break;
//		case region5:
//			text = 'Australian Capital Territory';
//			break;
//		case region6:
//			text = 'New South Wales';
//			break;
//		case region7:
//			text = 'South Australia';
//			break;
//		case region8:
//			text = 'Victoria';
//			break;
//		case region9:
//			text = 'Queensland';
//			break;
//		case region10:
//			text = 'Norfolk Island';
//			break;
//		case region11:
//			text = 'Tasmania';
//			break;
//		default:
//			text = '';
//	}
//};

function zoomed() {
	projection
		.translate(d3.event.translate)
		.scale(d3.event.scale);
	g.selectAll('path')
		.attr('d', path);
	g.selectAll('circle')
		.attr('transform', function (d) {
			return 'translate(' + projection([
				d.longitude,
				d.latitude
			]) + ')'
		});
}

setTimeout(function () {
	var units = document.querySelectorAll('.map-location');
	for (var i = 0; i < units.length; i++) {
		units[i].addEventListener('mouseover', function () {
			var name = this.attributes['data-name'].value;
			var info = this.attributes['data-info'].value;
			information.innerText = name + ': ' + info;
		})
		units[i].addEventListener('mouseout', function () {
			information.innerText = '';
		})
	}
}, 300);
