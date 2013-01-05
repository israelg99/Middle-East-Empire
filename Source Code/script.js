
/* Main JS / jQuery file for MEE */

$(document).ready(function () {
	
	/* Countries JSON Variables */
	var turkey = {
		'name'      : 'turkey',
		'people'    : 74724269,
		'money'     : 778089000,
		'army'      : {
			'troops'    : 393000,
			'tanks'     : 4333,
			'jets'      : 509,
			'artillery' : 2432,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var syria = {
		'name'      : 'syria',
		'people' : 22530746,
		'money'  : 59957000,
		'army'   : {
			'troops'    : 200000,
			'tanks'     : 4750,
			'jets'      : 650,
			'artillery' : 2640,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var iraq = {
		'name'      : 'iraq',
		'people' : 31129225,
		'money'  : 144214000,
		'army'   : {
			'troops'    : 206000,
			'tanks'     : 2149,
			'jets'      : 236,
			'artillery' : 1000,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var iran = {
		'name'      : 'iran',
		'people' : 75149669,
		'money'  : 482445000,
		'army'   : {
			'troops'    : 350000,
			'tanks'     : 1800,
			'jets'      : 296,
			'artillery' : 3196,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var israel = {
		'name'      : 'israel',
		'people' : 7933200,
		'money'  : 242897000,
		'army'   : {
			'troops'    : 104000,
			'tanks'     : 3650,
			'jets'      : 605,
			'artillery' : 1300,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 40 },
		{	'name' : 'syria', 'relation'  : 50},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 40},
		{	'name' : 'lebanon', 'relation' : 60},
		{	'name' : 'jordan', 'relation' : 60},
		{	'name' : 'saudi', 'relation'  : 60},
		{	'name' : 'qatar', 'relation'  : 70},
		{	'name' : 'uae', 'relation'    : 50},
		{	'name' : 'omen', 'relation'   : 60},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 40},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var lebanon = {
		'name'      : 'lebanon',
		'people' : 4224000,
		'money'  : 39039000,
		'army'   : {
			'troops'    : 72100,
			'tanks'     : 393,
			'jets'      : 5,
			'artillery' : 400,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var jordan = {
		'name'      : 'jordan',
		'people' : 6508271,
		'money'  : 29233000,
		'army'   : {
			'troops'    : 85300,
			'tanks'     : 779,
			'jets'      : 134,
			'artillery' : 247,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var saudi = {
		'name'      : 'saudi',
		'people' : 28376355,
		'money'  : 651652000,
		'army'   : {
			'troops'    : 201500,
			'tanks'     : 1055,
			'jets'      : 446,
			'artillery' : 408,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 0
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var qatar = {
		'name'      : 'qatar',
		'people' : 1853563,
		'money'  : 173847000,
		'army'   : {
			'troops'    : 12330,
			'tanks'     : 30,
			'jets'      : 36,
			'artillery' : 40,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var uae = {
		'name'      : 'uae',
		'people' : 8264070,
		'money'  : 360136000,
		'army'   : {
			'troops'    : 65000,
			'tanks'     : 469,
			'jets'      : 148,
			'artillery' : 295,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var omen = {
		'name'      : 'oman',
		'people' : 2773479,
		'money'  : 71888000,
		'army'   : {
			'troops'    : 150000,
			'tanks'     : 1110,
			'jets'      : 222,
			'artillery' : 518,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var yemen = {
		'name'      : 'yemen',
		'people' : 25130000,
		'money'  : 33675000,
		'army'   : {
			'troops'    : 43000,
			'tanks'     : 117,
			'jets'      : 39,
			'artillery' : 198,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 70},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 70},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 80},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'egypt', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	var egypt = {
		'name'      : 'egypt',
		'people' : 90375000,
		'money'  : 252458000,
		'army'   : {
			'troops'    : 450000,
			'tanks'     : 3855,
			'jets'      : 579,
			'artillery' : 6439,
			'antiair'   : 4096,
			'missiles'  : 100,
			'warhead' : {
				'regular'  : 1,
				'chem'     : 1,
				'bio'      : 1,
				'nuclear'  : 1
			}
		},
		'relations' : [
		{   'name' : 'turkey', 'relation' : 70 },
		{	'name' : 'syria', 'relation'  : 10},
		{	'name' : 'iraq', 'relation'   : 70},
		{	'name' : 'iran', 'relation'   : 50},
		{	'name' : 'israel', 'relation' : 70},
		{	'name' : 'lebanon', 'relation' : 70},
		{	'name' : 'jordan', 'relation' : 80},
		{	'name' : 'saudi', 'relation'  : 20},
		{	'name' : 'qatar', 'relation'  : 80},
		{	'name' : 'uae', 'relation'    : 70},
		{	'name' : 'omen', 'relation'   : 70},
		{	'name' : 'yemen', 'relation'  : 70},
		],
		'supply'  : {
			'usa'    : 4,
			'eu'     : 3,
			'china'  : 3,
			'russia' : 3
		}
	};
	
	var supply = {
		'tank'      : 1000000,
		'artillery' : 1100000,
		'jet'       : 3000000,
		'antiair'   : 1000000,
		'missile'   : 1200000
	}
	
	/* Wrappers in a JSON Variable */
	var wrapper = {
		"choose" : $('body #choose-wrapper'),
		"game"   : $('body #game-wrapper'),
		"lose"   : $('body #lose-wrapper')
	}
	
	/* First Page, Choose Country : */
	
	if(wrapper.choose.css('display') == 'block') { // If the first page, choose country is visible, then:
		var choose_select = $('body #choose-wrapper #content #options select');
		var country_place = $('body #choose-wrapper #content #country');
		var button_go = $('body #choose-wrapper #content #submit');
		var select_country;
		
		choose_select.change(function() { // When the user choose something with the selector:
			select_country = choose_select.val();
			
			if(select_country == "select") { // And if this is a select option, it resets the html.
				country_place.html("");
				button_go.hide(); 
			} 
			else { // If this is not a select option, Then it show the flag and a submit button.
				country_place.html('<img src="country/' + select_country + '.GIF" alt="country" height="200" width="300">');
				button_go.show();
			}
		});

		button_go.click(function() { // If the submit button is clicked.
			wrapper.choose.hide(); // The choose page is now unvisible because this command adds to the css display:none;
			wrapper.game.show(); // The game page in now visible because this command adds to the css display:block;
			
			switch (select_country) { // Checks what country the user choose, And applying it to a variable.
				case 'turkey' :
				var country = turkey;
				break;
				
				case 'syria' :
				var country = syria;
				break;
				
				case 'iraq' :
				var country = iraq;
				break;
				
				case 'iran' :
				var country = iran;
				break;
				
				case 'israel' :
				var country = israel;
				break;
				
				case 'lebanon' :
				var country = lebanon;
				break;
				
				case 'jordan' :
				var country = jordan;
				break;
				
				case 'saudi' :
				var country = saudi;
				break;
				
				case 'qatar' :
				var country = qatar;
				break;
				
				case 'uae' :
				var country = uae;
				break;
				
				case 'omen' :
				var country = omen;
				break;
				
				case 'yemen' :
				var country = yemen;
				break;
				
				case 'egypt' :
				var country = egypt;
				break;
			}
			
			gameon(country); // Game-On function 'starts' the game. ( It is all in the submit event, Couldn't find a better idea ).
		});
	}
	
	/* First Page, Choose Country : DONE ! */
	
	/* Game Page, The Game : */
	
	function gameon(country) { // The Game function, It takes as perameter the country that the player has choosed.
		var info_desc = $('body #game-wrapper #info #desc');
		var date = {
			'year'  : 2012,
			'month' : 1
		};
		var select_country = choose_select.val();
		var isCommit = false;
		
		// Adding general info..
		UpdateGeneralInfo(country, date);
		
		// Adding battlefield info...
		UpdateArmyStatus(country);
		
		// Adding options to select country to commit action on..
		UpdateBattlefieldSelection(country);
		
		// Buy Weapons Page :
		WeaponsUpdate(country);
		
		// Buy Weapons Info:
		UpdateBuyWeapons(country, supply);
		
		// Relation Page
		RelationUpdate(country);
		
		// Realations Buttons Events :
		// Reco.. Buttons is Clicked :
		$('body').on('click', '.reco', function() {
			var c_reco = $(this).parent('div').attr('id');
			for(var i = 0; i < country.relations.length; i++) {
				if(country.relations[i].name == c_reco) {
					var newrelation = country.relations[i].relation + 30;
					if (confirm('It cost : 15,000,000 and your relation with ' + FirstCapitalLetter(country.relations[i].name) + ' Will be : ' + newrelation + '.')) {
						if(country.money - 15000000 > 0) {
							country.money -= 15000000;
							country.relations[i].relation = newrelation;
							UpdateGeneralInfo(country, date);
							RelationUpdate(country);
							UpdateBattlefieldSelection(country);
							CheckWar(country);
							UpdateBuyWeapons(country, supply);
						} else { alert('Not Enough Money!'); }
					}
				}
			}
		});
		
		// Conflict Button is Clicked :
		$('body').on('click', '.conf', function() {
			var c_conf = $(this).parent('div').attr('id');
			for(var i = 0; i < country.relations.length; i++) {
				if(country.relations[i].name == c_conf) {
					var newrelation = country.relations[i].relation - 30;
					if (confirm('There is not cost for this kind of action, But your relation with ' + FirstCapitalLetter(country.relations[i].name) + ' Will be : ' + newrelation + '.')) {
						country.relations[i].relation = newrelation;
						UpdateGeneralInfo(country, date);
						RelationUpdate(country);
						UpdateBattlefieldSelection(country);
					}
				}
			}
		});
		
		// Peace Button is Clicked :
		$('body').on('click', '.peace', function() {
			var c_peace = $(this).parent('div').attr('id');
			for(var i = 0; i < country.relations.length; i++) {
				if(country.relations[i].name == c_peace) {
					var newrelation = 80;
					if (confirm('It cost : 20,000,000 and ' + FirstCapitalLetter(country.relations[i].name) + ' Will not attack you!')) {
						if(country.money - 20000000 > 0) {
							country.money -= 20000000;
							country.relations[i].relation = newrelation;
							UpdateGeneralInfo(country, date);
							RelationUpdate(country);
							UpdateBattlefieldSelection(country);
							UpdateBuyWeapons(country, supply);
						} else { alert('Not Enough Money!'); }
					}
				}
			}
		});
		
		// Alliance Button is Clicked :
		$('body').on('click', '.alli', function() {
			var c_alli = $(this).parent('div').attr('id');
			for(var i = 0; i < country.relations.length; i++) {
				if(country.relations[i].name == c_alli) {
					var newrelation = country.relations[i].relation = 100;
					if (confirm('It cost : 37,000,000 and ' + FirstCapitalLetter(country.relations[i].name) + ' Will pay to you 10,000,000 whenever you pass a turn!')) {
						if(country.money - 37000000 > 0) {
							country.money -= 37000000;
							country.relations[i].relation = newrelation;
							UpdateGeneralInfo(country, date);
							RelationUpdate(country);
							UpdateBattlefieldSelection(country);
							UpdateBuyWeapons(country, supply);
						} else { alert('Not Enough Money!'); }
					}
				}
			}
		});
		
		//The Pay Buttons is Clicked :
		$('body').on('click', '.pay', function() {
			var c_pay = $(this).parent('div').attr('id');
			for(var i = 0; i < country.relations.length; i++) {
				if(country.relations[i].name == c_pay) {
					if (confirm('It cost : 5,000,000 and you will pay this to ' + FirstCapitalLetter(country.relations[i].name) + ', But any changes with the relation will not occur for this action.')) {
						if(country.money - 5000000 > 0) {
							country.money -= 5000000;
							UpdateGeneralInfo(country, date);
							RelationUpdate(country);
							UpdateBuyWeapons(country, supply);
							var payToC = CheckCountry(c_pay);
							payToC.money += 5000000;
							SetCountry(c_pay, payToC);
						} else { alert('Not Enough Money!'); }
					}
				}
			}
		});
		//The War Buttons is Clicked :
		$('body').on('click', '.war', function() {
			var c_war = $(this).parent('div').attr('id');
			for(var i = 0; i < country.relations.length; i++) {
				if(country.relations[i].name == c_war) {
					var newrelation = 0;
					if (confirm('There is not cost for this kind of action, But ' + FirstCapitalLetter(country.relations[i].name) + ' Will have war with you and, Beware!')) {
						country.relations[i].relation = newrelation;
						UpdateGeneralInfo(country, date);
						RelationUpdate(country);
						UpdateBattlefieldSelection(country);
						CheckWar(country);
					}
				}
			}
		});
		
		// The Menu Script...
		$('body #game-wrapper #menu li a').click(function() { // If the menu is clicked...
			var link = $(this).attr("href"); // link = the href of the link the player has clicked, example: #battlefield, #news...
			if(link == '#turn') { PassTurn(country, date);} else {
				if($(link).css('display') == 'none') { // Check if the content is not already displayed.
					/* Content Show */
					$('body #game-wrapper #content div').hide(); // Hide all the content.
					$(link).show(); // Showing new content. with the link href that is also a id of the content.
					$(link).find('div').show(); // Showing the content inside the div.
					/* Menu Active Color */
					$('body #game-wrapper #menu li a').removeClass('menuActive'); // Resetting the active menu color.
					$(this).addClass('menuActive'); // Adding the active menu color.
				}
			}
		});
		
		// News :
		$('body #game-wrapper #content #news').html('<span style="font-size:18px">No News Available - Pass a turn..</span>')
		
		// Buy Weapons Page :
		
		// Buy Weapon Menu Script:
		$('body #game-wrapper #content #weapons table #usa th a').click(function() {
			$('body #game-wrapper #content #weapons table').hide();
			$('body #game-wrapper #content #weapons #title input').show();
			$('body #game-wrapper #content #weapons #usa table').show();
		});
		$('body #game-wrapper #content #weapons table #europe th a').click(function() {
			$('body #game-wrapper #content #weapons table').hide();
			$('body #game-wrapper #content #weapons #title input').show();
			$('body #game-wrapper #content #weapons #europe table').show();
		});
		$('body #game-wrapper #content #weapons table #russia th a').click(function() {
			$('body #game-wrapper #content #weapons table').hide();
			$('body #game-wrapper #content #weapons #title input').show();
			$('body #game-wrapper #content #weapons #russia table').show();
		});
		$('body #game-wrapper #content #weapons table #china th a').click(function() {
			$('body #game-wrapper #content #weapons table').hide();
			$('body #game-wrapper #content #weapons #title input').show();
			$('body #game-wrapper #content #weapons #china table').show();
		});
		$('body #game-wrapper #content #weapons #title input').click(function() {
			$('body #game-wrapper #content #weapons #title input').hide();
			$('body #game-wrapper #content #weapons .supply table').hide();
			$('body #game-wrapper #content #weapons > table').show();
		});
		
		$('body').on('click', '.buy', function() {
			var parent = $(this).parent('div');
			var weapon = parent.attr('id');
			var much = parseInt(parent.children('#text').val());
			parent.children('#text').val('');
			if(!much) { alert('Writr Number Please!'); } else {
				switch(weapon) {
					case 'tank':
					var weaponPrice = supply.tank * much;
					if(Math.floor(country.money / weaponPrice) <= 0) {
						alert('Not Enough Money!');
					} else {
						country.money -= weaponPrice;
						country.army.tanks += much;
						UpdateArmyStatus(country);
						UpdateGeneralInfo(country, date);
						UpdateBuyWeapons(country, supply);
					}
					break;
					
					case 'artillery':
					var weaponPrice = supply.artillery * much;
					if(Math.floor(country.money / weaponPrice) <= 0) {
						alert('Not Enough Money!');
					} else {
						country.money -= weaponPrice;
						country.army.artillery += much;
						UpdateArmyStatus(country);
						UpdateGeneralInfo(country, date);
						UpdateBuyWeapons(country, supply);
					}
					break;
					
					case 'antiair':
					var weaponPrice = supply.antiair * much;
					if(Math.floor(country.money / weaponPrice) <= 0) {
						alert('Not Enough Money!');
					} else {
						country.money -= weaponPrice;
						country.army.antiair += much;
						UpdateArmyStatus(country);
						UpdateGeneralInfo(country, date);
						UpdateBuyWeapons(country, supply);
					}
					break;
					
					case 'jet':
					var weaponPrice = supply.jet * much;
					if(Math.floor(country.money / weaponPrice) <= 0) {
						alert('Not Enough Money!');
					} else {
						country.money -= weaponPrice;
						country.army.jets += much;
						UpdateArmyStatus(country);
						UpdateGeneralInfo(country, date);
						UpdateBuyWeapons(country, supply);
					}
					break;
					
					case 'missiles':
					var weaponPrice = supply.missile * much;
					if(Math.floor(country.money / weaponPrice) <= 0) {
						alert('Not Enough Money!');
					} else {
						country.money -= weaponPrice;
						country.army.missiles += much;
						UpdateArmyStatus(country);
						UpdateGeneralInfo(country, date);
						UpdateBuyWeapons(country, supply);
					}
					break;
				}
			}
		});
		
		// Commit Actions!
		$('body #game-wrapper #content #battlefield #actions table tr #submit div input').click(function() {
			var tr = $(this).parent('div').parent('#submit').parent('tr');
			var kind = $(this).parent('div').attr('id');
			var choose = FirstLowerLetter(tr.children('#choose').children('select').val());
			if(choose != 'select') {
				switch(kind) {
					case 'alert':
					country = ChangeRelation(choose, 0, country);
					RelationUpdate(country);
					CheckWar(country);
					isCommit = true;
					break;
						
					case 'border':
					if(country.army.troops > 20000) {
						country = ChangeRelation(choose, 0, country);
						RelationUpdate(country);
						CheckWar(country);
						isCommit = true;
					}
					break;
						
					case 'civilian':
					if(country.army.jets > 25) {
						var enemy = CheckCountry(choose);
						var antiair = parseInt(enemy.army.antiair / 150);
						country.army.jets -= antiair;
						var hits = 25 - antiair;
						if(hits > 0) {
							enemy.people -= hits * 100;
							if(enemy.people < 0) { enemy.people = 0; }
							if((hits * 100) > 1000) {
								country = ChangeRelation(choose, 0, country);
								RelationUpdate(country);
								CheckWar(country);
							}
							SetCountry(enemy);
							alert('Jets Destroyes : ' + antiair + ' Enemy Losed ' + addCommas(hits * 100) + ' Civilians!');
						}
						else { alert('All of your 25 Jets Destroyed!'); }
						UpdateArmyStatus(country);
						isCommit = true;
					}
					else { alert('Not Enough Jets!'); }
					break;
						
					case 'indus':
					if(country.army.jets > 25) {
						var enemy = CheckCountry(choose);
						var antiair = parseInt(enemy.army.antiair / 150);
						country.army.jets -= antiair;
						var hits = 25 - antiair;
						if(hits > 0) {
							enemy.money -= hits * 8000;
							if(enemy.money < 0) { enemy.money = 0; }
							if(hits * 8000 > 150000) { 
								country = ChangeRelation(choose, 0, country);
								RelationUpdate(country);
								CheckWar(country);
							}
							SetCountry(enemy);
							alert('Jets Destroyes : ' + antiair + ' Enemy Losed ' + addCommas(hits * 8000) + ' Money!');
						}
						else { alert('All of your 25 Jets Destroyed!'); }
						UpdateArmyStatus(country);
						isCommit = true;
					}
					else { alert('Not Enough Jets!'); }
					break;
						
					case 'military':
					if(country.army.jets > 75) {
						var enemy = CheckCountry(choose);
						var antiair = parseInt(enemy.army.antiair / 150);
						country.army.jets -= antiair;
						var hits = 75 - antiair;
						if(hits > 0) {
							if(enemy.army.troops > hits * 100) { enemy.army.troops -= hits * 100; }
							else { enemy.army.troops = 0; }
							if(enemy.army.tanks > hits) { enemy.army.tanks -= hits; }
							else { enemy.army.tanks = 0; }
							if(enemy.army.antiair > hits * 5) { enemy.army.antiair -= hits * 5; }
							else { enemy.army.antiair = 0; }
							if(hits > 40) {
								country = ChangeRelation(choose, 0, country);
								RelationUpdate(country);
								CheckWar(country);
							}
							SetCountry(enemy);
							alert('Jets Destroyes : ' + antiair + ' Enemy Losed ' + addCommas(hits * 1000) + ' Troops!' + ' Enemy Losed ' + addCommas(hits) + ' Tanks! ' + ' Enemy Losed ' + addCommas(hits * 5) + ' Anti-Air Missiles! ');
						}
						else { alert('All of your 75 Jets Destroyed!'); }
						UpdateArmyStatus(country);
						isCommit = true;
					}
					else { alert('Not Enough Jets!'); }
					break;
						
					case 'research':
					if(country.army.jets > 75) {
						var enemy = CheckCountry(choose);
						var antiair = parseInt(enemy.army.antiair / 150);
						country.army.jets -= antiair;
						var hits = 75 - antiair;
						if(hits > 0) {
							enemy.money -= hits * 15000;
							if(enemy.money < 0) { enemy.money = 0; }
							if(hits > 40) {
								country = ChangeRelation(choose, 0, country);
								RelationUpdate(country);
								CheckWar(country);
							}
							SetCountry(enemy);
							alert('Jets Destroyes : ' + addCommas(antiair) + ' Enemy Losed ' + addCommas(hits * 15000) + ' Money! ');
						}
						else { alert('All of your 75 Jets Destroyed!'); }
						UpdateArmyStatus(country);
						isCommit = true;
					}
					else { alert('Not Enough Jets!'); }
					break;
					
					case 'missile':
					if(country.army.missiles > 1) {
						isCommit = true;
						var type = tr.children('#missle').children('form').children('input:radio:checked').val();
						var much = tr.children('#missle').children('input').val();
						console.log(much);
						var enemy = CheckCountry(choose);
						var warhead = false;
						if(much && type) {
							if(country.army.missiles >= much) {
								if(type == 'regular') {
									if(country.army.warhead.regular == 1) {
										country.army.missiles -= much;
										var hits = much * 1000;
										enemy.people -= hits;
										if(enemy.people < 0) { enemy.people = 0; }
										SetCountry(enemy);
										warhead = true;
									}
									else { var warhead = false; alert('You Didnt research this warhead!'); }
								}
								else if(type == 'chemical') {
									if(country.army.warhead.chem == 1) {
										country.army.missiles -= much;
										var hits = much * 10000;
										enemy.people -= hits;
										if(enemy.people < 0) { enemy.people = 0; }
										SetCountry(enemy);
										warhead = true;
									}
									else { var warhead = false; alert('You Didnt research this warhead!'); }
								}
								else if(type == 'biological') {
									if(country.army.warhead.bio == 1) {
									country.army.missiles -= much;
										var hits = much * 50000;
										enemy.people -= hits;
										if(enemy.people < 0) { enemy.people = 0; }
										SetCountry(enemy);
										warhead = true;
									}
									else { var warhead = false; alert('You Didnt research this warhead!'); }
								}
								else if(type == 'nuclear') {
									if(country.army.warhead.nuclear == 1) {
										country.army.missiles -= much;
										var hits = much * 100000;
										enemy.people -= hits;
										if(enemy.people < 0) { enemy.people = 0; }
										SetCountry(enemy);
										warhead = true;
									}
									else { var warhead = false; alert('You Didnt research this warhead!'); }
									}
							} else { alert('Not enough missiles!'); }
						} else { alert('Choose a Warhead and type a Quantity!'); }
						
						if(warhead) {
							if(hits > 10000) { country.supply.usa = 0; country.supply.eu = 0; country.supply.china = 0; country.supply.russia = 0; alert('People Died : ' + addCommas(hits) + ' ! And no country will sell to you weapons!'); }
							else { alert('People Died : ' + addCommas(hits) + ' !'); }
							country = ChangeRelation(choose, 0, country);
							RelationUpdate(country);
							CheckWar(country);
							UpdateBuyWeapons(country, supply);
							UpdateArmyStatus(country);
						}
							
					}
					else { alert('You Dont have any misslies!'); }
					break;
				}
			}
		});
		
		// Wars in Battlefield Page 
		CheckWar(country);
		
		$('body').on('keyup', '.forceM', function() {
			var thisVal = removeCommas($(this).val());
			if(thisVal) {
				$(this).val(addCommas(thisVal));
			}
		});
		
		$('body').on('keydown', '.forceM', function(e) {
			if(e.keyCode != 8) {
				e.keyCode = String.fromCharCode( e.keyCode );
				var regex = /[0-9]|\./;
				if( !regex.test(e.keyCode) ) {
					e.returnValue = false;
					if(e.preventDefault) e.preventDefault();
				}
			}
		});
		
		$('body').on('click', '#send_army', function() {
			var sendB = $(this);
			var warTR = sendB.parent('th').parent('tr');
			var forcesM = warTR.parent('tbody').children('#forcesM');
			var troopsVal = removeCommas(warTR.children('#troops').children('input').val());
			var tanksVal = removeCommas(warTR.children('#tanks').children('input').val());
			var artVal = removeCommas(warTR.children('#art').children('input').val());
			if(troopsVal != "") {
				if(country.army.troops - troopsVal >= 0) {
					var addForce = removeCommas(forcesM.children('#troopsM').html());
					if(addForce != "") { addForce = parseInt(removeCommas(forcesM.children('#troopsM').html())); }
					forcesM.children('#troopsM').html(addCommas(parseInt(troopsVal) + addForce));
					warTR.children('#troops').children('input').val('');
					country.army.troops -= troopsVal;
				} else { alert('Not Enough Army!'); warTR.children('#troops').children('input').val(''); }
			}
			if(tanksVal != "") {
				if(country.army.tanks - tanksVal >= 0) {
					var addForce = removeCommas(forcesM.children('#tanksM').html());
					if(addForce != "") { addForce = parseInt(removeCommas(forcesM.children('#tanksM').html())); }
					forcesM.children('#tanksM').html(addCommas(parseInt(tanksVal) + addForce));
					warTR.children('#tanks').children('input').val('');
					country.army.tanks -= tanksVal;
				} else { alert('Not Enough Army!'); warTR.children('#tanks').children('input').val(''); }
			}
			if(artVal != "") {
				if(country.army.artillery - artVal >= 0) {
					var addForce = removeCommas(forcesM.children('#artM').html());
					if(addForce != "") { addForce = parseInt(removeCommas(forcesM.children('#artM').html())); }
					forcesM.children('#artM').html(addCommas(parseInt(artVal) + addForce));
					warTR.children('#art').children('input').val('');
					country.army.artillery -= artVal;
				} else { alert('Not Enough Army!'); warTR.children('#art').children('input').val(''); }
			}
			UpdateArmyStatus(country);
		});
	}
	
	// Pass Turn :
	function PassTurn(country, date) {
	
		$('body #game-wrapper #content #news').html('');
		
		// Update Date :
		if(date.month == 12) {
			date.year ++;
			date.month = 1;
		} else { date.month ++; }
	
		// Money :
		// Tax from people in country :
		country.money += country.people * 2;
		
		// Supply Country help with money :
		var supplyLvl = new Array();
		supplyLvl[0] = country.supply.usa;
		supplyLvl[1] = country.supply.eu;
		supplyLvl[2] = country.supply.china;
		supplyLvl[3] = country.supply.russia;
		for(var i = 0; i < supplyLvl.length; i++) {
			switch(supplyLvl[i]) {
				case 1:
					country.money += 10000000
				break;
				
				case 2:
					country.money += 20000000
				break;
				
				case 3:
					country.money += 30000000
				break;
				
				case 4:
					country.money += 40000000
				break;
			}
		}
		
		// Give some army :
		country.army.troops += 1000;
		country.army.tanks += 50;
		country.army.artillery += 50;
		
		// UPDATE All Countries :
		var countries = new Array();
		countries[0]  = turkey;
		countries[1]  = syria;
		countries[2]  = iraq;
		countries[3]  = iran;
		countries[4]  = israel;
		countries[5]  = lebanon;
		countries[6]  = jordan;
		countries[7]  = saudi;
		countries[8]  = qatar;
		countries[9]  = uae;
		countries[10] = omen;
		countries[11] = yemen;
		countries[12] = egypt;
		for(var i = 0; i < countries.length; i++) {
			if(countries[i].name == country.name) { continue; } else {
				countries[i].money += countries[i].people * 1;
				countries[i].troops += 1000;
				var money = parseInt(countries[i].money / 1.5);
				var tanksM = parseInt(money / 2 / 1000000);
				var artM = parseInt(money / 2 / 1100000);
				var tanksG = parseInt(money / 2 % 1000000);
				var artG = parseInt(money / 2 % 1100000);
				if( tanksM > 0 && artM > 0) {
					countries[i].army.tanks += tanksM;
					countries[i].army.artillery += artM;
					countries[i].money = money - (tanksG + artG);
				}
			}
		}
		turkey   = countries[0];
		syria    = countries[1];
		iraq     = countries[2];
		iran     = countries[3];
		israel   = countries[4];
		lebanon  = countries[5];
		jordan   = countries[6];
		saudi    = countries[7];
		qatar    = countries[8];
		uae      = countries[9];
		omen     = countries[10];
		yemen    = countries[11];
		egypt    = countries[12];
		
		// War System :
		for(var i = 0; i < country.relations.length; i++) {
			if(country.relations[i].relation == 0) {
				var tableWar = $('body #game-wrapper #content #battlefield #war').children('#' + country.relations[i].name);
				var enemyC = CheckCountry(tableWar.attr('id'));
				var NumOfTroops = parseInt(removeCommas(tableWar.children('tbody').children('#forcesM').children('#troopsM').html()));
				var NumOfTanks = parseInt(removeCommas(tableWar.children('tbody').children('#forcesM').children('#tanksM').html()));
				var NumOfArt = parseInt(removeCommas(tableWar.children('tbody').children('#forcesM').children('#artM').html()));
				var points = 0;
				var rounds = 0;
				
				if(enemyC.army.troops - NumOfTroops < 5000) {
					points++;
				}
				if(enemyC.army.tanks - NumOfTanks < 500) {
					points++;
				}
				if(enemyC.army.artillery - NumOfArt < 400) {
					points++;
				}
				if(points == 0) {
					wrapper.game.hide();
					wrapper.lose.show();
				}
				else if(points == 3) {
					$('body #game-wrapper #content #news').append('<div id="war_news">' +
																  '<div id="header_news">' +
																  '<div id="countryI"><img src="country/' + country.name + '.GIF" alt="country" height="100px" width="150px"></div>' +
																  '<div id="vsI"><img src="assets/vs.png" alt="vs" height="100px" width="80px" </div>' +
																  '<div id="enemyI"><img src="country/' + country.relations[i].name + '.GIF" alt="country" height="100" width="150"></div>' +
																  '</div>' +
																  '<div id="sum">You Won The War!</div>' +
																  '</div>');
					country.money += enemyC.money;
					country.people += enemyC.people;
					country.army.troops += enemyC.army.troops + NumOfTroops;
					country.army.tanks += enemyC.army.tanks + NumOfTanks;
					country.army.artillery += enemyC.army.artillery + NumOfArt;
					ChangeRelation(enemyC.name, -1, country);
				}
				
				else {
				$('body #game-wrapper #content #news').append('<div id="war_news">' +
															  '<div id="header_news">' +
															  '<div id="countryI"><img src="country/' + country.name + '.GIF" alt="country" height="100px" width="150px"></div>' +
															  '<div id="vsI"><img src="assets/vs.png" alt="vs" height="100px" width="80px" </div>' +
															  '<div id="enemyI"><img src="country/' + country.relations[i].name + '.GIF" alt="country" height="100" width="150"></div>' +
															  '</div>' +
															  '<div id="sum">' + points * 30 + '%</div>' +
															  '</div>'); }
			}	
		}
		
		ChangePage('#news');
		
		UpdateGeneralInfo(country, date);
		UpdateArmyStatus(country);
		UpdateBuyWeapons(country, supply);
		RelationUpdate(country);
		CheckWar(country);
	}
	
	//Functions:
	
	function UpdateGeneralInfo(country, date) {
		// Adding general info..
		$('body #game-wrapper #info #image').html('<img src="country/' + select_country + '.GIF" alt="country" height="100" width="180">'); // Applying info, image.
		$('body #game-wrapper #info #desc #date span').html(date.month + '/' + date.year); // Applying info, date.
		$('body #game-wrapper #info #desc #people span').html(addCommas(country.people)); // Applying info, population.
		$('body #game-wrapper #info #desc #money span').html(addCommas(country.money)); // Applying info, money.
	}
	
	function UpdateArmyStatus(country) {
		var battle_status = $('body #game-wrapper #content #battlefield #status table #number');
		battle_status.children('#troops').html(addCommas((country.army.troops)));
		battle_status.children('#tanks').html(addCommas((country.army.tanks)));
		battle_status.children('#jets').html(addCommas((country.army.jets)));
		battle_status.children('#artillery').html(addCommas((country.army.artillery)));
		battle_status.children('#antiair').html(addCommas((country.army.antiair)));
		battle_status.children('#missiles').html(addCommas((country.army.missiles)));
	}
	
	function CheckWar(country) {
		var tableTroops = '';
		var tableTanks = '';
		var tableArt = '';
		$('body #game-wrapper #content #battlefield #war #war_title').html('');
		for(var i = 0; i < country.relations.length; i++) {
			tableTroops = '';
			tableTanks = '';
			tableArt = '';
			if(country.relations[i].relation == 0) {
				$('body #game-wrapper #content #battlefield #war table').each(function() {
					var tableCountry = $(this).attr('id');
					if(tableCountry == country.relations[i].name) {
						tableTroops = $(this).children('tbody').children('#forcesM').children('#troopsM').html();
						tableTanks = $(this).children('tbody').children('#forcesM').children('#tanksM').html();
						tableArt = $(this).children('tbody').children('#forcesM').children('#artM').html();
						console.log('if work! ' + $(this).attr('id') + ' Troops : ' + tableTroops);
						$(this).remove();
					}
				});
				$('body #game-wrapper #content #battlefield #war #war_title').html('War:');
				$('body #game-wrapper #content #battlefield #war').append('<table border="1px" id="' + country.relations[i].name + '"><tr>' +
																		  '<th><img alt="Country" src="country/' + country.relations[i].name + '.GIF" width="100px" height="75px" /></th>' +
																		  '<th id="troops"><img alt="troops" src="battlefield/troops2.jpg" width="100px" height="60" /><br /><input type="text" maxlength="8" class="forceM" id="text" name="war_troops" /></th>' +
																		  '<th id="tanks"><img alt="tanks" src="battlefield/tank.jpg" width="100px" height="60" /><br /><input type="text" maxlength="8" class="forceM" id="text" name="war_tanks" /></th>' +
																		  '<th id="art"><img alt="art" src="battlefield/artillery.jpg" width="100px" height="60" /><br /><input type="text" maxlength="8" class="forceM" id="text" name="war_art" /></th>' +
																		  '<th id="buttons"><input type="button" id="send_army" value="Send Forces!" class="go" /></th>' +
																		  '</tr><tr id="forcesM"><th></th>  <th id="troopsM">' + tableTroops + '</th>  <th id="tanksM">' + tableTanks + '</th>  <th id="artM">' + tableArt + '</th>  <th></th>  </tr></table>');
			}
			else if(country.relations[i].relation == -1 && $('body #game-wrapper #content #battlefield #war table[id=' + country.relations[i].name + ']')) {
				$('body #game-wrapper #content #battlefield #war table[id=' + country.relations[i].name + ']').remove();
			}
			if(country.relations[i].relation == 100) {
				country.money += 10000000;
			}
		}
	}
	
	function UpdateBuyWeapons(country, supply) {
		// Tanks
		$('body #game-wrapper #content #weapons .supply table #tanks #cost').html(addCommas(supply.tank));
		$('body #game-wrapper #content #weapons .supply table #tanks #own').html(addCommas(country.army.tanks));
		$('body #game-wrapper #content #weapons .supply table #tanks #can').html(addCommas(Math.floor(country.money / supply.tank)));
		if(country.supply.usa > 0) { $('body #game-wrapper #content #weapons #usa table #tanks #much').html('<div id="tank" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #usa table #tanks #much').html('Will Not Sell!'); }
		if(country.supply.eu > 0) { $('body #game-wrapper #content #weapons #europe table #tanks #much').html('<div id="tank" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #europe table #tanks #much').html('Will Not Sell!'); }
		if(country.supply.russia > 0) { $('body #game-wrapper #content #weapons #russia table #tanks #much').html('<div id="tank" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #russia table #tanks #much').html('Will Not Sell!'); }
		if(country.supply.china > 0) { $('body #game-wrapper #content #weapons #china table #tanks #much').html('<div id="tank" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #china table #tanks #much').html('Will Not Sell!'); }
		
		
		// Artillery
		$('body #game-wrapper #content #weapons .supply table #artillery #cost').html(addCommas(supply.artillery));
		$('body #game-wrapper #content #weapons .supply table #artillery #own').html(addCommas(country.army.artillery));
		$('body #game-wrapper #content #weapons .supply table #artillery #can').html(addCommas(Math.floor(country.money / supply.artillery)));
		if(country.supply.usa > 1) { $('body #game-wrapper #content #weapons #usa table #artillery #much').html('<div id="artillery" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #usa table #artillery #much').html('Will Not Sell!'); }
		if(country.supply.eu > 1) { $('body #game-wrapper #content #weapons #europe table #artillery #much').html('<div id="artillery" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #europe table #artillery #much').html('Will Not Sell!'); }
		if(country.supply.russia > 1) { $('body #game-wrapper #content #weapons #russia table #artillery #much').html('<div id="artillery" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #russia table #artillery #much').html('Will Not Sell!'); }
		if(country.supply.china > 1) { $('body #game-wrapper #content #weapons #china table #artillery #much').html('<div id="artillery" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #china table #artillery #much').html('Will Not Sell!'); }
		
		// Anti - Air
		$('body #game-wrapper #content #weapons .supply table #antiair #cost').html(addCommas(supply.antiair));
		$('body #game-wrapper #content #weapons .supply table #antiair #own').html(addCommas(country.army.antiair));
		$('body #game-wrapper #content #weapons .supply table #antiair #can').html(addCommas(Math.floor(country.money / supply.antiair)));
		if(country.supply.usa > 2) { $('body #game-wrapper #content #weapons #usa table #antiair #much').html('<div id="antiair" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #usa table #antiair #much').html('Will Not Sell!'); }
		if(country.supply.eu > 2) { $('body #game-wrapper #content #weapons #europe table #antiair #much').html('<div id="antiair" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #europe table #antiair #much').html('Will Not Sell!'); }
		if(country.supply.russia > 2) { $('body #game-wrapper #content #weapons #russia table #antiair #much').html('<div id="antiair" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #russia table #antiair #much').html('Will Not Sell!'); }
		if(country.supply.china > 2) { $('body #game-wrapper #content #weapons #china table #antiair #much').html('<div id="antiair" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #china table #antiair #much').html('Will Not Sell!'); }
		
		// Jets
		$('body #game-wrapper #content #weapons .supply table #jets #cost').html(addCommas(supply.jet));
		$('body #game-wrapper #content #weapons .supply table #jets #own').html(addCommas(country.army.jets));
		$('body #game-wrapper #content #weapons .supply table #jets #can').html(addCommas(Math.floor(country.money / supply.jet)));
		if(country.supply.usa > 3) { $('body #game-wrapper #content #weapons #usa table #jets #much').html('<div id="jet" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #usa table #jets #much').html('Will Not Sell!'); }
		if(country.supply.eu > 3) { $('body #game-wrapper #content #weapons #europe table #jets #much').html('<div id="jet" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #europe table #jets #much').html('Will Not Sell!'); }
		if(country.supply.russia > 3) { $('body #game-wrapper #content #weapons #russia table #jets #much').html('<div id="jet" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #russia table #jets #much').html('Will Not Sell!'); }
		if(country.supply.china > 3) { $('body #game-wrapper #content #weapons #china table #jets #much').html('<div id="jet" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #china table #jets #much').html('Will Not Sell!'); }
		
		// Missiles
		$('body #game-wrapper #content #weapons .supply table #missiles #cost').html(addCommas(supply.missile));
		$('body #game-wrapper #content #weapons .supply table #missiles #own').html(addCommas(country.army.missiles));
		$('body #game-wrapper #content #weapons .supply table #missiles #can').html(addCommas(Math.floor(country.money / supply.missile)));
		if(country.supply.usa > 4) { $('body #game-wrapper #content #weapons #usa table #missiles #much').html('<div id="missiles" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #usa table #missiles #much').html('Will Not Sell!'); }
		if(country.supply.eu > 4) { $('body #game-wrapper #content #weapons #europe table #missiles #much').html('<div id="missiles" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #europe table #missiles #much').html('Will Not Sell!'); }
		if(country.supply.russia > 4) { $('body #game-wrapper #content #weapons #russia table #missiles #much').html('<div id="missiles" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #russia table #missiles #much').html('Will Not Sell!'); }
		if(country.supply.china > 4) { $('body #game-wrapper #content #weapons #china table #missiles #much').html('<div id="missiles" style="display:block"><input id="text" type="text" name="much" /><br /><input type="button" value="Buy!" class="buy gored"/></div>'); }
		else { $('body #game-wrapper #content #weapons #china table #missiles #much').html('Will Not Sell!'); }
	}
	
	function UpdateBattlefieldSelection(country) {
		var battlefield_select = $('body #game-wrapper #content #battlefield #actions table tr #choose select');
		battlefield_select.html('<option value="select" selected="selected">Select</option>');
		for(var i = 0; i < country.relations.length; i++) {
			if(country.relations[i].relation < 60) {
				var name = FirstCapitalLetter(country.relations[i].name);
				battlefield_select.append('<option value="' + name + '">' + name + '</option>');
			}
		}
	}
	
	function RelationUpdate(country) {
		var relations_table = $('body #game-wrapper #content #relations table');
		relations_table.html('');
		for(var i = 0; i < country.relations.length; i++) {
			var name = country.relations[i].name;
			var relation = country.relations[i].relation;
			if(relation == 100) {
				relations_table.append('<tr> <th><img src="country/' + name + '.GIF" alt="country" height="100" width="180"></th>' +
									   '<th><span>' + relation + '%' + '</span></th>' +
									   '<th><div id="' + name +'"><input type="button" value="Conflict!" class="conf gored" /><input type="button" value="Pay!" class="pay gogreen" /></div></th> </tr>');
			}
			if(relation == 80 || relation == 90) {
				relations_table.append('<tr> <th><img src="country/' + name + '.GIF" alt="country" height="100" width="180"></th>' +
									   '<th><span>' + relation + '%' + '</span></th>' +
									   '<th><div id="' + name +'"><input type="button" value="Alliance!" class="alli go" /><input type="button" value="Pay!" class="pay gogreen" /><input type="button" value="Conflict" class="conf gored" /></div></th> </tr>');
			}
			else if(relation >= 50 && relation < 80) {
				relations_table.append('<tr> <th><img src="country/' + name + '.GIF" alt="country" height="100" width="180"></th>' +
									   '<th><span>' + relation + '%' + '</span></th>' +
									   '<th><div id="' + name +'"><input type="button" value="Peace!" class="peace go" /><input type="button" value="Pay!" class="pay gogreen" /><input type="button" value="Conflict" class="conf gored " /></div></th> </tr>');
			}
			else if(relation < 50 && relation > 0) {
				relations_table.append('<tr> <th><img src="country/' + name + '.GIF" alt="country" height="100" width="180"></th>' +
									   '<th><span>' + relation + '%' + '</span></th>' +
									   '<th><div id="' + name +'"><input type="button" value="Reconciliation!" class="reco go" /><input type="button" value="War!" class="war gored" /></div></th> </tr>');
			}
			else if(relation == 0) {
				relations_table.append('<tr> <th><img src="country/' + name + '.GIF" alt="country" height="100" width="180"></th>' +
									   '<th><span>' + relation + '%' + '</span></th>' +
									   '<th><div id="' + name +'"><input type="button" value="Reconciliation!" class="reco go" /></div></th> </tr>');
			}
			else if(relation == -1) {
				relations_table.append('<tr> <th><img src="country/' + name + '.GIF" alt="country" height="100" width="180"></th>' +
									   '<th><span>Yours!</span></th>' +
									   '</tr>');
			}
		}
	}
	function WeaponsUpdate(country) {
		// USA
		var weapon_table = $('body #game-wrapper #content #weapons table #usa #info');
		weapon_table.html('<ul><li>USA accept to sell you weapons level ' + country.supply.usa + '</li>' +
						      '<li>USA will give you every turn ' + addCommas(country.supply.usa * 10000000) + '</li></ul>');
		// Europe
		var weapon_table = $('body #game-wrapper #content #weapons table #europe #info');
		weapon_table.html('<ul><li>Europe accept to sell you weapons level ' + country.supply.eu + '</li>' +
						      '<li>Europe will give you every turn ' + addCommas(country.supply.eu * 10000000) + '</li></ul>');
		// Russia
		var weapon_table = $('body #game-wrapper #content #weapons table #russia #info');
		weapon_table.html('<ul><li>Russia accept to sell you weapons level ' + country.supply.eu + '</li>' +
						      '<li>Russia will give you every turn ' + addCommas(country.supply.eu * 10000000) + '</li></ul>');
		// China
		var weapon_table = $('body #game-wrapper #content #weapons table #china #info');
		weapon_table.html('<ul><li>China accept to sell you weapons level ' + country.supply.eu + '</li>' +
						      '<li>China will give you every turn ' + addCommas(country.supply.eu * 10000000) + '</li></ul>');
	}
	
	function CheckCountry(s) {
		switch(s) {
			case 'turkey':
			return turkey;
			break;
			
			case 'syria':
			return syria;
			break;
			
			case 'iraq':
			return iraq;
			break;
			
			case 'iran':
			return iran;
			break;
			
			case 'israel':
			return israel;
			break;
			
			case 'lebanon':
			return lebanon;
			break;
			
			case 'jordan':
			return jordan;
			break;
			
			case 'saudi':
			return saudi;
			break;
			
			case 'qatar':
			return qatar;
			break;
			
			case 'uae':
			return uae;
			break;
			
			case 'oman':
			return oman;
			break;
			
			case 'yemen':
			return yemen;
			break;
			
			case 'egypt':
			return egypt;
			break;
		}
	}
	
	function SetCountry(s,c) {
		switch(s) {
			case 'turkey':
			turkey = c;
			break;
			
			case 'syria':
			syria = c;
			break;
			
			case 'iraq':
			iraq = c;
			break;
			
			case 'iran':
			iran = c;
			break;
			
			case 'israel':
			israel = c;
			break;
			
			case 'lebanon':
			lebanon = c;
			break;
			
			case 'jordan':
			jordan = c;
			break;
			
			case 'saudi':
			saudi = c;
			break;
			
			case 'qatar':
			qatar = c;
			break;
			
			case 'uae':
			uae = c;
			break;
			
			case 'oman':
			oman = c;
			break;
			
			case 'yemen':
			yemen = c;
			break;
			
			case 'egypt':
			egypt = c;
			break;
		}
	}
	
	function ChangeRelation(c, n, country) {
		for(var i = 0; i < country.relations.length; i++) {
			if(country.relations[i].name == c) {
				country.relations[i].relation = n;
				return country;
			}
		}
	}
	
	function ChangePage(link) {
		if($(link).css('display') == 'none') { // Check if the content is not already displayed.
			/* Content Show */
			$('body #game-wrapper #content div').hide(); // Hide all the content.
			$(link).show(); // Showing new content. with the link href that is also a id of the content.
			$(link).find('div').show(); // Showing the content inside the div.
			/* Menu Active Color */
			$('body #game-wrapper #menu li a').removeClass('menuActive'); // Resetting the active menu color.
			$('body #game-wrapper #menu li a[href=' + link + ']').addClass('menuActive'); // Adding the active menu color.
		}
	}
	
	function addCommas(num) { // Function that adds commas to a number, it take the number as perameter of course.
		num += '';
		x = num.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}
	function removeCommas(num) {
		return num.replace(/\,/g,'');
	}
	function FirstCapitalLetter(string) { // Get a string and returns the same string with the first letter capital.
		if(string == 'uae') { return 'UAE'; } else {
		return string.charAt(0).toUpperCase() + string.slice(1); }
	}
	function FirstLowerLetter(string) { // Get a string and returns the same string with the first letter capital.
		if(string == 'UAE') { return 'uae'; } else {
		return string.charAt(0).toLowerCase() + string.slice(1); }
	}
	
	/* Game Page, The Game : DONE ! */
	
});