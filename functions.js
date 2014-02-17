
/**
 * Draws a graph into the specified element
 * @param element The element selector for jQuery ('#thing')
 * @param title The title for the graph
 * @param actual The actual values
 * @param goals The goal values (optional)
 */
function drawGraph(element, title, actual, goals)
{
	var goalsEnabled = true;
	var actualEnabled = true;
	var calorieIncrement = 200;
	var series = [];

	if(actual == null || actual === undefined)
	{
		actualEnabled = false;
		actual = {grains:0,fruits:0,vegetables:0,dairy:0,protein:0,calories:0};
	}

	if(goals === undefined || goals == null)
	{
		goalsEnabled = false;
	}
	else
	{
		series.push({
			name: "Goals",
			color: "rgb(200, 200, 200)",
			data: [goals.grains - actual.grains, goals.fruits - actual.fruits, goals.vegetables - actual.vegetables, goals.dairy - actual.dairy, goals.protein - actual.protein, (goals.calories - actual.calories) / calorieIncrement]
		})
	}

	if(actualEnabled)
	{
		series.push({
			name: "Actual",
			color: "rgb(228,105,56)",
			data: [actual.grains, actual.fruits, actual.vegetables, actual.dairy, actual.protein, actual.calories / calorieIncrement]
		});
	}

	$(element).highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: title
		},
		xAxis: {
			categories: ['Grains', 'Fruits', 'Vegetables', 'Dairy', 'Protein', 'Calories']
		},
		yAxis: {
			min: 0,
			gridLineColor: 'transparent',
			title: {
				text: ''
			},
			stackLabels: {
				enabled: false,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				}
			}
		},
		credits: {
			enabled: false
		},
		legend: {
			enabled: false,
			align: 'right',
			x: -70,
			verticalAlign: 'top',
			y: 20,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.x +'</b><br/>'+
						(actualEnabled ? ('Actual: ' + (actual[this.x.toLowerCase()]) + "<br/>") : "") +
						(goalsEnabled ? 'Goal: ' + (goals[this.x.toLowerCase()]) : "");
			}
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'transparent'
				}
			}
		},
		series: series
	});
}

function updateGoals()
{
	var currentGoals = getCurrentGoals();

	var value = document.getElementById('mygoals-grains').value;
	if("NaN" !== "" + parseInt(value))
	{
		currentGoals.grains = parseInt(value);
	}
	value = document.getElementById('mygoals-dairy').value;
	if("NaN" !== "" + parseInt(value))
	{
		currentGoals.dairy = parseInt(value);
	}
	value = document.getElementById('mygoals-fruits').value;
	if("NaN" !== "" + parseInt(value))
	{
		currentGoals.fruits = parseInt(value);
	}
	value = document.getElementById('mygoals-vegetables').value;
	if("NaN" !== "" + parseInt(value))
	{
		currentGoals.vegetables = parseInt(value);
	}
	value = document.getElementById('mygoals-protein').value;
	if("NaN" !== "" + parseInt(value))
	{
		currentGoals.protein = parseInt(value);
	}
	value = document.getElementById('mygoals-calories').value;
	if("NaN" !== "" + parseInt(value))
	{
		currentGoals.calories = parseInt(value);
	}

	drawGraph("#mygoals-currentGraph", "Goals", null, getCurrentGoals());
}

function updatePreference(element)
{
	var name = element.value;
	var prefs = getMealPreferences();
	if(!element.checked)
	{
		for(var pref in prefs)
		{
			if(prefs.hasOwnProperty(pref))
			{
				if(prefs[pref] === name)
				{
					delete prefs[pref];
				}
			}
		}
	}
	else
	{
		prefs.push(name);
	}
}

function updateGender(isMale)
{
	user.isMale = isMale;

	document.getElementById("settings-male").checked = isMale;
	document.getElementById("settings-female").checked = !isMale;
}

function shoppingListUpdate(checkboxChanged, category, food)
{
	var checkbox = document.getElementById("shoppinglist-" + food + "Checkbox");
	var neededTotal = document.getElementById("shoppinglist-" + category + "Needed");
	var qtyPurchased = document.getElementById("shoppinglist-" + food + "Qty");

	// Prevent them from being tricky
	if(parseInt(qtyPurchased.value) < 0)
	{
		qtyPurchased.value = "0";
	}

	if(!checkboxChanged && !checkbox.checked)
	{
		// We don't need to do anything!
		return;
	}

	if(!checkboxChanged && checkbox.checked)
	{
		// Update the quantity
		if(currentShoppingList[food] == undefined)
		{
			// Unknown
		}
		else
		{
			var previous = currentShoppingList[food];

			var current = parseInt(qtyPurchased.value);

			var difference = previous - current;

			currentShoppingList[food] -= difference;

			if(currentShoppingList[food] < 0)
			{
				difference -= currentShoppingList[food];
				currentShoppingList[food] = 0;
				qtyPurchased.value = "0";
			}

			neededTotal.innerHTML = "" + (parseInt(neededTotal.innerHTML) + difference);
		}
	}

	if(checkboxChanged && checkbox.checked)
	{
		var amount = parseInt(qtyPurchased.value);
		// Add this to the list
		currentShoppingList[food] = amount;

		neededTotal.innerHTML = "" + (parseInt(neededTotal.innerHTML) - amount);
	}

	if(checkboxChanged && !checkbox.checked)
	{
		var removeAmount = currentShoppingList[food];
		delete currentShoppingList[food];

		neededTotal.innerHTML = "" + (parseInt(neededTotal.innerHTML) + removeAmount);
	}
}

