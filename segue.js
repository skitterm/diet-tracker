$(document).ready(function(){
	$('.sidebar li, a.other-page').on('click', function() {
		$('.page-overview').removeClass('selected');
        var page;
        if(this.id === 'foodeaten' || this.id==='submitassignment') {
            page = 'overview';
		}
        else {
            page = this.id;
		}
		$('.page-overview.' + this.id).addClass('selected');
		$('.sidebar li').removeClass('selected');
		$('a.other-page').removeClass('selected');
		$(document.getElementById(page)).addClass('selected');


		var generationCalls = {
			overview: function(){buildOverview()},
			mygoals: function(){buildGoals()},
			shoppinglist: function(){buildShoppingList()},
			mycupboard: function(){buildCupboard()},
			suggestmeal: function(){buildSuggestMeal()},
			settings: function(){buildSettings()},
			foodeaten: function(){buildFoodEaten()},
			submitassignment: function(){buildSubmitAssignment()}
		};
		// Redraw the page with current data
		if(generationCalls[page] != undefined)
		{
			generationCalls[page]();
		}
	});
	
	
	$('.cupboard-recipes .foods').on('click', 'li', function(option) {
		$('.page-overview').removeClass('selected');
        var page = 'mycupboard';

		$('.page-overview.' + this.id).addClass('selected');
		$('.sidebar li').removeClass('selected');
		$('.other-page').removeClass('selected');
		$(document.getElementById(page)).addClass('selected');
		
		var recipeName = $('h3', this).html();
		
		var recipe = findRecipe(recipeName);

		viewRecipe(recipeName);
	});

	
	//populates the search function on-page
	$('.add-to-list').click(function(){
		var foodString = $('#search-text').val();
		if(foodString == '') {
			return;
		}
		var results = '<h1>Add Additional Food</h1>' +
				'<div class="searched-food">' +
					'<ul class="foods">' +
						'<li>' +
							'<div>' +
								'<input type="checkbox">' +
								'<h3>' + foodString + '</h3>' +
								'<div class="quantity">' +
									'<span>Qty:</span>' +
									'<span>2</span>' +
								' </div>' +
							' </div>' +
						'</li>' +
					' </ul>' +
				'</div>';

		$('.shopping-results').html(results);
		$('.shopping-results').css('display', 'block');
	});
	
	$('.food-eaten a').click(function(){
		var foodString = $('#enter-eaten').val();
		var searchedHtml = '<div>' +
			    '<ul>' +
				    '<li>' +
					    '<div>' +
						    '<input type="checkbox">' +
						    '<h3>' + foodString + '</h3>' +
							'<div class="quantity">' +
								'<span>Qty:</span>' +
								'<span>' + 
									'<input id="foodeaten-qty" type="textbox" value="1">' +
								'</span>' +
							'</div>' +
					    '</div>' +
				    '</li>' +
			    '</ul>' +
		    '</div>' +
		    '<a onclick="eatFood(\'' + foodString + '\', document.getElementById(\'foodeaten-qty\').value);buildOverview(); showPage(\'overview\')">Submit Selected Food</a>';
			
		$('#entered-food').html(searchedHtml);
	});
	
	$('#mycupboard').click(function() {
		makeCupboardPage();
	});
	
	$('a#mycupboard').click(function() {
		makeCupboardPage();
	});
	
	$('.my-cupboard-recipes').click(function() {
		if($(this).hasClass('selected')) {
			
		} else {
			$(this).addClass('selected');
			$('section.cupboard-foods').css('display', 'none');
			$('.my-cupboard-foods').removeClass('selected');
			$('section.cupboard-recipes').css('display', 'inline-block');
		}
	});
	
	$('.my-cupboard-foods').click(function() {
		if($(this).hasClass('selected')) {
			
		} else {
			$(this).addClass('selected');
			$('section.cupboard-recipes').css('display', 'none');
			$('.my-cupboard-recipes').removeClass('selected');
			$('section.cupboard-foods').css('display', 'inline-block');
		}
	});
	
	/*$('.cupboard-recipe foods li').click(function() {
		
	});*/
	
	function makeCupboardPage() {
		    
		    var recipes = getAllRecipes();
		    
			    var listHtmlRecipe = '';
			   for(var i=0; i < recipes.length; i++) {
					var mealToShow = recipes[i];
					var stars = "";
					for(var j = 1; j <= 5; j++)
					{
						stars += "<img class='cupboard-ratingstar' src='./images/";
						if(mealToShow.rating < j)
						{
							stars += "un";
						}
						stars += "selectedStar.png' onclick='updateRating(&quot;" + mealToShow.name + "&quot;, " + j + ");makeCupboardPage();' />";
					}


			   		var listItemRecipe = 
			   		'<li class="other-page" id="viewrecipe">' +
					    '<div>' +
							'<img src="./images/recipes/' + recipes[i].image + '">' +
						    '<h3>'+ recipes[i].name +'</h3>'+
						    '<div class="recipe-stats">' +
								 '<span class="prep-time">' + 
									recipes[i].preparationTime.toString() + ' min' + 
								'</span>'+
								'<span class="rating">' +
									stars +
								'</span>' +
						    '</div>' +
					    '</div>'+
				    '</li>'
			   		;
			   		
			   		listHtmlRecipe += listItemRecipe;
			   } 
		    $('.cupboard-recipes .foods').html(listHtmlRecipe);
			
			var cupboard = getCupboard();
		
		var html =
			    '<ul class="foods">';
			    var listHtml = '';
			   for(var i=0; i < cupboard.length; i++) {
			   		var listItem = 
			   		'<li>' + 
					    '<div>' +
						    '<h3>'+ cupboard[i].name +'</h3>'+
						    '<div class="quantity">'+
							    '<span>Qty:</span>'+
							    '<span>' + 
							    cupboard[i].quantity.toString()  
							    + cupboard[i].measure + '</span>'+
						    '</div>'+
					    '</div>'+
				    '</li>'
			   		;
			   		
			   		listHtml += listItem;
			   } 
			   listHtml += '</ul>';
			   html += listHtml;
		    $('.cupboard-foods').html(html);
	}

	// Build this now since we are going there first
	buildOverview();
});

