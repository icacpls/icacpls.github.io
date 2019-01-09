var locations = [
	{
		name: '',
		latitude: '0',
		longitude: '0',
		information: '2 properties owned by 2 members: Bob Katter (1), Lucy Gichuhi (1)'
	},
	{
		name: 'Abbotsford, NSW',
		latitude: '-33.8505529',
		longitude: '151.129759',
		information: '1 property owned by 1 member: Craig Laundy (1)'
	},
	{
		name: 'ACT',
		latitude: '-35.4883502',
		longitude: '149.0026942',
		information: '1 property owned by 1 member: Tim Wilson (1)'
	},
	{
		name: 'Acton Park, TAS',
		latitude: '-42.8638035',
		longitude: '147.4771671',
		information: '1 property owned by 1 member: Jonathon Duniam (1)'
	},
	{
		name: 'Adelaide, SA',
		latitude: '-34.9281805',
		longitude: '138.5999312',
		information: '7 properties owned by 4 members: Penny Wong (1), Rex Patrick (1), Stirling Griff (2), Tony Pasin (3)'
	},
	{
		name: 'Aireys Inlet, VIC',
		latitude: '-38.4620894',
		longitude: '144.1067555',
		information: '1 property owned by 1 member: Jenny Macklin (1)'
	},
	{
		name: 'Airey\'s Inlet, VIC',
		latitude: '-38.4620894',
		longitude: '144.1067555',
		information: '1 property owned by 1 member: Mark Dreyfus (1)'
	},
	{
		name: 'Aitkenvale, QLD',
		latitude: '-19.3019469',
		longitude: '146.7660472',
		information: '2 properties owned by 1 member: Cathy O\'Toole (2)'
	},
	{
		name: 'Albany, WA',
		latitude: '-35.0247822',
		longitude: '117.883608',
		information: '1 property owned by 1 member: Rick Wilson (1)'
	},
	{
		name: 'Albion, QLD',
		latitude: '-27.4303642',
		longitude: '153.0421201',
		information: '1 property owned by 1 member: Andrew Bartlett (1)'
	},
	{
		name: 'Albury, NSW',
		latitude: '-36.0148062',
		longitude: '146.982171477454',
		information: '3 properties owned by 1 member: Sussan Ley (3)'
	},
	{
		name: 'Alcomie, TAS',
		latitude: '-40.9348744',
		longitude: '145.186698',
		information: '1 property owned by 1 member: Deborah O\'Neill (1)'
	},
	{
		name: 'Aldinga, SA',
		latitude: '-35.2673234',
		longitude: '138.4831296',
		information: '1 property owned by 1 member: Kate Ellis (1)'
	},
	{
		name: 'Alexandra Headland, QLD',
		latitude: '-26.6669432',
		longitude: '153.1028931',
		information: '1 property owned by 1 member: Andrew Wallace (1)'
	},
	{
		name: 'Applecross, WA',
		latitude: '-32.0140001',
		longitude: '115.8395158',
		information: '2 properties owned by 2 members: Ben Morton (1), Mathias Cormann (1)'
	},
	{
		name: 'Ashgrove, QLD',
		latitude: '-27.445076',
		longitude: '152.993363',
		information: '1 property owned by 1 member: Murray Watt (1)'
	},
	{
		name: 'Auchenflower, QLD',
		latitude: '-27.4743727',
		longitude: '152.995695',
		information: '1 property owned by 1 member: Chris Ketter (1)'
	},
	{
		name: 'Ayr, QLD',
		latitude: '-19.5758597',
		longitude: '147.4044626',
		information: '2 properties owned by 2 members: Ian Macdonald (1), Karen Andrews (1)'
	},
	{
		name: 'Ballarat, VIC',
		latitude: '-37.5622632',
		longitude: '143.8607215',
		information: '1 property owned by 1 member: Catherine King (1)'
	},
	{
		name: 'Barossa Valley, SA',
		latitude: '-34.61341495',
		longitude: '138.938545516936',
		information: '1 property owned by 1 member: Nick Champion (1)'
	},
	{
		name: 'Barton, ACT',
		latitude: '-35.3072631',
		longitude: '149.1404986',
		information: '2 properties owned by 2 members: Madeleine King (1), Scott Buchholz (1)'
	},
	{
		name: 'Barwon Heads, VIC',
		latitude: '-38.2736381',
		longitude: '144.489649181241',
		information: '1 property owned by 1 member: Sarah Henderson (1)'
	},
	{
		name: 'Basket Range, SA',
		latitude: '-34.9357041',
		longitude: '138.773738894045',
		information: '1 property owned by 1 member: Julie Bishop (1)'
	},
	{
		name: 'Bayside, VIC',
		latitude: '-37.93978075',
		longitude: '145.017752562162',
		information: '1 property owned by 1 member: Tim Wilson (1)'
	},
	{
		name: 'Beaconsfield, NSW',
		latitude: '-33.9114691',
		longitude: '151.200315',
		information: '2 properties owned by 1 member: Mehreen Faruqi (2)'
	},
	{
		name: 'Beaconsfield, WA',
		latitude: '40.8077725',
		longitude: '-94.0505057',
		information: '2 properties owned by 2 members: Josh Wilson (1), Madeleine King (1)'
	},
	{
		name: 'Bealiba, VIC',
		latitude: '-36.827335',
		longitude: '143.564458938726',
		information: '1 property owned by 1 member: Julia Banks (1)'
	},
	{
		name: 'Belair, SA',
		latitude: '-34.9993826',
		longitude: '138.625499',
		information: '1 property owned by 1 member: Sarah Hanson-Young (1)'
	},
	{
		name: 'Belmont, WA',
		latitude: '-31.9545783',
		longitude: '115.942628890964',
		information: '4 properties owned by 3 members: Anne Aly (1), Ian Goodenough (2), Tim Hammond (1)'
	},
	{
		name: 'Berwick, VIC',
		latitude: '-38.0403826',
		longitude: '145.3481493',
		information: '1 property owned by 1 member: Anthony Byrne (1)'
	},
	{
		name: 'Bicheno, TAS',
		latitude: '-41.8748974',
		longitude: '148.3038105',
		information: '1 property owned by 1 member: Peter Whish-Wilson (1)'
	},
	{
		name: 'Birdwood, SA',
		latitude: '-34.8187997',
		longitude: '138.9638545',
		information: '1 property owned by 1 member: Rebekha Sharkie (1)'
	},
	{
		name: 'Birregurra, VIC',
		latitude: '-38.3377863',
		longitude: '143.7843347',
		information: '1 property owned by 1 member: Sarah Henderson (1)'
	},
	{
		name: 'Blackburn, VIC',
		latitude: '-37.8217009',
		longitude: '145.152276',
		information: '1 property owned by 1 member: Michael Sukkar (1)'
	},
	{
		name: 'Blackmans Bay, TAS',
		latitude: '-43.004684',
		longitude: '147.3179857',
		information: '1 property owned by 1 member: Eric Abetz (1)'
	},
	{
		name: 'Blacktown, NSW',
		latitude: '-33.7401885',
		longitude: '150.864835532895',
		information: '1 property owned by 1 member: Ed Husic (1)'
	},
	{
		name: 'Blackwater, QLD',
		latitude: '-23.5812001',
		longitude: '148.8832401',
		information: '1 property owned by 1 member: Scott Buchholz (1)'
	},
	{
		name: 'Blairgowrie, VIC',
		latitude: '-38.3687445',
		longitude: '144.7722682',
		information: '1 property owned by 1 member: Tony Smith (1)'
	},
	{
		name: 'Blaxland, NSW',
		latitude: '-33.7460755',
		longitude: '150.6092697',
		information: '1 property owned by 1 member: Doug Cameron (1)'
	},
	{
		name: 'Bondi Junction, NSW',
		latitude: '-33.8930034',
		longitude: '151.2501228',
		information: '1 property owned by 1 member: Lee Rhiannon (1)'
	},
	{
		name: 'Bongaree, QLD',
		latitude: '-27.0832895',
		longitude: '153.1603502',
		information: '1 property owned by 1 member: Ged Kearney (1)'
	},
	{
		name: 'Boonah, QLD',
		latitude: '-27.9968966',
		longitude: '152.6819604',
		information: '1 property owned by 1 member: Scott Buchholz (1)'
	},
	{
		name: 'Borroloola, NT',
		latitude: '-16.0594471',
		longitude: '136.3054069',
		information: '1 property owned by 1 member: Malarndirri McCarthy (1)'
	},
	{
		name: 'Bowley Point, NSW',
		latitude: '52.815766',
		longitude: '-1.3357642',
		information: '1 property owned by 1 member: Chris Bowen (1)'
	},
	{
		name: 'Bowral, NSW',
		latitude: '-34.4816626',
		longitude: '150.4177868',
		information: '1 property owned by 1 member: Kerryn Phelps (1)'
	},
	{
		name: 'Box Hill, VIC',
		latitude: '-37.81393',
		longitude: '145.123762360105',
		information: '1 property owned by 1 member: Jacinta Collins (1)'
	},
	{
		name: 'Braddon, ACT',
		latitude: '-35.2708149',
		longitude: '149.135735',
		information: '1 property owned by 1 member: Barnaby Joyce (1)'
	},
	{
		name: 'Braeside, VIC',
		latitude: '-38.0005245',
		longitude: '145.1229578',
		information: '1 property owned by 1 member: Julia Banks (1)'
	},
	{
		name: 'Branyan, QLD',
		latitude: '-24.9145404',
		longitude: '152.2653562',
		information: '2 properties owned by 1 member: Keith Pitt (2)'
	},
	{
		name: 'Brighton, VIC',
		latitude: '-37.90560815',
		longitude: '145.002750613033',
		information: '1 property owned by 1 member: David Gillespie (1)'
	},
	{
		name: 'Brisbane, QLD',
		latitude: '-27.4689682',
		longitude: '153.0234991',
		information: '4 properties owned by 2 members: Barry O\'Sullivan (2), Ross Vasta (2)'
	},
	{
		name: 'Brunswick West, VIC',
		latitude: '-37.7633334',
		longitude: '144.9425563',
		information: '1 property owned by 1 member: Chris Crewther (1)'
	},
	{
		name: 'Brunswick, VIC',
		latitude: '-37.7664715',
		longitude: '144.9613103',
		information: '2 properties owned by 2 members: Ged Kearney (1), Maria Vamvakinou (1)'
	},
	{
		name: 'Bruny Island, TAS',
		latitude: '-43.2898931',
		longitude: '147.2890737745',
		information: '1 property owned by 1 member: Carol Brown (1)'
	},
	{
		name: 'Buchanan, NSW',
		latitude: '-32.8149936',
		longitude: '151.5177744',
		information: '1 property owned by 1 member: Meryl Swanson (1)'
	},
	{
		name: 'Buddina, QLD',
		latitude: '-26.6938877',
		longitude: '153.132782',
		information: '1 property owned by 1 member: David Littleproud (1)'
	},
	{
		name: 'Buderim, QLD',
		latitude: '-26.6858829',
		longitude: '153.0585186',
		information: '1 property owned by 1 member: Ted O\'Brien (1)'
	},
	{
		name: 'Busselton, WA',
		latitude: '-33.644499',
		longitude: '115.3488754',
		information: '1 property owned by 1 member: Sue Lines (1)'
	},
	{
		name: 'Caloundra, QLD',
		latitude: '-26.7981633',
		longitude: '153.1354434',
		information: '1 property owned by 1 member: Shayne Neumann (1)'
	},
	{
		name: 'Camberwell, VIC',
		latitude: '-37.8384623',
		longitude: '145.0740767',
		information: '1 property owned by 1 member: Mark Dreyfus (1)'
	},
	{
		name: 'Camden, NSW',
		latitude: '-34.016087',
		longitude: '150.71988490858',
		information: '1 property owned by 1 member: Mike Freelander (1)'
	},
	{
		name: 'Camp Mountain, QLD',
		latitude: '-27.4118007',
		longitude: '152.8772076',
		information: '1 property owned by 1 member: Peter Dutton (1)'
	},
	{
		name: 'Campbell, ACT',
		latitude: '-35.2913397',
		longitude: '149.158176',
		information: '1 property owned by 1 member: Susan Templeman (1)'
	},
	{
		name: 'Canberra, ACT',
		latitude: '-35.2975906',
		longitude: '149.1012676',
		information: '13 properties owned by 13 members: Alan Tudge (1), Andrew Broad (1), Andrew Laming (1), Andrew Leigh (1), Anthony Albanese (1), Barry O\'Sullivan (1), Jason Falinski (1), Linda Burney (1), Malcolm Turnbull (1), Mathias Cormann (1), Michael Sukkar (1), Rick Wilson (1), Stephen Jones (1)'
	},
	{
		name: 'Carindale, QLD',
		latitude: '-27.5032764',
		longitude: '153.1040678',
		information: '1 property owned by 1 member: Ross Vasta (1)'
	},
	{
		name: 'Caringbah, NSW',
		latitude: '-34.0354477',
		longitude: '151.1248018',
		information: '1 property owned by 1 member: Tanya Plibersek (1)'
	},
	{
		name: 'Carlton North, VIC',
		latitude: '-37.7845585',
		longitude: '144.9728553',
		information: '1 property owned by 1 member: Scott Ryan (1)'
	},
	{
		name: 'Carlton, VIC',
		latitude: '-37.8004228',
		longitude: '144.9684343',
		information: '1 property owned by 1 member: Maria Vamvakinou (1)'
	},
	{
		name: 'Caves Beach, NSW',
		latitude: '-33.1122864',
		longitude: '151.6449973',
		information: '1 property owned by 1 member: Michelle Rowland (1)'
	},
	{
		name: 'Central Victoria, VIC',
		latitude: '51.4947328',
		longitude: '-0.1445802',
		information: '1 property owned by 1 member: Andrew Broad (1)'
	},
	{
		name: 'Cessnock, NSW',
		latitude: '-32.89403765',
		longitude: '151.301463938301',
		information: '2 properties owned by 1 member: Joel Fitzgibbon (2)'
	},
	{
		name: 'Chatsworth, QLD',
		latitude: '-26.1444435',
		longitude: '152.6138916',
		information: '1 property owned by 1 member: Llew O\'Brien (1)'
	},
	{
		name: 'Chippendale, NSW',
		latitude: '-33.8863291',
		longitude: '151.1998211',
		information: '1 property owned by 1 member: Marise Payne (1)'
	},
	{
		name: 'Chirnside Park, VIC',
		latitude: '-37.7385835',
		longitude: '145.3143181',
		information: '1 property owned by 1 member: Tony Smith (1)'
	},
	{
		name: 'Civic, ACT',
		latitude: '-35.2812678',
		longitude: '149.1291868',
		information: '1 property owned by 1 member: David Fawcett (1)'
	},
	{
		name: 'Clare, SA',
		latitude: '-33.8333914',
		longitude: '138.6120042',
		information: '1 property owned by 1 member: Tony Zappia (1)'
	},
	{
		name: 'Clayfield, QLD',
		latitude: '-27.4223848',
		longitude: '153.050976',
		information: '1 property owned by 1 member: Milton Dick (1)'
	},
	{
		name: 'Clear Island Waters, QLD',
		latitude: '-28.0437627',
		longitude: '153.3985228',
		information: '1 property owned by 1 member: Karen Andrews (1)'
	},
	{
		name: 'Clifton Hill, VIC',
		latitude: '-37.7904385',
		longitude: '144.9975371',
		information: '2 properties owned by 1 member: Andrew Giles (2)'
	},
	{
		name: 'Clontarf, QLD',
		latitude: '-27.2503945',
		longitude: '153.0808745',
		information: '1 property owned by 1 member: Luke Howarth (1)'
	},
	{
		name: 'Coffs Harbour, NSW',
		latitude: '-30.1732797',
		longitude: '152.998587582102',
		information: '1 property owned by 1 member: Luke Hartsuyker (1)'
	},
	{
		name: 'Colebee, NSW',
		latitude: '-33.7270077',
		longitude: '150.8521783',
		information: '1 property owned by 1 member: Ed Husic (1)'
	},
	{
		name: 'Coleyville, QLD',
		latitude: '-27.8025158',
		longitude: '152.5754801',
		information: '2 properties owned by 1 member: Pauline Hanson (2)'
	},
	{
		name: 'Collaroy, NSW',
		latitude: '-33.7382194',
		longitude: '151.2996618',
		information: '1 property owned by 1 member: Jason Falinski (1)'
	},
	{
		name: 'Como, WA',
		latitude: '-32.0005191',
		longitude: '115.8639977',
		information: '1 property owned by 1 member: Ken Wyatt (1)'
	},
	{
		name: 'Cooks Hill, NSW',
		latitude: '-32.9316667',
		longitude: '151.7677778',
		information: '1 property owned by 1 member: Linda Burney (1)'
	},
	{
		name: 'Coolum Beach, QLD',
		latitude: '-26.5317643',
		longitude: '153.0904467',
		information: '1 property owned by 1 member: Rex Patrick (1)'
	},
	{
		name: 'Copacabana, NSW',
		latitude: '-33.49',
		longitude: '151.4344444',
		information: '2 properties owned by 1 member: Deborah O\'Neill (2)'
	},
	{
		name: 'Cornubia, QLD',
		latitude: '-27.6687965',
		longitude: '153.2014437',
		information: '1 property owned by 1 member: Bert van Manen (1)'
	},
	{
		name: 'Cranbourne, VIC',
		latitude: '-38.09983825',
		longitude: '145.282937771062',
		information: '1 property owned by 1 member: Kelly O\'Dwyer (1)'
	},
	{
		name: 'Crawley, WA',
		latitude: '-31.9785933',
		longitude: '115.8173134',
		information: '1 property owned by 1 member: Julie Bishop (1)'
	},
	{
		name: 'Cronulla, NSW',
		latitude: '-34.0575259',
		longitude: '151.1523851',
		information: '1 property owned by 1 member: David Coleman (1)'
	},
	{
		name: 'Culburra Beach, NSW',
		latitude: '-34.9349',
		longitude: '150.7538',
		information: '1 property owned by 1 member: Ann Sudmalis (1)'
	},
	{
		name: 'Cumberland Park, SA',
		latitude: '-34.9720383',
		longitude: '138.5866928',
		information: '1 property owned by 1 member: Amanda Rishworth (1)'
	},
	{
		name: 'Currambine, WA',
		latitude: '-31.7354623',
		longitude: '115.7456718',
		information: '2 properties owned by 1 member: Ian Goodenough (2)'
	},
	{
		name: 'Daisy Hill, QLD',
		latitude: '-27.643611',
		longitude: '153.1538113',
		information: '1 property owned by 1 member: Jim Chalmers (1)'
	},
	{
		name: 'Dakabin, QLD',
		latitude: '-27.2276653',
		longitude: '152.9848502',
		information: '1 property owned by 1 member: Susan Lamb (1)'
	},
	{
		name: 'Dandenong Ranges, VIC',
		latitude: '-37.85663255',
		longitude: '145.350856035164',
		information: '2 properties owned by 1 member: Jason Wood (2)'
	},
	{
		name: 'Dee Why, NSW',
		latitude: '-33.7536635',
		longitude: '151.2899954',
		information: '1 property owned by 1 member: Lucy Wicks (1)'
	},
	{
		name: 'Deniliquin, NSW',
		latitude: '-35.5302183',
		longitude: '144.9597178',
		information: '3 properties owned by 1 member: Karen Andrews (3)'
	},
	{
		name: 'Dernancourt, SA',
		latitude: '-34.86198',
		longitude: '138.6765806',
		information: '1 property owned by 1 member: Lucy Gichuhi (1)'
	},
	{
		name: 'Devonport, TAS',
		latitude: '-41.1797561',
		longitude: '146.3613011',
		information: '5 properties owned by 3 members: Justine Keay (2), Richard Colbeck (2), Steve Martin (1)'
	},
	{
		name: 'Dolans Bay, NSW',
		latitude: '-34.0647381',
		longitude: '151.1265284',
		information: '1 property owned by 1 member: Scott Morrison (1)'
	},
	{
		name: 'Double Bay, NSW',
		latitude: '-33.8766373',
		longitude: '151.24245',
		information: '1 property owned by 1 member: Kerryn Phelps (1)'
	},
	{
		name: 'Drummoyne, NSW',
		latitude: '-33.8520678',
		longitude: '151.153689',
		information: '1 property owned by 1 member: David Leyonhjelm (1)'
	},
	{
		name: 'Dulwich Hill, NSW',
		latitude: '-33.9045849',
		longitude: '151.1386091',
		information: '2 properties owned by 1 member: Anthony Albanese (2)'
	},
	{
		name: 'Dunsborough, WA',
		latitude: '-33.614656',
		longitude: '115.1065921',
		information: '1 property owned by 1 member: Melissa Price (1)'
	},
	{
		name: 'Durack, QLD',
		latitude: '-27.591662',
		longitude: '152.985997',
		information: '1 property owned by 1 member: Milton Dick (1)'
	},
	{
		name: 'East Geelong, VIC',
		latitude: '-38.1555531',
		longitude: '144.3801967',
		information: '2 properties owned by 1 member: Richard Marles (2)'
	},
	{
		name: 'East Melbourne, VIC',
		latitude: '-37.812498',
		longitude: '144.9858851',
		information: '2 properties owned by 2 members: Clare O\'Neil (1), David Feeney (1)'
	},
	{
		name: 'East Perth, WA',
		latitude: '-31.944139',
		longitude: '115.8770918',
		information: '1 property owned by 1 member: Michaelia Cash (1)'
	},
	{
		name: 'East Toowoomba, QLD',
		latitude: '-27.5608158',
		longitude: '151.9672684',
		information: '1 property owned by 1 member: Barry O\'Sullivan (1)'
	},
	{
		name: 'Eastern Adelaide, SA',
		latitude: '-32.7060195',
		longitude: '26.2950503',
		information: '1 property owned by 1 member: Simon Birmingham (1)'
	},
	{
		name: 'Eastern Suburbs, NSW',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: John Alexander (1)'
	},
	{
		name: 'Eastside Alice Springs, NT',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: Warren Snowdon (1)'
	},
	{
		name: 'Edmonton, QLD',
		latitude: '-17.0175322',
		longitude: '145.7453552',
		information: '1 property owned by 1 member: Stuart Robert (1)'
	},
	{
		name: 'Elizabeth Bay, NSW',
		latitude: '-33.8716908',
		longitude: '151.2282875',
		information: '1 property owned by 1 member: Kerryn Phelps (1)'
	},
	{
		name: 'Elwood, VIC',
		latitude: '-37.8788568',
		longitude: '144.9855487',
		information: '2 properties owned by 2 members: Bridget McKenzie (1), Michael Danby (1)'
	},
	{
		name: 'Fairview Park, SA',
		latitude: '-34.80044',
		longitude: '138.7289629',
		information: '1 property owned by 1 member: David Fawcett (1)'
	},
	{
		name: 'Farrer, ACT',
		latitude: '-35.3766895',
		longitude: '149.1050381',
		information: '1 property owned by 1 member: David Smith (1)'
	},
	{
		name: 'Fingal Head, NSW',
		latitude: '-28.2023671',
		longitude: '153.565526044944',
		information: '1 property owned by 1 member: Justine Elliot (1)'
	},
	{
		name: 'Flaxton, QLD',
		latitude: '-26.6573646',
		longitude: '152.8781989',
		information: '1 property owned by 1 member: James McGrath (1)'
	},
	{
		name: 'Flemington, VIC',
		latitude: '-37.7867587',
		longitude: '144.9193668',
		information: '1 property owned by 1 member: Adam Bandt (1)'
	},
	{
		name: 'Flinders View, QLD',
		latitude: '-27.6497462',
		longitude: '152.7828757',
		information: '1 property owned by 1 member: Shayne Neumann (1)'
	},
	{
		name: 'Flora Hill, VIC',
		latitude: '-36.7781198',
		longitude: '144.2984448',
		information: '1 property owned by 1 member: Lisa Chesters (1)'
	},
	{
		name: 'Floreat, WA',
		latitude: '-31.9392096',
		longitude: '115.7939626',
		information: '2 properties owned by 1 member: Michaelia Cash (2)'
	},
	{
		name: 'Footscray, VIC',
		latitude: '-37.78933525',
		longitude: '144.874128275157',
		information: '2 properties owned by 2 members: Janet Rice (1), Tim Watts (1)'
	},
	{
		name: 'Forbes, NSW',
		latitude: '-33.37877205',
		longitude: '147.953438813101',
		information: '2 properties owned by 1 member: Karen Andrews (2)'
	},
	{
		name: 'Forestville, NSW',
		latitude: '-33.7620891',
		longitude: '151.2150889',
		information: '1 property owned by 1 member: Tony Abbott (1)'
	},
	{
		name: 'Forrest, ACT',
		latitude: '-35.3172087',
		longitude: '149.1248559',
		information: '2 properties owned by 2 members: David Feeney (1), Jim Chalmers (1)'
	},
	{
		name: 'Franklin, TAS',
		latitude: '-43.089559',
		longitude: '147.0108523',
		information: '1 property owned by 1 member: Ann Sudmalis (1)'
	},
	{
		name: 'Fremantle, WA',
		latitude: '-32.0558714',
		longitude: '115.7461693',
		information: '1 property owned by 1 member: Josh Wilson (1)'
	},
	{
		name: 'Fullarton, SA',
		latitude: '-34.9540475',
		longitude: '138.6263553',
		information: '1 property owned by 1 member: Simon Birmingham (1)'
	},
	{
		name: 'Gawler, TAS',
		latitude: '-41.1832114',
		longitude: '146.1602025',
		information: '1 property owned by 1 member: Anne Urquhart (1)'
	},
	{
		name: 'Gilles Plains, SA',
		latitude: '-34.8500456',
		longitude: '138.6590628',
		information: '1 property owned by 1 member: Lucy Gichuhi (1)'
	},
	{
		name: 'Gladstone, QLD',
		latitude: '-23.8431724',
		longitude: '151.256132',
		information: '2 properties owned by 1 member: Ken O\'Dowd (2)'
	},
	{
		name: 'Glenelg, SA',
		latitude: '-34.9803673',
		longitude: '138.5143342',
		information: '1 property owned by 1 member: Stirling Griff (1)'
	},
	{
		name: 'Glenside, SA',
		latitude: '-34.9427375',
		longitude: '138.6337521',
		information: '1 property owned by 1 member: Stirling Griff (1)'
	},
	{
		name: 'Gold Coast, QLD',
		latitude: '-28.0023731',
		longitude: '153.4145987',
		information: '1 property owned by 1 member: Sussan Ley (1)'
	},
	{
		name: 'Goondiwindi, QLD',
		latitude: '-28.5471732',
		longitude: '150.3073801',
		information: '2 properties owned by 1 member: Barry O\'Sullivan (2)'
	},
	{
		name: 'Goulburn, NSW',
		latitude: '-34.7523871',
		longitude: '149.7198009',
		information: '1 property owned by 1 member: Angus Taylor (1)'
	},
	{
		name: 'Grafton, NSW',
		latitude: '-29.69125',
		longitude: '152.9333435',
		information: '3 properties owned by 1 member: Stuart Robert (3)'
	},
	{
		name: 'Grange, SA',
		latitude: '-34.8991361',
		longitude: '138.498079',
		information: '1 property owned by 1 member: Mark Butler (1)'
	},
	{
		name: 'Granville, WA',
		latitude: '40.0678511',
		longitude: '-79.9083814',
		information: '1 property owned by 1 member: Ian Goodenough (1)'
	},
	{
		name: 'Greece',
		latitude: '38.9953683',
		longitude: '21.9877132',
		information: '1 property owned by 1 member: Steve Georganas (1)'
	},
	{
		name: 'Griffith, ACT',
		latitude: '-35.3253499',
		longitude: '149.1371297',
		information: '13 properties owned by 13 members: Amanda Rishworth (1), Ben Morton (1), Brendan O\'Connor (1), Catryna Bilyk (1), Chris Hayes (1), Cory Bernardi (1), David Leyonhjelm (1), Eric Abetz (1), Julie Collins (1), Michelle Landry (1), Milton Dick (1), Rachel Siewert (1), Slade Brockman (1)'
	},
	{
		name: 'Gundagai, NSW',
		latitude: '-34.80940095',
		longitude: '148.108814106774',
		information: '2 properties owned by 1 member: Craig Laundy (2)'
	},
	{
		name: 'Gwabegar, NSW',
		latitude: '-30.6101761',
		longitude: '148.9697847',
		information: '1 property owned by 1 member: Barnaby Joyce (1)'
	},
	{
		name: 'Hallett Cove, SA',
		latitude: '-35.0726467',
		longitude: '138.5110652',
		information: '1 property owned by 1 member: Amanda Rishworth (1)'
	},
	{
		name: 'Halls Head, WA',
		latitude: '-32.5408801',
		longitude: '115.6987381',
		information: '1 property owned by 1 member: Glenn Sterle (1)'
	},
	{
		name: 'Hamilton, VIC',
		latitude: '-37.7421872',
		longitude: '142.021706758093',
		information: '2 properties owned by 1 member: Dan Tehan (2)'
	},
	{
		name: 'Hargraves, NSW',
		latitude: '-32.8175',
		longitude: '149.3752778',
		information: '1 property owned by 1 member: David Leyonhjelm (1)'
	},
	{
		name: 'Harmers Haven, VIC',
		latitude: '-38.656097',
		longitude: '145.5803959',
		information: '1 property owned by 1 member: Ged Kearney (1)'
	},
	{
		name: 'Harvey, WA',
		latitude: '46.3915276',
		longitude: '-118.4688687',
		information: '6 properties owned by 1 member: Nola Marino (6)'
	},
	{
		name: 'Hawthorn, VIC',
		latitude: '-37.8355533',
		longitude: '145.055224565243',
		information: '1 property owned by 1 member: Josh Frydenberg (1)'
	},
	{
		name: 'Higgins, VIC',
		latitude: '-37.96965035',
		longitude: '145.127677542108',
		information: '1 property owned by 1 member: Kelly O\'Dwyer (1)'
	},
	{
		name: 'Hillman, WA',
		latitude: '40.9047858',
		longitude: '-78.8500317',
		information: '1 property owned by 1 member: Mathias Cormann (1)'
	},
	{
		name: 'Hope Island, QLD',
		latitude: '-27.8651137',
		longitude: '153.357731',
		information: '1 property owned by 1 member: Steven Ciobo (1)'
	},
	{
		name: 'Hoppers Crossing, VIC',
		latitude: '-37.8665704',
		longitude: '144.6949625',
		information: '1 property owned by 1 member: Damian Drum (1)'
	},
	{
		name: 'Howard Springs, NT',
		latitude: '-12.4969791',
		longitude: '131.0470011',
		information: '1 property owned by 1 member: Nigel Scullion (1)'
	},
	{
		name: 'Hunter Valley, NSW',
		latitude: '35.73754725',
		longitude: '-78.860115872585',
		information: '1 property owned by 1 member: Malcolm Turnbull (1)'
	},
	{
		name: 'Hunters Hill, NSW',
		latitude: '-33.82986925',
		longitude: '151.136027966137',
		information: '1 property owned by 1 member: Craig Laundy (1)'
	},
	{
		name: 'Illawong, NSW',
		latitude: '-33.9973348',
		longitude: '151.0429726',
		information: '1 property owned by 1 member: Craig Kelly (1)'
	},
	{
		name: 'Indigo Shire, VIC',
		latitude: '-36.3670409',
		longitude: '146.695768565953',
		information: '1 property owned by 1 member: Cathy McGowan (1)'
	},
	{
		name: 'Ingle Farm, SA',
		latitude: '-34.8275823',
		longitude: '138.6454465',
		information: '1 property owned by 1 member: Tony Zappia (1)'
	},
	{
		name: 'Inglewood, WA',
		latitude: '47.7309401',
		longitude: '-122.2304032',
		information: '1 property owned by 1 member: Dean Smith (1)'
	},
	{
		name: 'Ipswich, QLD',
		latitude: '-27.6160135',
		longitude: '152.7608702',
		information: '2 properties owned by 1 member: Stuart Robert (2)'
	},
	{
		name: 'Ivanhoe, VIC',
		latitude: '-37.74993',
		longitude: '145.063827846821',
		information: '2 properties owned by 2 members: Darren Chester (1), Jenny Macklin (1)'
	},
	{
		name: 'Jackeys Marsh, TAS',
		latitude: '-41.6800003',
		longitude: '146.6699982',
		information: '1 property owned by 1 member: Tony Burke (1)'
	},
	{
		name: 'Jamestown, SA',
		latitude: '-33.2074897',
		longitude: '138.6034723',
		information: '1 property owned by 1 member: Rowan Ramsey (1)'
	},
	{
		name: 'Kalgoorlie, WA',
		latitude: '-30.7464139',
		longitude: '121.473223',
		information: '1 property owned by 1 member: Karen Andrews (1)'
	},
	{
		name: 'Kanahooka, NSW',
		latitude: '-34.4976604',
		longitude: '150.8227905',
		information: '1 property owned by 1 member: Sharon Bird (1)'
	},
	{
		name: 'Karabar, NSW',
		latitude: '-35.3759426',
		longitude: '149.2328718',
		information: '1 property owned by 1 member: Mike Kelly (1)'
	},
	{
		name: 'Kardinya, WA',
		latitude: '-32.0660375',
		longitude: '115.8178766',
		information: '1 property owned by 1 member: Glenn Sterle (1)'
	},
	{
		name: 'Karrinyup, WA',
		latitude: '-31.8705761',
		longitude: '115.7787989',
		information: '1 property owned by 1 member: Rachel Siewert (1)'
	},
	{
		name: 'Katanning, WA',
		latitude: '-33.6908682',
		longitude: '117.5551858',
		information: '2 properties owned by 1 member: Rick Wilson (2)'
	},
	{
		name: 'Kedron, QLD',
		latitude: '-27.4051171',
		longitude: '153.0332677',
		information: '1 property owned by 1 member: Wayne Swan (1)'
	},
	{
		name: 'Keilor, VIC',
		latitude: '-37.7113545',
		longitude: '144.8250696',
		information: '1 property owned by 1 member: Brendan O\'Connor (1)'
	},
	{
		name: 'Kellyville, NSW',
		latitude: '-33.7158272',
		longitude: '150.954993',
		information: '1 property owned by 1 member: Alex Hawke (1)'
	},
	{
		name: 'Kelowna, British Columbia, Canada',
		latitude: '49.889326',
		longitude: '-119.498291',
		information: '1 property owned by 1 member: Andrew Wallace (1)'
	},
	{
		name: 'Kennington, VIC',
		latitude: '-36.7720838',
		longitude: '144.3064583',
		information: '1 property owned by 1 member: Lisa Chesters (1)'
	},
	{
		name: 'Kenthurst, NSW',
		latitude: '-33.6436678',
		longitude: '150.9761716',
		information: '1 property owned by 1 member: Michelle Rowland (1)'
	},
	{
		name: 'Kenya',
		latitude: '1.4419683',
		longitude: '38.4313975',
		information: '1 property owned by 1 member: Lucy Gichuhi (1)'
	},
	{
		name: 'Kew, VIC',
		latitude: '-37.8033586',
		longitude: '145.0333285',
		information: '1 property owned by 1 member: Dan Tehan (1)'
	},
	{
		name: 'Kialla, VIC',
		latitude: '-36.4160585',
		longitude: '145.3953615',
		information: '1 property owned by 1 member: Damian Drum (1)'
	},
	{
		name: 'Kilburn, SA',
		latitude: '-34.8596902',
		longitude: '138.5855855',
		information: '1 property owned by 1 member: Alex Gallacher (1)'
	},
	{
		name: 'Kilmore, VIC',
		latitude: '-37.304715',
		longitude: '144.916820891543',
		information: '1 property owned by 1 member: Kevin Andrews (1)'
	},
	{
		name: 'Kimba, SA',
		latitude: '-33.0493267',
		longitude: '136.212120132019',
		information: '1 property owned by 1 member: Rowan Ramsey (1)'
	},
	{
		name: 'Kingaroy, QLD',
		latitude: '-26.5412563',
		longitude: '151.8394231',
		information: '1 property owned by 1 member: Barry O\'Sullivan (1)'
	},
	{
		name: 'Kingston, ACT',
		latitude: '-35.3152303',
		longitude: '149.1465925',
		information: '26 properties owned by 25 members: Brendan O\'Connor (1), Chris Ketter (1), Christian Porter (1), Damian Drum (1), Darren Chester (1), Deborah O\'Neill (1), Don Farrell (1), Doug Cameron (1), Glenn Sterle (2), Helen Polley (1), James Paterson (1), Julian Hill (1), Kate Ellis (1), Keith Pitt (1), Ken Wyatt (1), Louise Pratt (1), Mark Butler (1), Melissa Price (1), Michael McCormack (1), Michelle Rowland (1), Pat Conroy (1), Peter Dutton (1), Sharon Claydon (1), Tanya Plibersek (1), Tim Watts (1)'
	},
	{
		name: 'Kingston, TAS',
		latitude: '-42.9751287',
		longitude: '147.3076379',
		information: '2 properties owned by 1 member: Catryna Bilyk (2)'
	},
	{
		name: 'Kingsville, VIC',
		latitude: '-37.8088622',
		longitude: '144.8794356',
		information: '1 property owned by 1 member: Julian Hill (1)'
	},
	{
		name: 'Kleinton, QLD',
		latitude: '-27.41889',
		longitude: '151.955',
		information: '11 properties owned by 1 member: Barry O\'Sullivan (11)'
	},
	{
		name: 'Klemzig, SA',
		latitude: '-34.878967',
		longitude: '138.6386096',
		information: '1 property owned by 1 member: Simon Birmingham (1)'
	},
	{
		name: 'Kurri Kurri, NSW',
		latitude: '-32.8175039',
		longitude: '151.4833649',
		information: '1 property owned by 1 member: Meryl Swanson (1)'
	},
	{
		name: 'Labrador, QLD',
		latitude: '-27.9427642',
		longitude: '153.3987125',
		information: '1 property owned by 1 member: Pauline Hanson (1)'
	},
	{
		name: 'Lahore, Pakistan',
		latitude: '31.5655908',
		longitude: '74.3141453',
		information: '1 property owned by 1 member: Mehreen Faruqi (1)'
	},
	{
		name: 'Lakes Entrance, VIC',
		latitude: '-37.85612',
		longitude: '148.007024434814',
		information: '2 properties owned by 1 member: Darren Chester (2)'
	},
	{
		name: 'Lammermoor, QLD',
		latitude: '-23.1617187',
		longitude: '150.7676346',
		information: '1 property owned by 1 member: Michelle Landry (1)'
	},
	{
		name: 'Largs Bay, SA',
		latitude: '-34.8266187',
		longitude: '138.4935504',
		information: '1 property owned by 1 member: Tony Pasin (1)'
	},
	{
		name: 'Lathlain, WA',
		latitude: '-31.9678622',
		longitude: '115.9072491',
		information: '1 property owned by 1 member: Sue Lines (1)'
	},
	{
		name: 'Launceston, TAS',
		latitude: '-41.4340813',
		longitude: '147.1373496',
		information: '2 properties owned by 1 member: Helen Polley (2)'
	},
	{
		name: 'Leederville, WA',
		latitude: '-31.9390124',
		longitude: '115.8403245',
		information: '2 properties owned by 1 member: Ian Goodenough (2)'
	},
	{
		name: 'Lemborgan Island Indonesia',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: Linda Reynolds (1)'
	},
	{
		name: 'Leslie Vale, TAS',
		latitude: '-42.9642039',
		longitude: '147.2339752',
		information: '1 property owned by 1 member: Carol Brown (1)'
	},
	{
		name: 'Leumeah, NSW',
		latitude: '-34.0543113',
		longitude: '150.8371354',
		information: '1 property owned by 1 member: Chris Hayes (1)'
	},
	{
		name: 'Lindfield, NSW',
		latitude: '-33.7802907',
		longitude: '151.1595848',
		information: '1 property owned by 1 member: Mike Kelly (1)'
	},
	{
		name: 'Lismore, NSW',
		latitude: '-28.79363905',
		longitude: '153.26708675123',
		information: '2 properties owned by 1 member: Kevin Hogan (2)'
	},
	{
		name: 'Ljubljana, Slovenia',
		latitude: '46.0498146',
		longitude: '14.5067824',
		information: '1 property owned by 1 member: Tanya Plibersek (1)'
	},
	{
		name: 'Longford, TAS',
		latitude: '-41.5936936',
		longitude: '147.1215353',
		information: '1 property owned by 1 member: Ross Hart (1)'
	},
	{
		name: 'Loomberah, NSW',
		latitude: '-31.2316667',
		longitude: '151.0177778',
		information: '1 property owned by 1 member: Barnaby Joyce (1)'
	},
	{
		name: 'Lorne, VIC',
		latitude: '-38.448255',
		longitude: '144.017827501883',
		information: '1 property owned by 1 member: Brendan O\'Connor (1)'
	},
	{
		name: 'Ludmilla, NT',
		latitude: '-12.4254275',
		longitude: '130.851061',
		information: '1 property owned by 1 member: Luke Gosling (1)'
	},
	{
		name: 'Lugarno, NSW',
		latitude: '-33.9823958',
		longitude: '151.0450193',
		information: '1 property owned by 1 member: David Coleman (1)'
	},
	{
		name: 'Lurnea, NSW',
		latitude: '-33.9358333',
		longitude: '150.8972222',
		information: '1 property owned by 1 member: Anne Stanley (1)'
	},
	{
		name: 'Lyneham, ACT',
		latitude: '-35.239801',
		longitude: '149.1307354',
		information: '1 property owned by 1 member: Katy Gallagher (1)'
	},
	{
		name: 'Lyons, ACT',
		latitude: '-35.3405584',
		longitude: '149.0739377',
		information: '1 property owned by 1 member: Dean Smith (1)'
	},
	{
		name: 'Macquarie, ACT',
		latitude: '-35.2511133',
		longitude: '149.0633056',
		information: '2 properties owned by 1 member: Matthew Canavan (2)'
	},
	{
		name: 'Madeley, WA',
		latitude: '-31.8120053',
		longitude: '115.8252784',
		information: '1 property owned by 1 member: Anne Aly (1)'
	},
	{
		name: 'Malanoa, QLD',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: Warren Entsch (1)'
	},
	{
		name: 'Maldon, VIC',
		latitude: '-36.95842',
		longitude: '144.065734438232',
		information: '1 property owned by 1 member: Lisa Chesters (1)'
	},
	{
		name: 'Malvern, VIC',
		latitude: '-37.8617311',
		longitude: '145.039506186968',
		information: '5 properties owned by 3 members: Jane Hume (1), Julia Banks (3), Mark Dreyfus (1)'
	},
	{
		name: 'Mandurah, WA',
		latitude: '-32.5302495',
		longitude: '115.7208782',
		information: '1 property owned by 1 member: Andrew Hastie (1)'
	},
	{
		name: 'Mangerton, NSW',
		latitude: '-34.4327778',
		longitude: '150.8705556',
		information: '1 property owned by 1 member: Sharon Bird (1)'
	},
	{
		name: 'Manly, QLD',
		latitude: '-27.4547329',
		longitude: '153.1849108',
		information: '1 property owned by 1 member: Ross Vasta (1)'
	},
	{
		name: 'Manyana, NSW',
		latitude: '-35.25632',
		longitude: '150.5140404',
		information: '1 property owned by 1 member: Chris Hayes (1)'
	},
	{
		name: 'Marmion, WA',
		latitude: '-31.8415256',
		longitude: '115.7564401',
		information: '1 property owned by 1 member: Melissa Price (1)'
	},
	{
		name: 'Maroochydore, QLD',
		latitude: '-26.6556523',
		longitude: '153.0946684',
		information: '2 properties owned by 2 members: Ted O\'Brien (1), Wayne Swan (1)'
	},
	{
		name: 'Marrickville, NSW',
		latitude: '-33.9103854',
		longitude: '151.1556908',
		information: '4 properties owned by 2 members: Anthony Albanese (2), Linda Burney (2)'
	},
	{
		name: 'Maryborough, QLD',
		latitude: '-25.537583',
		longitude: '152.7019182',
		information: '1 property owned by 1 member: Stuart Robert (1)'
	},
	{
		name: 'Matraville, NSW',
		latitude: '-33.9639325',
		longitude: '151.2334198',
		information: '1 property owned by 1 member: Matt Thistlethwaite (1)'
	},
	{
		name: 'Mawson Lakes, SA',
		latitude: '-34.8104796',
		longitude: '138.6111791',
		information: '1 property owned by 1 member: Lucy Gichuhi (1)'
	},
	{
		name: 'Maylands, SA',
		latitude: '-34.9112777',
		longitude: '138.6367026',
		information: '1 property owned by 1 member: Rowan Ramsey (1)'
	},
	{
		name: 'Maylands, WA',
		latitude: '-31.9345383',
		longitude: '115.8985445',
		information: '1 property owned by 1 member: Louise Pratt (1)'
	},
	{
		name: 'Meander Valley, TAS',
		latitude: '-41.6518214',
		longitude: '146.6116374',
		information: '1 property owned by 1 member: Tony Burke (1)'
	},
	{
		name: 'Mediterranean',
		latitude: '30.4424524',
		longitude: '-84.2704052313567',
		information: '1 property owned by 1 member: Kevin Hogan (1)'
	},
	{
		name: 'Melbourne, VIC',
		latitude: '-37.8142176',
		longitude: '144.9631608',
		information: '7 properties owned by 5 members: Damian Drum (1), Derryn Hinch (2), Ged Kearney (1), Michael McCormack (2), Tim Wilson (1)'
	},
	{
		name: 'Mildura District, VIC',
		latitude: '-35.128015',
		longitude: '142.137194135791',
		information: '2 properties owned by 1 member: Andrew Broad (2)'
	},
	{
		name: 'Mile End, SA',
		latitude: '-34.9263377',
		longitude: '138.5711113',
		information: '1 property owned by 1 member: Steve Georganas (1)'
	},
	{
		name: 'Millswood, SA',
		latitude: '-34.9572425',
		longitude: '138.5894966',
		information: '1 property owned by 1 member: Penny Wong (1)'
	},
	{
		name: 'Mindarie, WA',
		latitude: '-31.6897332',
		longitude: '115.7091824',
		information: '1 property owned by 1 member: Ian Goodenough (1)'
	},
	{
		name: 'Moana, SA',
		latitude: '-35.1974742',
		longitude: '138.4730721',
		information: '1 property owned by 1 member: Tony Zappia (1)'
	},
	{
		name: 'Mooloolaba, ACT',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: Andrew Laming (1)'
	},
	{
		name: 'Moonee Ponds, VIC',
		latitude: '-37.765575',
		longitude: '144.9212864',
		information: '1 property owned by 1 member: Bill Shorten (1)'
	},
	{
		name: 'Mooroobool, QLD',
		latitude: '-16.9355237',
		longitude: '145.7351414',
		information: '1 property owned by 1 member: Warren Entsch (1)'
	},
	{
		name: 'Moorooka, QLD',
		latitude: '-27.5357999',
		longitude: '153.0201543',
		information: '1 property owned by 1 member: Graham Perrett (1)'
	},
	{
		name: 'Moreton Island, QLD',
		latitude: '-27.19264975',
		longitude: '153.394317964255',
		information: '1 property owned by 1 member: Peter Dutton (1)'
	},
	{
		name: 'Morley, WA',
		latitude: '-31.8934573',
		longitude: '115.9030854',
		information: '3 properties owned by 1 member: Peter Georgiou (3)'
	},
	{
		name: 'Morningside, QLD',
		latitude: '-27.4684656',
		longitude: '153.0731165',
		information: '2 properties owned by 1 member: Terri Butler (2)'
	},
	{
		name: 'Mornington Peninsula, VIC',
		latitude: '-38.243315',
		longitude: '145.088543163317',
		information: '3 properties owned by 3 members: Greg Hunt (1), Julia Banks (1), Tim Wilson (1)'
	},
	{
		name: 'Morrell Park, Broome, WA',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: Patrick Dodson (1)'
	},
	{
		name: 'Mount Eliza, VIC',
		latitude: '-37.61665',
		longitude: '146.64822',
		information: '1 property owned by 1 member: Chris Crewther (1)'
	},
	{
		name: 'Mount Gambier, SA',
		latitude: '-37.8246698',
		longitude: '140.782006762411',
		information: '4 properties owned by 1 member: Tony Pasin (4)'
	},
	{
		name: 'Mount Lawley, WA',
		latitude: '-15.72378',
		longitude: '127.4283',
		information: '3 properties owned by 3 members: Matt Keogh (1), Patrick Gorman (1), Tim Hammond (1)'
	},
	{
		name: 'Mt Martha, VIC',
		latitude: '-38.2969881',
		longitude: '145.0032419',
		information: '1 property owned by 1 member: Greg Hunt (1)'
	},
	{
		name: 'Mudgeeraba, QLD',
		latitude: '-28.0804969',
		longitude: '153.3576679',
		information: '1 property owned by 1 member: Karen Andrews (1)'
	},
	{
		name: 'Mulgoa, NSW',
		latitude: '-33.8371562',
		longitude: '150.6504013',
		information: '2 properties owned by 1 member: Marise Payne (2)'
	},
	{
		name: 'Murrumbeena, VIC',
		latitude: '-37.8968653',
		longitude: '145.0703808',
		information: '1 property owned by 1 member: Peter Khalil (1)'
	},
	{
		name: 'Murwillumbah, NSW',
		latitude: '-28.3267617',
		longitude: '153.3971541',
		information: '1 property owned by 1 member: Justine Elliot (1)'
	},
	{
		name: 'Myalup, WA',
		latitude: '-33.1035221',
		longitude: '115.6973637',
		information: '2 properties owned by 1 member: Nola Marino (2)'
	},
	{
		name: 'Nairobi, Kenya',
		latitude: '-1.2832533',
		longitude: '36.8172449',
		information: '1 property owned by 1 member: Lucy Gichuhi (1)'
	},
	{
		name: 'Narrabri, NSW',
		latitude: '-30.3278407',
		longitude: '149.557154183225',
		information: '1 property owned by 1 member: Mark Coulton (1)'
	},
	{
		name: 'Narrabundah, ACT',
		latitude: '-35.3356919',
		longitude: '149.1492215',
		information: '5 properties owned by 5 members: Ann Sudmalis (1), Jane Prentice (1), Linda Reynolds (1), Mike Freelander (1), Warren Snowdon (1)'
	},
	{
		name: 'Neika, TAS',
		latitude: '-42.9500132',
		longitude: '147.2331834',
		information: '1 property owned by 1 member: Andrew Wilkie (1)'
	},
	{
		name: 'Nerang, QLD',
		latitude: '-27.9896566',
		longitude: '153.3365942',
		information: '1 property owned by 1 member: Stuart Robert (1)'
	},
	{
		name: 'Neutral Bay, NSW',
		latitude: '-33.8342887',
		longitude: '151.2182049',
		information: '1 property owned by 1 member: Concetta Fierravanti-Wells (1)'
	},
	{
		name: 'New Acton, ACT',
		latitude: '-35.2852323',
		longitude: '149.1129681',
		information: '1 property owned by 1 member: Mark Coulton (1)'
	},
	{
		name: 'New Farm, QLD',
		latitude: '-27.4654745',
		longitude: '153.0461335',
		information: '1 property owned by 1 member: Chris Ketter (1)'
	},
	{
		name: 'New York, NY, USA',
		latitude: '40.7308619',
		longitude: '-73.9871558',
		information: '1 property owned by 1 member: Malcolm Turnbull (1)'
	},
	{
		name: 'Newcastle, NSW',
		latitude: '-32.9272881',
		longitude: '151.7812534',
		information: '3 properties owned by 2 members: John Williams (1), Sharon Claydon (2)'
	},
	{
		name: 'Newport, NSW',
		latitude: '-33.6591061',
		longitude: '151.3164331',
		information: '1 property owned by 1 member: Concetta Fierravanti-Wells (1)'
	},
	{
		name: 'Newstead, QLD',
		latitude: '-27.4453279',
		longitude: '153.0444763',
		information: '1 property owned by 1 member: Ted O\'Brien (1)'
	},
	{
		name: 'Newtown, NSW',
		latitude: '-33.8961132',
		longitude: '151.1801893',
		information: '1 property owned by 1 member: Mike Freelander (1)'
	},
	{
		name: 'Noosa, QLD',
		latitude: '-26.44723845',
		longitude: '153.091478483293',
		information: '1 property owned by 1 member: David Fawcett (1)'
	},
	{
		name: 'Norah Head, NSW',
		latitude: '-33.2816667',
		longitude: '151.5677778',
		information: '1 property owned by 1 member: Emma McBride (1)'
	},
	{
		name: 'North Adelaide, SA',
		latitude: '-34.9085015',
		longitude: '138.5953502',
		information: '1 property owned by 1 member: Nick Champion (1)'
	},
	{
		name: 'North Arm Cove, NSW',
		latitude: '-32.6245441',
		longitude: '152.04728594185',
		information: '2 properties owned by 1 member: Mitch Fifield (2)'
	},
	{
		name: 'North Fitzroy, VIC',
		latitude: '-37.8010382',
		longitude: '144.9792611',
		information: '1 property owned by 1 member: Michael Danby (1)'
	},
	{
		name: 'North Lake, WA',
		latitude: '41.21289605',
		longitude: '-74.9525034976819',
		information: '1 property owned by 1 member: Slade Brockman (1)'
	},
	{
		name: 'North Melbourne, VIC',
		latitude: '-37.7985747',
		longitude: '144.9451741',
		information: '2 properties owned by 2 members: Gavin Marshall (1), Richard Di Natale (1)'
	},
	{
		name: 'North Parramatta, NSW',
		latitude: '-33.7952747',
		longitude: '151.0116649',
		information: '1 property owned by 1 member: Julie Owens (1)'
	},
	{
		name: 'North Sydney, NSW',
		latitude: '-33.8354519',
		longitude: '151.2083011',
		information: '1 property owned by 1 member: Jason Falinski (1)'
	},
	{
		name: 'Northcote, VIC',
		latitude: '-37.77308',
		longitude: '145.010324547758',
		information: '3 properties owned by 3 members: David Feeney (1), Maria Vamvakinou (1), Mitch Fifield (1)'
	},
	{
		name: 'Northern Beaches, NSW',
		latitude: '-33.69790935',
		longitude: '151.243633513',
		information: '1 property owned by 1 member: John Alexander (1)'
	},
	{
		name: 'Norwood, SA',
		latitude: '-34.9213467',
		longitude: '138.6320869',
		information: '1 property owned by 1 member: Kate Ellis (1)'
	},
	{
		name: 'Norwood, TAS',
		latitude: '-41.4624358',
		longitude: '147.1806679',
		information: '1 property owned by 1 member: Ross Hart (1)'
	},
	{
		name: 'Nubeena, TAS',
		latitude: '-43.0956631',
		longitude: '147.7422624',
		information: '1 property owned by 1 member: Nick McKim (1)'
	},
	{
		name: 'Nulkaba, NSW',
		latitude: '-32.798329',
		longitude: '151.3511084',
		information: '1 property owned by 1 member: Joel Fitzgibbon (1)'
	},
	{
		name: 'Nunderi, NSW',
		latitude: '-28.3226712',
		longitude: '153.4633068',
		information: '1 property owned by 1 member: Justine Elliot (1)'
	},
	{
		name: 'OB Flat, SA',
		latitude: '-37.88148515',
		longitude: '140.777026052997',
		information: '1 property owned by 1 member: Tony Pasin (1)'
	},
	{
		name: 'O\'Connor, ACT',
		latitude: '-35.2566001',
		longitude: '149.1155972',
		information: '1 property owned by 1 member: Dan Tehan (1)'
	},
	{
		name: 'Ombersley, VIC',
		latitude: '-38.21595',
		longitude: '143.823206897091',
		information: '1 property owned by 1 member: Sarah Henderson (1)'
	},
	{
		name: 'Orange, NSW',
		latitude: '-33.32924175',
		longitude: '149.10814660899',
		information: '2 properties owned by 1 member: Andrew Gee (2)'
	},
	{
		name: 'Osmington, WA',
		latitude: '-33.90631',
		longitude: '115.2198',
		information: '1 property owned by 1 member: Madeleine King (1)'
	},
	{
		name: 'Paddington, NSW',
		latitude: '-33.8841572',
		longitude: '151.2272766',
		information: '3 properties owned by 2 members: Malcolm Turnbull (2), Paul Fletcher (1)'
	},
	{
		name: 'Padstow Heights, NSW',
		latitude: '-33.9704029',
		longitude: '151.0330262',
		information: '1 property owned by 1 member: Jason Clare (1)'
	},
	{
		name: 'Pakenham, VIC',
		latitude: '-38.06823555',
		longitude: '145.478781133362',
		information: '1 property owned by 1 member: Russell Broadbent (1)'
	},
	{
		name: 'Palm Beach, QLD',
		latitude: '-28.1194259',
		longitude: '153.4702686',
		information: '3 properties owned by 3 members: Karen Andrews (1), Peter Dutton (1), Shayne Neumann (1)'
	},
	{
		name: 'Palm Cove, QLD',
		latitude: '-16.7444744',
		longitude: '145.6710279',
		information: '1 property owned by 1 member: Russell Broadbent (1)'
	},
	{
		name: 'Pascoe Vale, VIC',
		latitude: '-37.7211326',
		longitude: '144.945553288195',
		information: '1 property owned by 1 member: Peter Khalil (1)'
	},
	{
		name: 'Penna, TAS',
		latitude: '-42.77906',
		longitude: '147.52269',
		information: '1 property owned by 1 member: Brian Mitchell (1)'
	},
	{
		name: 'Pennant Hills, NSW',
		latitude: '-33.7384663',
		longitude: '151.0716639',
		information: '1 property owned by 1 member: Julian Leeser (1)'
	},
	{
		name: 'Perth, WA',
		latitude: '-31.9527121',
		longitude: '115.8604796',
		information: '1 property owned by 1 member: Michael Keenan (1)'
	},
	{
		name: 'Philip Island, VIC',
		latitude: '-38.458396',
		longitude: '145.2778561',
		information: '1 property owned by 1 member: Russell Broadbent (1)'
	},
	{
		name: 'Phillip, ACT',
		latitude: '-35.3470436',
		longitude: '149.091009',
		information: '1 property owned by 1 member: Lisa Singh (1)'
	},
	{
		name: 'Pinkenba, QLD',
		latitude: '-27.4221287',
		longitude: '153.1197445',
		information: '1 property owned by 1 member: Luke Howarth (1)'
	},
	{
		name: 'Point Piper, NSW',
		latitude: '-33.8676276',
		longitude: '151.2515727',
		information: '1 property owned by 1 member: Malcolm Turnbull (1)'
	},
	{
		name: 'Pooraka, SA',
		latitude: '-34.8257023',
		longitude: '138.6228595',
		information: '3 properties owned by 1 member: Tony Zappia (3)'
	},
	{
		name: 'Port Macquarie, NSW',
		latitude: '-31.4299499',
		longitude: '152.9103525',
		information: '17 properties owned by 2 members: David Gillespie (16), Mehreen Faruqi (1)'
	},
	{
		name: 'Port Melbourne, VIC',
		latitude: '-37.8333613',
		longitude: '144.9219203',
		information: '1 property owned by 1 member: Julian Hill (1)'
	},
	{
		name: 'Port Phillip, VIC',
		latitude: '-38.06125',
		longitude: '144.82465',
		information: '1 property owned by 1 member: Tim Wilson (1)'
	},
	{
		name: 'Potts Point, NSW',
		latitude: '-33.8670797',
		longitude: '151.2259967',
		information: '5 properties owned by 3 members: Kerryn Phelps (3), Malcolm Turnbull (1), Michelle Rowland (1)'
	},
	{
		name: 'Prince Henry Heights, Toowoomba, QLD',
		latitude: '-27.554007',
		longitude: '151.9886475',
		information: '2 properties owned by 1 member: John McVeigh (2)'
	},
	{
		name: 'Pt Neill, SA',
		latitude: '34.8217417',
		longitude: '-97.5125291',
		information: '1 property owned by 1 member: Rowan Ramsey (1)'
	},
	{
		name: 'Pullenvale, QLD',
		latitude: '-27.5257099',
		longitude: '152.8851317',
		information: '2 properties owned by 2 members: Jane Prentice (1), Larissa Waters (1)'
	},
	{
		name: 'Punchbowl, NSW',
		latitude: '-33.928717',
		longitude: '151.0522591',
		information: '1 property owned by 1 member: Tony Burke (1)'
	},
	{
		name: 'Putney, NSW',
		latitude: '-33.826067',
		longitude: '151.1064224',
		information: '1 property owned by 1 member: John Alexander (1)'
	},
	{
		name: 'Quarry Hill, Bendigo, VIC',
		latitude: '-36.777466',
		longitude: '144.2804166',
		information: '1 property owned by 1 member: Damian Drum (1)'
	},
	{
		name: 'Queanbeyan, NSW',
		latitude: '-35.3538856',
		longitude: '149.2323111',
		information: '3 properties owned by 3 members: Dan Tehan (1), Richard Marles (1), Warren Entsch (1)'
	},
	{
		name: 'Randwick, NSW',
		latitude: '-33.914121',
		longitude: '151.2410046',
		information: '1 property owned by 1 member: David Gillespie (1)'
	},
	{
		name: 'Red Gully, WA',
		latitude: '-33.7966845',
		longitude: '115.0479865',
		information: '1 property owned by 1 member: Ian Goodenough (1)'
	},
	{
		name: 'Red Hill, ACT',
		latitude: '-35.3237387',
		longitude: '149.1128172',
		information: '2 properties owned by 2 members: Joel Fitzgibbon (1), Julie Bishop (1)'
	},
	{
		name: 'Redfern, NSW',
		latitude: '-33.8931044',
		longitude: '151.2040292',
		information: '2 properties owned by 2 members: Jenny McAllister (1), Sue Lines (1)'
	},
	{
		name: 'Reid, ACT',
		latitude: '-35.2825977',
		longitude: '149.1412207',
		information: '2 properties owned by 2 members: Lisa Chesters (1), Mike Kelly (1)'
	},
	{
		name: 'Renmark, SA',
		latitude: '-34.1743516',
		longitude: '140.7468863',
		information: '2 properties owned by 1 member: Anne Ruston (2)'
	},
	{
		name: 'Reservoir, VIC',
		latitude: '-36.5986096',
		longitude: '144.6780052',
		information: '1 property owned by 1 member: Julian Hill (1)'
	},
	{
		name: 'Rob Roy, Inverell, NSW',
		latitude: '-29.7127',
		longitude: '151.004',
		information: '1 property owned by 1 member: John Williams (1)'
	},
	{
		name: 'Robe, SA',
		latitude: '-37.18636435',
		longitude: '139.995172420092',
		information: '1 property owned by 1 member: Christopher Pyne (1)'
	},
	{
		name: 'Rose Bay, TAS',
		latitude: '-42.8591515',
		longitude: '147.354788',
		information: '1 property owned by 1 member: Julie Collins (1)'
	},
	{
		name: 'Roseberry, NSW',
		latitude: '-28.4816666',
		longitude: '152.9177777',
		information: '1 property owned by 1 member: Tanya Plibersek (1)'
	},
	{
		name: 'Rosedale, VIC',
		latitude: '-38.1511747',
		longitude: '146.7878527',
		information: '1 property owned by 1 member: Kevin Andrews (1)'
	},
	{
		name: 'Roseville, NSW',
		latitude: '-33.7826456',
		longitude: '151.1827257',
		information: '1 property owned by 1 member: Paul Fletcher (1)'
	},
	{
		name: 'Royalla, NSW',
		latitude: '-35.515',
		longitude: '149.1511111',
		information: '1 property owned by 1 member: Jim Molan (1)'
	},
	{
		name: 'Sandy Bay, TAS',
		latitude: '-42.897129',
		longitude: '147.3273528',
		information: '3 properties owned by 2 members: David Bushby (1), Lisa Singh (2)'
	},
	{
		name: 'Sassafrass, VIC',
		latitude: '-38.3854698',
		longitude: '146.6517279',
		information: '1 property owned by 1 member: Jason Wood (1)'
	},
	{
		name: 'Scarborough, WA',
		latitude: '-31.8959841',
		longitude: '115.7592114',
		information: '1 property owned by 1 member: Rick Wilson (1)'
	},
	{
		name: 'Scotland Island, NSW',
		latitude: '-33.6397464',
		longitude: '151.2911746',
		information: '1 property owned by 1 member: Kristina Keneally (1)'
	},
	{
		name: 'Scullion, ACT',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: Ben Morton (1)'
	},
	{
		name: 'Seddon, VIC',
		latitude: '-37.8067725',
		longitude: '144.8915967',
		information: '1 property owned by 1 member: David Feeney (1)'
	},
	{
		name: 'Shoalwater Bay, WA',
		latitude: '-32.28783',
		longitude: '115.69828',
		information: '1 property owned by 1 member: Madeleine King (1)'
	},
	{
		name: 'Shorncliffe, QLD',
		latitude: '-27.3260995',
		longitude: '153.08185',
		information: '1 property owned by 1 member: Luke Howarth (1)'
	},
	{
		name: 'Silver Ridge, QLD',
		latitude: '-27.605278',
		longitude: '152.0208282',
		information: '4 properties owned by 1 member: Barry O\'Sullivan (4)'
	},
	{
		name: 'Sisters Beach, TAS',
		latitude: '-40.9177814',
		longitude: '145.5614872',
		information: '1 property owned by 1 member: Janet Rice (1)'
	},
	{
		name: 'Smithfield, NSW',
		latitude: '-33.8478215',
		longitude: '150.9408736',
		information: '1 property owned by 1 member: Chris Bowen (1)'
	},
	{
		name: 'South Hobart, TAS',
		latitude: '-42.8960515',
		longitude: '147.3092219',
		information: '3 properties owned by 2 members: Andrew Wilkie (1), Catryna Bilyk (2)'
	},
	{
		name: 'South Perth, WA',
		latitude: '-31.9781791',
		longitude: '115.8668993',
		information: '3 properties owned by 1 member: Ken Wyatt (3)'
	},
	{
		name: 'South Yarra, VIC',
		latitude: '-37.8377695',
		longitude: '144.9918537',
		information: '2 properties owned by 2 members: Kelly O\'Dwyer (1), Mark Dreyfus (1)'
	},
	{
		name: 'Southern Highlands, NSW',
		latitude: '-6.176434',
		longitude: '144.263015',
		information: '1 property owned by 1 member: John Alexander (1)'
	},
	{
		name: 'Southport, QLD',
		latitude: '-27.9687807',
		longitude: '153.4066696',
		information: '1 property owned by 1 member: Sussan Ley (1)'
	},
	{
		name: 'Spearwood, WA',
		latitude: '-32.0979276',
		longitude: '115.7816402',
		information: '1 property owned by 1 member: Josh Wilson (1)'
	},
	{
		name: 'Speers Point, NSW',
		latitude: '-32.9633333',
		longitude: '151.6277778',
		information: '1 property owned by 1 member: Pat Conroy (1)'
	},
	{
		name: 'Spring Farm, SA',
		latitude: '-33.84849585',
		longitude: '138.636257167563',
		information: '1 property owned by 1 member: Don Farrell (1)'
	},
	{
		name: 'Spring Hill, QLD',
		latitude: '-23.8772998',
		longitude: '147.9907853',
		information: '1 property owned by 1 member: Peter Dutton (1)'
	},
	{
		name: 'Springfield, NSW',
		latitude: '-34.9060344',
		longitude: '149.6714343',
		information: '1 property owned by 1 member: Lucy Wicks (1)'
	},
	{
		name: 'St Kilda, VIC',
		latitude: '-37.8638261',
		longitude: '144.981637',
		information: '2 properties owned by 2 members: Tim Hammond (1), Tony Zappia (1)'
	},
	{
		name: 'Stanley, TAS',
		latitude: '-40.7609355',
		longitude: '145.2916055',
		information: '1 property owned by 1 member: Deborah O\'Neill (1)'
	},
	{
		name: 'Sunrise Beach, QLD',
		latitude: '-26.4161989',
		longitude: '153.1077071',
		information: '1 property owned by 1 member: Milton Dick (1)'
	},
	{
		name: 'Sunshine, VIC',
		latitude: '-37.7893319',
		longitude: '144.8342699',
		information: '1 property owned by 1 member: Maria Vamvakinou (1)'
	},
	{
		name: 'Surfers Paradise, QLD',
		latitude: '-27.9989899',
		longitude: '153.42398',
		information: '3 properties owned by 2 members: Jonathon Duniam (2), Steven Ciobo (1)'
	},
	{
		name: 'Surry Hills, NSW',
		latitude: '-33.8845123',
		longitude: '151.2100301',
		information: '1 property owned by 1 member: Kerryn Phelps (1)'
	},
	{
		name: 'Sydney, NSW',
		latitude: '-33.8548157',
		longitude: '151.2164539',
		information: '2 properties owned by 2 members: Andrew Gee (1), Angus Taylor (1)'
	},
	{
		name: 'Terrigal, NSW',
		latitude: '-33.4483315',
		longitude: '151.4427717',
		information: '1 property owned by 1 member: Lucy Wicks (1)'
	},
	{
		name: 'The Entrance, NSW',
		latitude: '-33.3483343',
		longitude: '151.5011108',
		information: '1 property owned by 1 member: Emma McBride (1)'
	},
	{
		name: 'Thornlands, QLD',
		latitude: '-27.558201',
		longitude: '153.2666265',
		information: '5 properties owned by 1 member: Andrew Laming (5)'
	},
	{
		name: 'Tinderbox, TAS',
		latitude: '-43.0575303',
		longitude: '147.3310661',
		information: '1 property owned by 1 member: Nick McKim (1)'
	},
	{
		name: 'Toowoomba, QLD',
		latitude: '-27.5610193',
		longitude: '151.953351',
		information: '12 properties owned by 2 members: Barry O\'Sullivan (11), Julie Collins (1)'
	},
	{
		name: 'Townsville, QLD',
		latitude: '-19.2569391',
		longitude: '146.8239537',
		information: '2 properties owned by 2 members: Ian Macdonald (1), Peter Dutton (1)'
	},
	{
		name: 'Tranmere, TAS',
		latitude: '-42.9139865',
		longitude: '147.4194031',
		information: '1 property owned by 1 member: Doug Cameron (1)'
	},
	{
		name: 'Trevallyn, TAS',
		latitude: '-41.4362794',
		longitude: '147.1160493',
		information: '1 property owned by 1 member: Peter Whish-Wilson (1)'
	},
	{
		name: 'Turner, ACT',
		latitude: '-35.2688704',
		longitude: '149.1245771',
		information: '4 properties owned by 4 members: Dan Tehan (1), Michaelia Cash (1), Nigel Scullion (1), Penny Wong (1)'
	},
	{
		name: 'Ulverstone, TAS',
		latitude: '-41.1571818',
		longitude: '146.1705057',
		information: '1 property owned by 1 member: Anne Urquhart (1)'
	},
	{
		name: 'Umbria, Italy',
		latitude: '42.965916',
		longitude: '12.490236',
		information: '1 property owned by 1 member: Concetta Fierravanti-Wells (1)'
	},
	{
		name: 'Unley, SA',
		latitude: '-34.95420795',
		longitude: '138.604202411024',
		information: '1 property owned by 1 member: Stirling Griff (1)'
	},
	{
		name: 'Urana Shire, NSW',
		latitude: '-34.0533639',
		longitude: '151.0289428',
		information: '2 properties owned by 1 member: Cathy McGowan (2)'
	},
	{
		name: 'USA',
		latitude: '39.7837304',
		longitude: '-100.4458825',
		information: '1 property owned by 1 member: Ben Morton (1)'
	},
	{
		name: 'Vermont South, VIC',
		latitude: '-37.854386',
		longitude: '145.1878065',
		information: '1 property owned by 1 member: Alan Tudge (1)'
	},
	{
		name: 'Victoria',
		latitude: '-36.5986096',
		longitude: '144.6780052',
		information: '1 property owned by 1 member: Ross Vasta (1)'
	},
	{
		name: 'Victoria Park, WA',
		latitude: '47.4558162',
		longitude: '-122.209136109392',
		information: '2 properties owned by 2 members: Ken Wyatt (1), Sue Lines (1)'
	},
	{
		name: 'WA',
		latitude: '47.2868352',
		longitude: '-120.2126139',
		information: '2 properties owned by 1 member: Steve Irons (2)'
	},
	{
		name: 'Wagga Wagga, NSW',
		latitude: '-35.115',
		longitude: '147.3677778',
		information: '1 property owned by 1 member: Michael McCormack (1)'
	},
	{
		name: 'Walkerville, SA',
		latitude: '-34.8944851',
		longitude: '138.611870667813',
		information: '1 property owned by 1 member: Kevin Andrews (1)'
	},
	{
		name: 'Wantirna South, VIC',
		latitude: '-37.8737902',
		longitude: '145.2217475',
		information: '1 property owned by 1 member: Alan Tudge (1)'
	},
	{
		name: 'Warialda, NSW',
		latitude: '-29.5409092',
		longitude: '150.5772371',
		information: '2 properties owned by 1 member: Mark Coulton (2)'
	},
	{
		name: 'Warragul, VIC',
		latitude: '-38.1588674',
		longitude: '145.933629',
		information: '1 property owned by 1 member: Russell Broadbent (1)'
	},
	{
		name: 'Warrnambool, VIC',
		latitude: '-38.369875',
		longitude: '142.486467125823',
		information: '1 property owned by 1 member: Dan Tehan (1)'
	},
	{
		name: 'Warwick, QLD',
		latitude: '-28.2165303',
		longitude: '152.031184',
		information: '3 properties owned by 2 members: David Littleproud (2), James McGrath (1)'
	},
	{
		name: 'Waterfall Gully, SA',
		latitude: '-34.96179185',
		longitude: '138.674301951075',
		information: '1 property owned by 1 member: Don Farrell (1)'
	},
	{
		name: 'Wattle Park, SA',
		latitude: '-34.9272356',
		longitude: '138.678485',
		information: '1 property owned by 1 member: Christopher Pyne (1)'
	},
	{
		name: 'Wavchope, NSW',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: David Gillespie (1)'
	},
	{
		name: 'Wavell Heights, QLD',
		latitude: '-27.3958794',
		longitude: '153.048943',
		information: '2 properties owned by 1 member: Anthony Chisholm (2)'
	},
	{
		name: 'Wayville, SA',
		latitude: '-34.9448147',
		longitude: '138.5914429',
		information: '1 property owned by 1 member: Kate Ellis (1)'
	},
	{
		name: 'Wemberley, WA',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: Christian Porter (1)'
	},
	{
		name: 'Werribee, VIC',
		latitude: '-37.9078479',
		longitude: '144.642096914458',
		information: '1 property owned by 1 member: Joanne Ryan (1)'
	},
	{
		name: 'West Hobart, TAS',
		latitude: '-42.881714',
		longitude: '147.3114092',
		information: '2 properties owned by 2 members: Carol Brown (1), Nick McKim (1)'
	},
	{
		name: 'Whitfield, QLD',
		latitude: '-16.9036475',
		longitude: '145.7256116',
		information: '1 property owned by 1 member: Warren Entsch (1)'
	},
	{
		name: 'Whittlesea, VIC',
		latitude: '-37.5121301',
		longitude: '145.1177321',
		information: '1 property owned by 1 member: Rob Mitchell (1)'
	},
	{
		name: 'Whitton, NSW',
		latitude: '-34.5167846',
		longitude: '146.1846926',
		information: '1 property owned by 1 member: Linda Burney (1)'
	},
	{
		name: 'Whyalla, SA',
		latitude: '-33.04552225',
		longitude: '137.429261711244',
		information: '3 properties owned by 1 member: Lucy Gichuhi (3)'
	},
	{
		name: 'Willoughby, NSW',
		latitude: '-33.80159565',
		longitude: '151.183651575556',
		information: '1 property owned by 1 member: Dan Tehan (1)'
	},
	{
		name: 'Wilson, WA',
		latitude: '40.3148114',
		longitude: '-79.9828087',
		information: '1 property owned by 1 member: Anne Aly (1)'
	},
	{
		name: 'Windsor, QLD',
		latitude: '-27.4378754',
		longitude: '153.0315133',
		information: '1 property owned by 1 member: Trevor Evans (1)'
	},
	{
		name: 'Winmalee, NSW',
		latitude: '-33.6799328',
		longitude: '150.6082625',
		information: '1 property owned by 1 member: Susan Templeman (1)'
	},
	{
		name: 'Wodonga Shire, VIC',
		latitude: '-36.3130173',
		longitude: '146.8411984',
		information: '1 property owned by 1 member: Cathy McGowan (1)'
	},
	{
		name: 'Wollongong, NSW',
		latitude: '-34.4243941',
		longitude: '150.89385',
		information: '1 property owned by 1 member: Stephen Jones (1)'
	},
	{
		name: 'Wombarra, NSW',
		latitude: '-34.2769444',
		longitude: '150.9508333',
		information: '1 property owned by 1 member: Mike Freelander (1)'
	},
	{
		name: 'Woodgate, QLD',
		latitude: '-25.083334',
		longitude: '152.5166626',
		information: '1 property owned by 1 member: Keith Pitt (1)'
	},
	{
		name: 'Woodville Park, SA',
		latitude: '-34.8824134',
		longitude: '138.5463783',
		information: '1 property owned by 1 member: Mark Butler (1)'
	},
	{
		name: 'Woolloomooloo, NSW',
		latitude: '-33.8718758',
		longitude: '151.2192218',
		information: '1 property owned by 1 member: Jason Falinski (1)'
	},
	{
		name: 'Woolooware, NSW',
		latitude: '-34.0448411',
		longitude: '151.1401717',
		information: '1 property owned by 1 member: Rex Patrick (1)'
	},
	{
		name: 'Wurtulla, QLD',
		latitude: '-26.7568243',
		longitude: '153.1256125',
		information: '1 property owned by 1 member: Andrew Wallace (1)'
	},
	{
		name: 'Yallingup, WA',
		latitude: '-33.6395258',
		longitude: '115.0259595',
		information: '1 property owned by 1 member: Tim Hammond (1)'
	},
	{
		name: 'Yanchep, WA',
		latitude: '-31.549942',
		longitude: '115.6256848',
		information: '1 property owned by 1 member: Christian Porter (1)'
	},
	{
		name: 'Yarralumla, ACT',
		latitude: '-35.3040411',
		longitude: '149.0986347',
		information: '3 properties owned by 3 members: Gai Brodtmann (1), Ian Goodenough (1), Joel Fitzgibbon (1)'
	},
	{
		name: 'Yeppoon, QLD',
		latitude: '-23.1348035',
		longitude: '150.7436625',
		information: '2 properties owned by 2 members: Matthew Canavan (1), Michelle Landry (1)'
	},
	{
		name: 'Yorkeys Knob, QLD',
		latitude: '-16.802776',
		longitude: '145.720825',
		information: '1 property owned by 1 member: Warren Entsch (1)'
	},
	{
		name: 'Yorky\'s Knob, QLD',
		latitude: '0',
		longitude: '0',
		information: '1 property owned by 1 member: Deborah O\'Neill (1)'
	},
];