function finishShopping()
{
	var toAdd = [];
	// Add everything to the cupboard
	for(var key in currentShoppingList)
	{
		if(currentShoppingList.hasOwnProperty(key))
		{
			var food = currentShoppingList[key];

			toAdd.push({name:key, quantity:food});
		}
	}

	addFoodsToCupboard(toAdd);
}

var mealOffsets = {
	snack: 0,
	breakfast: 0,
	lunch: 0,
	dinner: 0
};

function scrollMealLeft(type)
{
	mealOffsets[type] -= 1;
	var options = getRecipeSuggestions(type);

	if(mealOffsets[type] < 0)
	{
		mealOffsets[type] = options.length - 1;
	}

	redrawSuggestedMeal(type);
}

function scrollMealRight(type)
{
	mealOffsets[type] += 1;
	var options = getRecipeSuggestions(type);

	if(mealOffsets[type] >= options.length)
	{
		mealOffsets[type] = 0;
	}

	redrawSuggestedMeal(type);
}

function redrawSuggestedMeal(type)
{
	var options = getRecipeSuggestions(type);
	var mealToShow = options[mealOffsets[type]];

	document.getElementById("suggestmeal-" + type).src = "./images/recipes/" + mealToShow.image;
	document.getElementById("suggestmeal-" + type).onclick = function(){viewRecipe(mealToShow.name)};
	document.getElementById("suggestmeal-" + type + "-time").innerHTML = mealToShow.preparationTime + "m";

	var stars = "";
	for(var i = 1; i <= 5; i++)
	{
		stars += "<img class='suggestmeal-ratingstar' src='./images/";
		if(mealToShow.rating < i)
		{
			stars += "un";
		}
		stars += "selectedStar.png' onclick='updateRating(&quot;" + mealToShow.name + "&quot;, " + i + ")' />";
	}
	document.getElementById("suggestmeal-" + type + "-rating").innerHTML = stars;
	document.getElementById("suggestmeal-" + type + "-name").innerHTML = mealToShow.name;
	document.getElementById("suggestmeal-" + type + "-name").onclick = function(){viewRecipe(mealToShow.name)};
}

function updateRating(name, rating)
{
	rateRecipe(name, rating);

	// Hacky solution to redraw all ratings
	scrollMealLeft("snack");
	scrollMealRight("snack");
	scrollMealLeft("breakfast");
	scrollMealRight("breakfast");
	scrollMealLeft("lunch");
	scrollMealRight("lunch");
	scrollMealLeft("dinner");
	scrollMealRight("dinner");
}

// ---------------------------------------------------------------
// Functions to generate page content dynamically
// ---------------------------------------------------------------

function buildOverview()
{
	drawGraph("#overview-graph", "This Week", getValuesEatenToday(), getCurrentGoals());
}

function buildGoals()
{
	drawGraph("#mygoals-historyGraph", "Last Week", getHistoricData("2013-12-03").actual, getHistoricData("2013-12-03").goals);
	drawGraph("#mygoals-currentGraph", "Goals", null, getCurrentGoals());

	var current = getCurrentGoals();
	document.getElementById("mygoals-dairy").value = current.dairy;
	document.getElementById("mygoals-fruits").value = current.fruits;
	document.getElementById("mygoals-vegetables").value = current.vegetables;
	document.getElementById("mygoals-grains").value = current.grains;
	document.getElementById("mygoals-protein").value = current.protein;
	document.getElementById("mygoals-calories").value = current.calories;
}

