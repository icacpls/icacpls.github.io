// Australia map code from https://medium.com/@devinmarieb/from-a-to-z-with-d3-35d28e7bfce6

var filterParty = getParameterByName('party');
if (filterParty) {
	document.querySelector('input[type=radio][name=party]').value = filterParty;
	filterParty = filterParty.toLowerCase();
}
var filterMember = getParameterByName('member');
if (filterMember) {
	document.querySelector('input[type=text][name=member]').value = filterMember;
	filterMember = filterMember.toLowerCase();
}

var memberInformation = document.querySelector('#member-information');
var mapInformation = document.querySelector('#map-information');

var states;
var locations;
var members;
buildLocations();

document.querySelectorAll('input[type=radio][name=party]').forEach(function (item) {
	item.addEventListener('change', function() {
		document.querySelector('input[type=text][name=member]').value = '';
		filterMember = '';
		filterParty = this.value;
		buildLocations();
		loadMap();
		updateUrl();
	});
});

document.querySelectorAll('input[type=text][name=member]').forEach(function (item) {
	item.addEventListener('change', function() {
		document.querySelector('input[type=radio][name=party]').checked = true;
		filterParty = '';
		filterMember = this.value;
		buildLocations();
		loadMap();
		updateUrl();
	});
});

loadMap();
function loadMap() {
	// HACK: This flickers too much, should remove and redraw the parts we need
	var container = document.querySelector('#map-container');
	container.removeChild(container.lastChild);

	var width = 800,
		height = 600;
	var svg = d3.select('#map-container')
		.append('svg')
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
	
	var count = 1;
	d3.json('map/australia.json', function (error, aus) {
		if (error) return console.error(error);
		g.selectAll()
			.data(topojson.feature(aus, aus.objects.collection).features)
			.enter().append('path')
			.attr('class', 'map-state')
			.attr('id', function () { return 'region' + count++ })
			.attr('d', path);
		g.selectAll('.pin')
			.data(locations)
			.enter().append('circle', '.pin')
			.attr('class', 'map-location')
			.attr('data-name', function (d) { return d.name; })
			.attr('data-info', function (d) { return d.information; })
			.attr('r', function (d) { return 5 + d.count })
			.attr('transform', function (d) {
				return 'translate(' + projection([
					d.longitude,
					d.latitude
				]) + ')'
			});
			
		setTimeout(function () {
			var mapStates = document.querySelectorAll('.map-state');
			for (var i = 0; i < mapStates.length; i++) {
				mapStates[i].addEventListener('mouseover', function () {
					var info = getStateInfo(this);
					mapInformation.innerText = info
				})
				mapStates[i].addEventListener('mouseout', function () {
					mapInformation.innerText = '';
				})
			}

			var mapLocations = document.querySelectorAll('.map-location');
			for (var i = 0; i < mapLocations.length; i++) {
				mapLocations[i].addEventListener('mouseover', function () {
					var info = this.attributes['data-info'].value;
					mapInformation.innerText = info;
				})
				mapLocations[i].addEventListener('mouseout', function () {
					mapInformation.innerText = '';
				})
			}
		}, 300);
	});

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
}

function buildLocations() {
	states = [];
	locations = [];
	members = [];
	
	for (var i = 0; i < properties.length; i++) {
		if (filterParty && properties[i].party.toLowerCase().indexOf(filterParty) === -1) {
			continue;
		}
		if (filterMember && properties[i].member.toLowerCase().indexOf(filterMember) === -1) {
			continue;
		}
		updateState(properties[i]);
		updateLocation(properties[i]);
		updateMember(properties[i]);
	}

	updateStatesInfo();
	updateLocationsInfo();
	updateMembersInfo();
}

function updateState(property) {
	var state = null;
	for (var j = 0; j < states.length; j++) {
		if (states[j].name === property.state) {
			state = states[j];
			break;
		}
	}
	if (!state) {
		state = { name: property.state, count: 0, members: [] };
		states.push(state);
	}
	state.count = state.count + 1;

	var member = null;
	for (var j = 0; j < state.members.length; j++) {
		if (state.members[j].name === property.member) {
			member = state.members[j];
			break;
		}
	}
	if (!member) {
		member = { name: property.member, party: property.party, count: 0 };
		state.members.push(member);
	}
	member.count = member.count + 1;
}

function updateLocation(property) {
	var location = null;
	for (var j = 0; j < locations.length; j++) {
		if (locations[j].name === property.location) {
			location = locations[j];
			break;
		}
	}
	if (!location) {
		location = { name: property.location, latitude: property.latitude, longitude: property.longitude, count: 0, members: [] };
		locations.push(location);
	}
	location.count = location.count + 1;
	
	var member = null;
	for (var j = 0; j < location.members.length; j++) {
		if (location.members[j].name === property.member) {
			member = location.members[j];
			break;
		}
	}
	if (!member) {
		member = { name: property.member, party: property.party, count: 0 };
		location.members.push(member);
	}
	member.count = member.count + 1;
}