var currentShoppingList = {};
function buildShoppingList()
{
	currentShoppingList = {};
	var html = "";

	var list = getShoppingList();
	for(var key in list)
	{
		if(list.hasOwnProperty(key))
		{
			var category = list[key];

			// Category is something like fruits

			html += "<div class='food-group'>\
			<div>\
				<h2>" + key + "</h2>\
				<span id='shoppinglist-" + key + "Needed'>" + category.needed + "</span>\
			</div>\
			<ul class='foods'>";

			// Get each food
			for(var innerKey in category.options)
			{
				if(category.options.hasOwnProperty(innerKey))
				{
					var food = category.options[innerKey];
					html += "<li><div>";

					html += "<label><input id='shoppinglist-" + food.name + "Checkbox' type='checkbox' onclick='shoppingListUpdate(true, \"" + key + "\", \"" + food.name + "\")' value='" + food.name + "' />\
							<h3>" + food.name + " (" + food.size + ")</h3></label><div class='quantity'><span>Qty Purchased:</span>" +
							"<span><input id='shoppinglist-" + food.name + "Qty' class='quantityInput' onchange='shoppingListUpdate(false, \"" + key + "\", \"" + food.name + "\")' type='text' pattern='[0-9]*' id='shoppinglist-" + food.name + "Qty' value='1'/></span></div>";

					html += "</div></li>";
				}
			}

			html += "</ul></div>";
		}
	}

	document.getElementById("shoppinglist-content").innerHTML = html;
	document.getElementById("shoppinglist-additionalfoods").innerHTML = "";
}

function showPage(name)
{

	$('.page-overview').removeClass('selected');
	$('.page-overview.' + name).addClass('selected');
	$('.sidebar li').removeClass('selected');
	$('a.other-page').removeClass('selected');
	$(document.getElementById(name)).addClass('selected');
}

function viewRecipe(name)
{
	var recipe = findRecipe(name);
	//title and stats, image, ingredients, directions, and button.

	var ingredientsHtml = '<p class="ingredients">';
	for(var i=0; i < recipe.ingredients.length; i++) {
		var ingredient = recipe.ingredients[i];
		var ingredientItem = ingredient.description +
				' (' + ingredient.quantity + ' ' + (ingredient.measure == null ? "whole" : ingredient.measure) + ')';
		if(i < recipe.ingredients.length - 1) {
			ingredientItem+= ', ';
		}

		ingredientsHtml += ingredientItem;
	}
	ingredientsHtml += '</p>';

	//ratings prep time nutritional facts
	var stars = "";
	for(var j = 1; j <= 5; j++)
	{
		stars += "<img class='recipe-ratingstar' src='./images/";
		if(recipe.rating < j)
		{
			stars += "un";
		}
		stars += "selectedStar.png' onclick='updateRating(&quot;" + recipe.name + "&quot;, " + j + ");viewRecipe(&quot;" + recipe.name + "&quot;);' />";
	}
	var recipeHtml = '<div class="viewrecipe-title">' +
				'<h2>' + recipe.name + '</h2>' +
				'<h3>Prep Time: ' + recipe.preparationTime.toString() + ' min</h3>' +
				'<h3>' + stars + '</h3>' +
			'</div>' +
			'<div class="viewrecipe-image">' +
				'<img src="./images/recipes/' + recipe.image + '">' +
			'</div>' +
			'<div class="viewrecipe-ingredients">' +
				'<h3>Ingredients</h3>' +
				'<ul class="ingredient-list">' + ingredientsHtml + '</ul>' +
			'</div>' +
			'<div class="viewrecipe-directions">' +
				'<h3>Directions</h3>' +
				'<p>' + recipe.directions + '</p>' +
			'</div>' +
			'<div class="viewrecipe-button">' +
			'<a href="overview.html" class="other-page mycupboard" onclick="eatRecipe(\'' + recipe.name + '\')">Eat Recipe</a>' +
			'</div>';

	$('.viewrecipe-recipe').html(recipeHtml);


	showPage("viewrecipe");
}

function buildCupboard()
{
	// TODO: Build this
}

function buildSuggestMeal()
{
	mealOffsets = {
		snack: 1,
		breakfast: 1,
		lunch: 1,
		dinner: 1
	};

	scrollMealLeft("snack");
	scrollMealLeft("breakfast");
	scrollMealLeft("lunch");
	scrollMealLeft("dinner");
}

function buildSettings()
{
	var allOptions = getMealPreferencePossibilities();
	var selectedOptions = getMealPreferences();

	var html = "";

	for(var option in allOptions)
	{
		if(allOptions.hasOwnProperty(option))
		{
			option = allOptions[option];
			html += "<li><label><input type='checkbox' name='preference' onclick='updatePreference(this)' value='" + option + "'";
			// Now see if it is selected
			for(var sel in selectedOptions)
			{
				if(selectedOptions.hasOwnProperty(sel))
				{
					sel = selectedOptions[sel];
					if(sel === option)
					{
						html += " checked";
						break;
					}
				}
			}
			html += " />" + option + "</label></li>";
		}
	}

	document.getElementById("settings-preferences").innerHTML = html;

	document.getElementById("settings-weight").value = user.weight;
	document.getElementById("settings-height").value = user.height;
	document.getElementById("settings-male").checked = user.isMale;
	document.getElementById("settings-female").checked = !user.isMale;
}

function buildFoodEaten()
{
	// TODO: Build this
}

function buildSubmitAssignment()
{
	// Do nothing, this one is fine
}