function updateMember(property) {
	var member = null;
	for (var j = 0; j < members.length; j++) {
		if (members[j].name === property.member) {
			member = members[j];
			break;
		}
	}
	if (!member) {
		member = { name: property.member, party: property.party, count: 0 };
		members.push(member);
	}
	member.count = member.count + 1;
}

function updateStatesInfo() {
	for (var i = 0; i < states.length; i++) {
		var info = states[i].name + ': ' + states[i].count + ' ' + (states[i].count === 1 ? 'property' : 'properties') + ' owned by ' + states[i].members.length + ' ' + (states[i].members.length === 1 ? 'member' : 'members') + ': the most by ';
		states[i].members.sort(memberPropertySort);
		for (var j = 0; j < 3 && j < states[i].members.length; j++) {
			if (j > 0) {
				info = info + ', ';
			}
			info = info + states[i].members[j].name + ' ' + getPartyAbbrev(states[i].members[j].party);
			if (states[i].members[j].count > 1) {
				info = info + ' (' + states[i].members[j].count + ')';
			}
		}
		states[i].information = info;
	}
}

function updateLocationsInfo() {
	for (var i = 0; i < locations.length; i++) {
		var info = locations[i].name + ': ' + locations[i].count + ' ' + (locations[i].count === 1 ? 'property' : 'properties') + ' owned by ' + locations[i].members.length + ' ' + (locations[i].members.length === 1 ? 'member' : 'members') + ': ';
		for (var j = 0; j < locations[i].members.length; j++) {
			if (j > 0) {
				info = info + ', ';
			}
			info = info + locations[i].members[j].name + ' ' + getPartyAbbrev(locations[i].members[j].party);
			if (locations[i].members[j].count > 1) {
				info = info + ' (' + locations[i].members[j].count + ')';
			}
		}
		locations[i].information = info;
	}
}

function updateMembersInfo() {
	var propertyCount = 0;
	for (var i = 0; i < locations.length; i++) {
		propertyCount = propertyCount + locations[i].count;
	}

	var info = '';
	if (members.length) {
		if (filterParty) {
			info = info + members[0].party + ': ';
		} else if (filterMember) {
			info = info + 'Members named ' + filterMember + ': ';
		}
		info = info + propertyCount + ' ' + (propertyCount === 1 ? 'property' : 'properties') + ' owned by ' + members.length + ' ' + (members.length === 1 ? 'member' : 'members')

		if (members.length === 1) {
			info = info + ': ' + members[0].name + ' ' + getPartyAbbrev(members[0].party);
		} else {
			info = info + ': the most by ';
			members.sort(memberPropertySort);
			for (var j = 0; j < 3 && j < members.length; j++) {
				if (j > 0) {
					info = info + ', ';
				}
				info = info + members[j].name + ' ' + getPartyAbbrev(members[j].party);
				if (members[j].count > 1) {
					info = info + ' (' + members[j].count + ')';
				}
			}
		}
		info = info + '.';
	} else {
		info = '0 properties.';
	}
	
	memberInformation.innerText = info;
}

function memberPropertySort(a, b) {
	if (a.count < b.count) {
		return -1 * -1;
	} else if (a.count > b.count) {
		return 1 * -1;
	} else {
		return 0;
	}
}

function getStateInfo(id) {
	var name;
	switch (id) {
		case region3: name = 'NT'; break;
		case region4: name = 'WA'; break;
		case region5: name = 'ACT'; break;
		case region6: name = 'NSW'; break;
		case region7: name = 'SA'; break;
		case region8: name = 'VIC'; break;
		case region9: name = 'QLD'; break;
		case region10: name = 'NI'; break;
		case region11: name = 'TAS'; break;
		default: name =  ''; break;
	}
	for (var i = 0; i < states.length; i++) {
		if (states[i].name === name) {
			return states[i].information;
		}
	}
	return '';
};

function getPartyAbbrev(party) {
	switch (party) {
		case 'Australian Conservatives': return 'AC';
		case 'Australian Greens': return 'GRN';
		case 'Australian Labor Party': return 'LAB';
		case 'Centre Alliance': return 'CA';
		case 'Country Liberal Party': return 'CLP';
		case 'Derryn Hinch\'s Justice Party': return 'DHJP';
		case 'Independent': return 'IND';
		case 'Katter\'s Australian Party': return 'KAT';
		case 'Liberal Democratic Party': return 'LDP';
		case 'Liberal Party of Australia': return 'LIB';
		case 'Pauline Hanson\'s One Nation': return 'PHON';
		case 'The Nationals': return 'NAT';
		case 'United Australia Party': return 'UAP';
		default: return 'OTH';
	}
}

function updateUrl() {
	var url = window.location.href;
	if (url.indexOf('?') !== -1) {
		url = url.substr(0, url.indexOf('?'));
	}
	if (filterParty) {
		url = url + '?party=' + filterParty.replace(/ /g, '+');
	}
	else if (filterMember) {
		url = url + '?member=' + filterMember.replace(/ /g, '+');
	}
	window.history.replaceState(null, null, url);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) {
		return null;
	}
    if (!results[2]) {
		return '';
	}
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
