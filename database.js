var user = {
	username: "bob",
	password: "bob",
	preferences: [
		"dessert",
		"pasta",
		"breakfast"
	],
	weight: "220 lbs",
	height: "5ft 6in",
	isMale: true,
	foodEaten: [
		{"day": "2013-09-21", "foods": {"grains": 11, "fruits": 5, "vegetables": 4, "dairy": 5, "protein": 4, "calories": 1850}},
		{"day": "2013-09-22", "foods": {"grains": 12, "fruits": 8, "vegetables": 4, "dairy": 3, "protein": 6, "calories": 1832}},
		{"day": "2013-09-23", "foods": {"grains": 11, "fruits": 8, "vegetables": 6, "dairy": 2, "protein": 5, "calories": 1909}},
		{"day": "2013-09-24", "foods": {"grains": 9, "fruits": 7, "vegetables": 7, "dairy": 4, "protein": 4, "calories": 1964}},
		{"day": "2013-09-25", "foods": {"grains": 9, "fruits": 6, "vegetables": 7, "dairy": 3, "protein": 5, "calories": 2108}},
		{"day": "2013-09-26", "foods": {"grains": 8, "fruits": 8, "vegetables": 6, "dairy": 4, "protein": 4, "calories": 2280}},
		{"day": "2013-09-27", "foods": {"grains": 9, "fruits": 5, "vegetables": 7, "dairy": 2, "protein": 4, "calories": 2233}},
		{"day": "2013-09-28", "foods": {"grains": 8, "fruits": 7, "vegetables": 7, "dairy": 4, "protein": 4, "calories": 1925}},
		{"day": "2013-09-29", "foods": {"grains": 10, "fruits": 6, "vegetables": 7, "dairy": 2, "protein": 6, "calories": 2119}},
		{"day": "2013-09-30", "foods": {"grains": 11, "fruits": 5, "vegetables": 4, "dairy": 4, "protein": 5, "calories": 1997}},
		{"day": "2013-10-01", "foods": {"grains": 12, "fruits": 6, "vegetables": 6, "dairy": 4, "protein": 6, "calories": 1808}},
		{"day": "2013-10-02", "foods": {"grains": 10, "fruits": 6, "vegetables": 5, "dairy": 4, "protein": 6, "calories": 1748}},
		{"day": "2013-10-03", "foods": {"grains": 10, "fruits": 7, "vegetables": 6, "dairy": 4, "protein": 6, "calories": 2034}},
		{"day": "2013-10-04", "foods": {"grains": 12, "fruits": 8, "vegetables": 6, "dairy": 4, "protein": 4, "calories": 2089}},
		{"day": "2013-10-05", "foods": {"grains": 10, "fruits": 6, "vegetables": 6, "dairy": 4, "protein": 5, "calories": 1728}},
		{"day": "2013-10-06", "foods": {"grains": 12, "fruits": 5, "vegetables": 4, "dairy": 5, "protein": 6, "calories": 2161}},
		{"day": "2013-10-07", "foods": {"grains": 11, "fruits": 5, "vegetables": 3, "dairy": 2, "protein": 6, "calories": 2091}},
		{"day": "2013-10-08", "foods": {"grains": 11, "fruits": 5, "vegetables": 4, "dairy": 4, "protein": 5, "calories": 2060}},
		{"day": "2013-10-09", "foods": {"grains": 10, "fruits": 7, "vegetables": 7, "dairy": 2, "protein": 4, "calories": 2015}},
		{"day": "2013-10-10", "foods": {"grains": 8, "fruits": 7, "vegetables": 6, "dairy": 3, "protein": 4, "calories": 2243}},
		{"day": "2013-10-11", "foods": {"grains": 9, "fruits": 7, "vegetables": 5, "dairy": 4, "protein": 4, "calories": 2270}},
		{"day": "2013-10-12", "foods": {"grains": 12, "fruits": 7, "vegetables": 4, "dairy": 2, "protein": 6, "calories": 1778}},
		{"day": "2013-10-13", "foods": {"grains": 8, "fruits": 5, "vegetables": 3, "dairy": 5, "protein": 5, "calories": 2089}},
		{"day": "2013-10-14", "foods": {"grains": 12, "fruits": 6, "vegetables": 6, "dairy": 5, "protein": 4, "calories": 2042}},
		{"day": "2013-10-15", "foods": {"grains": 11, "fruits": 8, "vegetables": 3, "dairy": 4, "protein": 5, "calories": 1947}},
		{"day": "2013-10-16", "foods": {"grains": 12, "fruits": 6, "vegetables": 5, "dairy": 3, "protein": 6, "calories": 2265}},
		{"day": "2013-10-17", "foods": {"grains": 12, "fruits": 6, "vegetables": 4, "dairy": 5, "protein": 5, "calories": 2134}},
		{"day": "2013-10-18", "foods": {"grains": 8, "fruits": 8, "vegetables": 4, "dairy": 3, "protein": 4, "calories": 1701}},
		{"day": "2013-10-19", "foods": {"grains": 8, "fruits": 7, "vegetables": 3, "dairy": 5, "protein": 6, "calories": 1845}},
		{"day": "2013-10-20", "foods": {"grains": 9, "fruits": 8, "vegetables": 7, "dairy": 2, "protein": 4, "calories": 1785}},
		{"day": "2013-10-21", "foods": {"grains": 11, "fruits": 6, "vegetables": 7, "dairy": 3, "protein": 4, "calories": 2053}},
		{"day": "2013-10-22", "foods": {"grains": 12, "fruits": 7, "vegetables": 7, "dairy": 2, "protein": 6, "calories": 1770}},
		{"day": "2013-10-23", "foods": {"grains": 11, "fruits": 8, "vegetables": 7, "dairy": 3, "protein": 4, "calories": 1750}},
		{"day": "2013-10-24", "foods": {"grains": 9, "fruits": 5, "vegetables": 5, "dairy": 5, "protein": 6, "calories": 1883}},
		{"day": "2013-10-25", "foods": {"grains": 8, "fruits": 7, "vegetables": 4, "dairy": 4, "protein": 4, "calories": 2032}},
		{"day": "2013-10-26", "foods": {"grains": 10, "fruits": 7, "vegetables": 5, "dairy": 3, "protein": 6, "calories": 1724}},
		{"day": "2013-10-27", "foods": {"grains": 12, "fruits": 5, "vegetables": 6, "dairy": 4, "protein": 5, "calories": 1971}},
		{"day": "2013-10-28", "foods": {"grains": 11, "fruits": 8, "vegetables": 7, "dairy": 2, "protein": 6, "calories": 2167}},
		{"day": "2013-10-29", "foods": {"grains": 10, "fruits": 5, "vegetables": 7, "dairy": 2, "protein": 6, "calories": 2299}},
		{"day": "2013-10-30", "foods": {"grains": 12, "fruits": 7, "vegetables": 4, "dairy": 4, "protein": 5, "calories": 2240}},
		{"day": "2013-10-31", "foods": {"grains": 8, "fruits": 5, "vegetables": 6, "dairy": 3, "protein": 5, "calories": 1729}},
		{"day": "2013-11-01", "foods": {"grains": 9, "fruits": 6, "vegetables": 5, "dairy": 5, "protein": 5, "calories": 1769}},
		{"day": "2013-11-02", "foods": {"grains": 8, "fruits": 8, "vegetables": 7, "dairy": 5, "protein": 5, "calories": 2207}},
		{"day": "2013-11-03", "foods": {"grains": 12, "fruits": 6, "vegetables": 6, "dairy": 4, "protein": 6, "calories": 1963}},
		{"day": "2013-11-04", "foods": {"grains": 9, "fruits": 8, "vegetables": 6, "dairy": 4, "protein": 6, "calories": 2148}},
		{"day": "2013-11-05", "foods": {"grains": 11, "fruits": 6, "vegetables": 3, "dairy": 5, "protein": 4, "calories": 2172}},
		{"day": "2013-11-06", "foods": {"grains": 9, "fruits": 6, "vegetables": 3, "dairy": 3, "protein": 4, "calories": 1910}},
		{"day": "2013-11-07", "foods": {"grains": 9, "fruits": 8, "vegetables": 3, "dairy": 2, "protein": 6, "calories": 1814}},
		{"day": "2013-11-08", "foods": {"grains": 9, "fruits": 5, "vegetables": 5, "dairy": 5, "protein": 4, "calories": 1929}},
		{"day": "2013-11-09", "foods": {"grains": 9, "fruits": 8, "vegetables": 7, "dairy": 2, "protein": 4, "calories": 2066}},
		{"day": "2013-11-10", "foods": {"grains": 12, "fruits": 7, "vegetables": 7, "dairy": 5, "protein": 6, "calories": 2272}},
		{"day": "2013-11-11", "foods": {"grains": 10, "fruits": 5, "vegetables": 5, "dairy": 5, "protein": 5, "calories": 1876}},
		{"day": "2013-11-12", "foods": {"grains": 12, "fruits": 8, "vegetables": 4, "dairy": 3, "protein": 4, "calories": 2091}},
		{"day": "2013-11-13", "foods": {"grains": 9, "fruits": 8, "vegetables": 6, "dairy": 5, "protein": 5, "calories": 1990}},
		{"day": "2013-11-14", "foods": {"grains": 11, "fruits": 6, "vegetables": 4, "dairy": 5, "protein": 5, "calories": 1786}},
		{"day": "2013-11-15", "foods": {"grains": 8, "fruits": 6, "vegetables": 7, "dairy": 5, "protein": 4, "calories": 1798}},
		{"day": "2013-11-16", "foods": {"grains": 11, "fruits": 6, "vegetables": 7, "dairy": 3, "protein": 4, "calories": 2143}},
		{"day": "2013-11-17", "foods": {"grains": 12, "fruits": 5, "vegetables": 6, "dairy": 5, "protein": 6, "calories": 1939}},
		{"day": "2013-11-18", "foods": {"grains": 9, "fruits": 6, "vegetables": 4, "dairy": 2, "protein": 6, "calories": 2025}},
		{"day": "2013-11-19", "foods": {"grains": 8, "fruits": 8, "vegetables": 3, "dairy": 3, "protein": 4, "calories": 2057}},
		{"day": "2013-11-20", "foods": {"grains": 8, "fruits": 7, "vegetables": 7, "dairy": 2, "protein": 6, "calories": 1989}},
		{"day": "2013-11-21", "foods": {"grains": 12, "fruits": 5, "vegetables": 7, "dairy": 2, "protein": 4, "calories": 2195}},
		{"day": "2013-11-22", "foods": {"grains": 9, "fruits": 5, "vegetables": 5, "dairy": 2, "protein": 6, "calories": 2110}},
		{"day": "2013-11-23", "foods": {"grains": 11, "fruits": 7, "vegetables": 5, "dairy": 5, "protein": 4, "calories": 1734}},
		{"day": "2013-11-24", "foods": {"grains": 9, "fruits": 8, "vegetables": 4, "dairy": 3, "protein": 5, "calories": 1815}},
		{"day": "2013-11-25", "foods": {"grains": 12, "fruits": 7, "vegetables": 7, "dairy": 3, "protein": 5, "calories": 2247}},
		{"day": "2013-11-26", "foods": {"grains": 11, "fruits": 5, "vegetables": 5, "dairy": 3, "protein": 6, "calories": 1825}},
		{"day": "2013-11-27", "foods": {"grains": 12, "fruits": 5, "vegetables": 7, "dairy": 3, "protein": 5, "calories": 1816}},
		{"day": "2013-11-28", "foods": {"grains": 8, "fruits": 5, "vegetables": 5, "dairy": 2, "protein": 5, "calories": 1976}},
		{"day": "2013-11-29", "foods": {"grains": 10, "fruits": 6, "vegetables": 6, "dairy": 5, "protein": 5, "calories": 1774}},
		{"day": "2013-11-30", "foods": {"grains": 10, "fruits": 7, "vegetables": 7, "dairy": 3, "protein": 6, "calories": 1954}},
		{"day": "2013-12-01", "foods": {"grains": 12, "fruits": 6, "vegetables": 4, "dairy": 2, "protein": 4, "calories": 2202}},
		{"day": "2013-12-02", "foods": {"grains": 11, "fruits": 6, "vegetables": 4, "dairy": 5, "protein": 5, "calories": 2015}},
		{"day": "2013-12-03", "foods": {"grains": 8, "fruits": 5, "vegetables": 7, "dairy": 3, "protein": 4, "calories": 1851}},
		{"day": "2013-12-04", "foods": {"grains": 9, "fruits": 6, "vegetables": 5, "dairy": 4, "protein": 5, "calories": 1969}},
		{"day": "2013-12-05", "foods": {"grains": 8, "fruits": 6, "vegetables": 7, "dairy": 3, "protein": 6, "calories": 1724}},
		{"day": "2013-12-06", "foods": {"grains": 12, "fruits": 8, "vegetables": 6, "dairy": 3, "protein": 4, "calories": 1739}},
		{"day": "2013-12-07", "foods": {"grains": 11, "fruits": 7, "vegetables": 3, "dairy": 5, "protein": 4, "calories": 2244}},
		{"day": "2013-12-08", "foods": {"grains": 11, "fruits": 7, "vegetables": 3, "dairy": 2, "protein": 5, "calories": 1948}},
		{"day": "2013-12-09", "foods": {"grains": 12, "fruits": 8, "vegetables": 3, "dairy": 4, "protein": 5, "calories": 2239}},
		{"day": "2013-12-10", "foods": {"grains": 9, "fruits": 5, "vegetables": 6, "dairy": 5, "protein": 4, "calories": 1992}},
		{"day": "2013-12-11", "foods": {"grains": 3, "fruits": 6, "vegetables": 2, "dairy": 2, "protein": 1, "calories": 1140}},
		{"day": "2013-12-12", "foods": {"grains": 12, "fruits": 6, "vegetables": 4, "dairy": 2, "protein": 4, "calories": 2202}},
		{"day": "2013-12-13", "foods": {"grains": 11, "fruits": 6, "vegetables": 4, "dairy": 5, "protein": 5, "calories": 2015}},
		{"day": "2013-12-14", "foods": {"grains": 8, "fruits": 5, "vegetables": 7, "dairy": 3, "protein": 4, "calories": 1851}},
		{"day": "2013-12-15", "foods": {"grains": 9, "fruits": 6, "vegetables": 5, "dairy": 4, "protein": 5, "calories": 1969}},
		{"day": "2013-12-16", "foods": {"grains": 8, "fruits": 6, "vegetables": 7, "dairy": 3, "protein": 6, "calories": 1724}},
		{"day": "2013-12-17", "foods": {"grains": 12, "fruits": 8, "vegetables": 6, "dairy": 3, "protein": 4, "calories": 1739}},
		{"day": "2013-12-18", "foods": {"grains": 11, "fruits": 7, "vegetables": 3, "dairy": 5, "protein": 4, "calories": 2244}},
		{"day": "2013-12-19", "foods": {"grains": 11, "fruits": 7, "vegetables": 3, "dairy": 2, "protein": 5, "calories": 1948}},
		{"day": "2013-12-20", "foods": {"grains": 12, "fruits": 8, "vegetables": 3, "dairy": 4, "protein": 5, "calories": 2239}},
		{"day": "2013-12-21", "foods": {"grains": 9, "fruits": 5, "vegetables": 6, "dairy": 5, "protein": 4, "calories": 1992}},
		{"day": "2013-12-22", "foods": {"grains": 3, "fruits": 6, "vegetables": 2, "dairy": 2, "protein": 1, "calories": 1140}}
	],
	goals: [
		{
			startDay: "2013-09-29",
			endDay: "2013-10-05",
			fruits: 10,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2013-10-06",
			endDay: "2013-10-12",
			fruits: 10,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2013-10-13",
			endDay: "2013-10-19",
			fruits: 5,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 2,
			calories: 2000
		},
		{
			startDay: "2013-10-20",
			endDay: "2013-10-26",
			fruits: 5,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 8,
			calories: 2000
		},
		{
			startDay: "2013-10-27",
			endDay: "2013-11-02",
			fruits: 5,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2100
		},
		{
			startDay: "2013-11-03",
			endDay: "2013-11-09",
			fruits: 5,
			grains: 5,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2013-11-10",
			endDay: "2013-11-16",
			fruits: 5,
			grains: 8,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2013-11-17",
			endDay: "2013-11-23",
			fruits: 6,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2013-11-24",
			endDay: "2013-11-30",
			fruits: 6,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2013-12-01",
			endDay: "2013-12-07",
			fruits: 5,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2013-12-08",
			endDay: "2013-12-14",
			fruits: 5,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2013-12-15",
			endDay: "2013-12-21",
			fruits: 5,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2014-02-09",
			endDay: "2014-02-15",
			fruits: 5,
			grains: 9,
			vegetables: 6,
			dairy: 4,
			protein: 4,
			calories: 2000
		},
		{
			startDay: "2014-02-16",
			endDay: "2014-02-22",
			fruits: 5,
			grains: 6,
			vegetables: 6,
			dairy: 3,
			protein: 4,
			calories: 2200
		},
	],
	cupboard: [
		{
			name: "milk",
			quantity: 2,
			measure: "gallon"
		},
		{
			name: "carrot",
			quantity: 3,
			measure: ""
		}
	]
};

var recipes = [
	{"name": "Homemade Root Beer", "image": "Homemade Root Beer.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 14, "rating": 1, "genre": ["beverage"], "content": {"grains": 2.0, "fruits": 2.0, "vegetables": 1.75, "dairy": 1.25, "protein": 1.0, "calories": 250}, "directions": "Place root beer extract and sugar into a container. Add the water and stir until the sugar is dissolved. Break the dry ice into pieces 2-3 inches in size. Add to the water and let sit about 15 minutes, stirring occasionally.", "ingredients": [
		{"description": "root beer extract", "quantity": "3/2", "measure": "fl oz", "quantityBaseNumeric": 0.1875},
		{"description": "sugar", "quantity": "4", "measure": "c", "quantityBaseNumeric": 4.0},
		{"description": "water", "quantity": "2", "measure": "gal", "quantityBaseNumeric": 32.0},
		{"description": "dry ice", "quantity": "4", "measure": "lb", "quantityBaseNumeric": 1814.368}
	]},
	{"name": "Creamy Chocolate Frosting", "image": "Creamy Chocolate Frosting.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 17, "rating": 4, "genre": ["frosting"], "content": {"grains": 2.25, "fruits": 2.0, "vegetables": 0.75, "dairy": 1.25, "protein": 1.0, "calories": 244}, "directions": "Melt butter in a small saucepan; add chocolate and stir constantly over VERY LOW heat until melted.  Pour into small mixer bowl.  Add remaining ingredients beat until well blended.  Chill until spreading consistency (10 to 15 minutes)", "ingredients": [
		{"description": "butter", "quantity": "3", "measure": "tbsp", "quantityBaseNumeric": 0.1875},
		{"description": "baking chocolate", "quantity": "3", "measure": "oz", "quantityBaseNumeric": 85.04849999999999},
		{"description": "powdered sugar", "quantity": "3", "measure": "c", "quantityBaseNumeric": 3.0},
		{"description": "salt", "quantity": "1/4", "measure": "tsp", "quantityBaseNumeric": 0.005208333333333333},
		{"description": "milk", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "vanilla", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332}
	]},
	{"name": "Wacky Cake", "image": "Wacky Cake.jpg", "isSnack": true, "isBreakfast": true, "isLunch": false, "isDinner": false, "preparationTime": 14, "rating": 2, "genre": ["cake", "dessert"], "content": {"grains": 2.5, "fruits": 1.25, "vegetables": 1.75, "dairy": 0.5, "protein": 1.0, "calories": 344}, "directions": "Mix the sugar, coca, and flour in a bowl. In a separate container mix the water, vinegar, and baking soda. Then add this to the previous mixture. Add the oil, vanilla, and salt and mix well. The mixture will be thin. Put in a greased 9x9 pan and bake at 350&deg; for 25-39 minutes.", "ingredients": [
		{"description": "sugar", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "cocoa", "quantity": "1/4", "measure": "c", "quantityBaseNumeric": 0.25},
		{"description": "flour", "quantity": "3/2", "measure": "c", "quantityBaseNumeric": 1.5},
		{"description": "water", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "vinegar", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "baking soda", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "oil", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "vanilla", "quantity": "3/2", "measure": "tsp", "quantityBaseNumeric": 0.03125},
		{"description": "salt", "quantity": "1", "measure": "pinch", "quantityBaseNumeric": 0.0013020833333333333}
	]},
	{"name": "Banana Bread", "image": "Banana Bread.jpg", "isSnack": true, "isBreakfast": true, "isLunch": true, "isDinner": false, "preparationTime": 15, "rating": 5, "genre": ["bread"], "content": {"grains": 3.0, "fruits": 1.5, "vegetables": 1.75, "dairy": 0.75, "protein": 1.0, "calories": 442}, "directions": "Sift together the flour, baking powder, and baking soda.  Blend everything else except the nuts together until smooth.  Then add the nuts, if desired, and blend for an additional 15 seconds.  Pour over the dry ingredients and stir lightly together.  Bake in a greased bread pan at 350&ordm; for 45 minutes or until done.", "ingredients": [
		{"description": "flour", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "baking powder", "quantity": "3/2", "measure": "tsp", "quantityBaseNumeric": 0.03125},
		{"description": "baking soda", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "eggs", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "shortening", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "sour milk", "quantity": "3/2", "measure": "tbsp", "quantityBaseNumeric": 0.09375},
		{"description": "lemon juice", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "sugar", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "salt", "quantity": "1/4", "measure": "tsp", "quantityBaseNumeric": 0.005208333333333333},
		{"description": "bananas", "quantity": "3", "measure": null, "quantityBaseNumeric": 3.0},
		{"description": "nuts", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0}
	]},
	{"name": "Chicken Enchilada Casserole", "image": "Chicken Enchilada Casserole.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 44, "rating": 3, "genre": ["casserole", "dinner"], "content": {"grains": 2.75, "fruits": 1.25, "vegetables": 1.0, "dairy": 1.0, "protein": 1.0, "calories": 320}, "directions": "Cook chicken and cut into pieces.  Saute the onions and cut each taco shell into 8 pieces.  Mix the soups, broth, onion, and chilies together in a bowl and mix well.  Layer the tortillas, sauce, and cheese in a flat baking dish (create 3 layers, starting with tortillas on the bottom).  Bake at 350&ordm; for 40 minutes", "ingredients": [
		{"description": "chicken", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "onion", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "margarine", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "cream of chicken soup", "quantity": "11", "measure": "oz", "quantityBaseNumeric": 311.8445},
		{"description": "cream of mushroom soup", "quantity": "11", "measure": "oz", "quantityBaseNumeric": 311.8445},
		{"description": "chicken broth", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "tortillas", "quantity": "12", "measure": null, "quantityBaseNumeric": 12.0},
		{"description": "mozzarella cheese", "quantity": "1", "measure": "lb", "quantityBaseNumeric": 453.592},
		{"description": "green chilies", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5}
	]},
	{"name": "Swiss Chicken", "image": "Swiss Chicken.jpg", "isSnack": false, "isBreakfast": false, "isLunch": false, "isDinner": true, "preparationTime": 14, "rating": 5, "genre": ["dinner"], "content": {"grains": 2.25, "fruits": 1.25, "vegetables": 0.75, "dairy": 0.75, "protein": 1.25, "calories": 284}, "directions": "Lightly brown chicken breasts in a frying pan, then place in a 9x13 pan.  Sprinkle with salt and pepper.  Generously cover with the swiss cheese.  Blend the soup and milk and pour it over the chicken/cheese combo.  Bake at 350&deg; for 50-60 minutes.  It can be useful to place a larger pan on a rack below the chicken as it tends to spill over near the end of the cooking time.<br /><br />Serve with rice.", "ingredients": [
		{"description": "swiss cheese", "quantity": "1", "measure": "lb", "quantityBaseNumeric": 453.592},
		{"description": "chicken breasts", "quantity": "5", "measure": null, "quantityBaseNumeric": 5.0},
		{"description": "cream of chicken soup", "quantity": "42", "measure": "oz", "quantityBaseNumeric": 1190.6789999999999},
		{"description": "milk", "quantity": "6/4", "measure": "c", "quantityBaseNumeric": 1.5}
	]},
	{"name": "Chicken Crouton Casserole", "image": "Chicken Crouton Casserole.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 9, "rating": 3, "genre": ["casserole", "dinner"], "content": {"grains": 2.25, "fruits": 1.75, "vegetables": 1.25, "dairy": 0.5, "protein": 1.5, "calories": 345}, "directions": "Cut chicken into chunks about 3/4 inch in size and spread into a 9x13 pan.  Spread soup (don't add water) over chicken pieces, and sprinkle with the cheese.  Sprinkle the (dry) stuffing mix over the cheese, and then pour the water over everything.  Cover with foil and bake for 45 minutes at 350&ordm;.  Uncover for the last 10 minutes.", "ingredients": [
		{"description": "chicken breasts", "quantity": "6", "measure": null, "quantityBaseNumeric": 6.0},
		{"description": "cream of chicken soup", "quantity": "11", "measure": "oz", "quantityBaseNumeric": 311.8445},
		{"description": "cheddar cheese", "quantity": "5/2", "measure": "c", "quantityBaseNumeric": 2.5},
		{"description": "stuffing mix", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "water", "quantity": "5", "measure": "fl oz", "quantityBaseNumeric": 0.625}
	]},
	{"name": "Terikaka Chicken", "image": "Terikaka Chicken.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 27, "rating": 2, "genre": ["dinner"], "content": {"grains": 2.0, "fruits": 1.5, "vegetables": 1.25, "dairy": 1.25, "protein": 1.0, "calories": 267}, "directions": "Mix teriyaki sauce, brown sugar, pineapple juice, and spices in sauce pan. Cut up chicken breasts into 3/4 inch pieces and cook in a pan on the stove. Put chicken into sauce and warm to just under boiling.<br /><br />Serve over rice.", "ingredients": [
		{"description": "kikoman teriyaki sauce", "quantity": "10", "measure": "fl oz", "quantityBaseNumeric": 1.25},
		{"description": "pineapple juice", "quantity": "3/2", "measure": "c", "quantityBaseNumeric": 1.5},
		{"description": "ginger", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "brown sugar", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "garlic powder", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "cornstarch", "quantity": "5/2", "measure": "tbsp", "quantityBaseNumeric": 0.15625}
	]},
	{"name": "Brownies", "image": "Brownies.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 22, "rating": 2, "genre": ["dessert"], "content": {"grains": 2.75, "fruits": 2.0, "vegetables": 1.0, "dairy": 0.5, "protein": 1.25, "calories": 465}, "directions": "In the top of a double boiler melt the margarine and chocolate and still until smooth.  Add the sugar while still on heat.  Remove from heat and add the eggs, 1 at a time.  Be sure to mix them in quickly so you don't end up with pieces of cooked egg in your brownies! Add the flour and vanilla and mix well.  Pour batter into a greased/floured 9x9 pan and bake at 300&ordm; for 25-30 minutes.", "ingredients": [
		{"description": "margarine", "quantity": "1/4", "measure": "lb", "quantityBaseNumeric": 113.398},
		{"description": "baker's chocolate", "quantity": "2", "measure": "oz", "quantityBaseNumeric": 56.699},
		{"description": "sugar", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "eggs", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "flour", "quantity": "1", "measure": "scant cup", "quantityBaseNumeric": 0.9375},
		{"description": "vanilla", "quantity": "1/4", "measure": "tbsp", "quantityBaseNumeric": 0.015625}
	]},
	{"name": "Old Fashioned Soft Sugar Cookies", "image": "Old Fashioned Soft Sugar Cookies.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 13, "rating": 3, "genre": ["cookie", "dessert"], "content": {"grains": 2.0, "fruits": 2.0, "vegetables": 0.75, "dairy": 1.25, "protein": 1.25, "calories": 425}, "directions": "Sift the flour, baking soda, and salt together.  In a large bowl, mix the shortening, sugar, egg, and vanilla.  Beat for about 2 minutes.  Add the sour cream.  Add the flour mixture, and beat until well blended.  Scrape the bowl while beating.<br /><br />Roll our on lightly floured surface to 1/4 inch thickness.  Cut, sprinkle with sugar (if desired).  Put on a greased cookie sheet.<br /><br />Bake at 350&ordm; for 5-8 minutes or until VERY lightly golden brown.  Frost when cool.  Makes about 2 1/2 dozen cookies", "ingredients": [
		{"description": "flour", "quantity": "13/4", "measure": "c", "quantityBaseNumeric": 3.25},
		{"description": "baking soda", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "salt", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "shortening", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "sugar", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "egg", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "vanilla", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "sour cream", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5}
	]},
	{"name": "Soft Chocolate Chip Cookies", "image": "Soft Chocolate Chip Cookies.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 13, "rating": 1, "genre": ["cookie", "dessert"], "content": {"grains": 3.0, "fruits": 2.0, "vegetables": 0.75, "dairy": 1.25, "protein": 1.5, "calories": 445}, "directions": "Cream sugars and shortening.  Add eggs and milk.  Add dry ingredients, vanilla, and chocolate chips.  Bake in a preheated oven at 375&ordm; for 8-12 minutes.  Remove when just starting to brown.<br /><br />Makes AT LEAST 6 dozen.", "ingredients": [
		{"description": "sugar", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "brown sugar", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "shortening", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "eggs", "quantity": "4", "measure": null, "quantityBaseNumeric": 4.0},
		{"description": "milk", "quantity": "2/3", "measure": "c", "quantityBaseNumeric": 0.6666666666666666},
		{"description": "flour", "quantity": "6", "measure": "c", "quantityBaseNumeric": 6.0},
		{"description": "salt", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664},
		{"description": "baking soda", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664},
		{"description": "vanilla", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664},
		{"description": "chocolate chips", "quantity": "12", "measure": "oz", "quantityBaseNumeric": 340.19399999999996}
	]},
	{"name": "Blondie Brownies", "image": "Blondie Brownies.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 15, "rating": 5, "genre": ["cookie", "dessert"], "content": {"grains": 2.75, "fruits": 1.5, "vegetables": 0.75, "dairy": 1.25, "protein": 1.5, "calories": 516}, "directions": "Cream shortening and sugar.  Add eggs and vanilla and beat well.  Sift together flour, baking soda, and salt.  Add to the creamed mixture and mix well.  Add chocolate chips and nuts.<br /><br />Spread in greased 9x13 cake pan and bake at 350&ordm; for 20-25 minutes.", "ingredients": [
		{"description": "shortening", "quantity": "2/3", "measure": "c", "quantityBaseNumeric": 0.6666666666666666},
		{"description": "brown sugar", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "eggs", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "vanilla", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664},
		{"description": "flour", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "baking soda", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "salt", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "chocolate chips", "quantity": "3/4", "measure": "c", "quantityBaseNumeric": 0.75},
		{"description": "nuts", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5}
	]},
	{"name": "Go Man Go", "image": "Go Man Go.jpg", "isSnack": true, "isBreakfast": true, "isLunch": true, "isDinner": true, "preparationTime": 53, "rating": 1, "genre": ["beverage", "smoothie"], "content": {"grains": 2.0, "fruits": 1.25, "vegetables": 1.75, "dairy": 1.0, "protein": 1.0, "calories": 445}, "directions": "In a large blender, add the juices, then banana, then frozen ingredients.  Blend until smooth (start slow and increase the speed over time).  Takes about 40 seconds to blend", "ingredients": [
		{"description": "orange juice", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "mango juice", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "banana", "quantity": "1/2", "measure": null, "quantityBaseNumeric": 0.5},
		{"description": "mango chunks", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "strawberries", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0}
	]},
	{"name": "Sunny Side Up", "image": "Sunny Side Up.jpg", "isSnack": true, "isBreakfast": true, "isLunch": true, "isDinner": true, "preparationTime": 4, "rating": 4, "genre": ["beverage", "smoothie"], "content": {"grains": 2.5, "fruits": 1.25, "vegetables": 1.0, "dairy": 0.75, "protein": 1.25, "calories": 427}, "directions": "Add the juice, then banana, then mango and pineapple chunks to a blender and blend on high speed until smooth", "ingredients": [
		{"description": "orange juice", "quantity": "3/2", "measure": "c", "quantityBaseNumeric": 1.5},
		{"description": "banana", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "mango chunks", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "pineapple chunks", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0}
	]},
	{"name": "Peach Cherry Smoothie", "image": "Peach Cherry Smoothie.jpg", "isSnack": true, "isBreakfast": true, "isLunch": true, "isDinner": true, "preparationTime": 32, "rating": 3, "genre": ["beverage", "smoothie"], "content": {"grains": 2.0, "fruits": 2.0, "vegetables": 1.5, "dairy": 1.25, "protein": 1.0, "calories": 319}, "directions": "Add ingredients in the order listed and blend until smooth", "ingredients": [
		{"description": "peach juice", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "banana", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "peach chunks", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "dark cherries", "quantity": "3/2", "measure": "c", "quantityBaseNumeric": 1.5}
	]},
	{"name": "Waffles", "image": "Waffles.jpg", "isSnack": false, "isBreakfast": true, "isLunch": true, "isDinner": true, "preparationTime": 32, "rating": 2, "genre": ["breakfast"], "content": {"grains": 2.25, "fruits": 1.5, "vegetables": 1.25, "dairy": 0.5, "protein": 1.5, "calories": 397}, "directions": "In a large bowl, sift together: flour, baking powder, salt, and sugar.  Put eggs in small mixer bowl.  Beat on high speed for 1 minute.  Add milk and vanilla.  Add the milk and egg mixture to dry ingredients.  Beat until blended.  Mix in oil.  Bake in preheated waffle maker.  Makes 4 full size four-section waffles.", "ingredients": [
		{"description": "flour", "quantity": "3", "measure": "c", "quantityBaseNumeric": 3.0},
		{"description": "baking powder", "quantity": "5", "measure": "tsp", "quantityBaseNumeric": 0.10416666666666666},
		{"description": "salt", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "sugar", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "eggs", "quantity": "4", "measure": null, "quantityBaseNumeric": 4.0},
		{"description": "milk", "quantity": "9/4", "measure": "c", "quantityBaseNumeric": 2.25},
		{"description": "vanilla", "quantity": "3/2", "measure": "tsp", "quantityBaseNumeric": 0.03125},
		{"description": "oil", "quantity": "2/3", "measure": "c", "quantityBaseNumeric": 0.6666666666666666}
	]},
	{"name": "Vanilla Ice Cream", "image": "Vanilla Ice Cream.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 44, "rating": 4, "genre": ["dessert", "ice cream"], "content": {"grains": 3.0, "fruits": 1.75, "vegetables": 1.0, "dairy": 1.25, "protein": 1.25, "calories": 469}, "directions": "Beat eggs and add to sugar - beating well to blend.  Mix and beat until foamy.  Add remaining ingredients and blend well.  Pour into freezer and add milk (the amount is approximate).  Freeze as directed by manufacturer.<br /><br />Makes 4 quarts", "ingredients": [
		{"description": "eggs", "quantity": "5", "measure": null, "quantityBaseNumeric": 5.0},
		{"description": "sugar", "quantity": "3", "measure": "c", "quantityBaseNumeric": 3.0},
		{"description": "cream", "quantity": "1", "measure": "pt", "quantityBaseNumeric": 2.0},
		{"description": "evaporated milk", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "salt", "quantity": "1/4", "measure": "tsp", "quantityBaseNumeric": 0.005208333333333333},
		{"description": "vanilla", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "milk", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0}
	]},
	{"name": "Honey-n-Chicken", "image": "Honey-n-Chicken.jpg", "isSnack": false, "isBreakfast": false, "isLunch": false, "isDinner": true, "preparationTime": 27, "rating": 1, "genre": ["dinner", "dutch oven"], "content": {"grains": 2.25, "fruits": 1.75, "vegetables": 1.0, "dairy": 0.5, "protein": 1.0, "calories": 271}, "directions": "Mix soy sauce, onion, garlic, and ginger.  Put into bag along with chicken and let sit 1 to 2 hours.  Put oil into dutch oven, then chicken.  Mix honey into sauce and add to the dutch oven.  Bake for 1 hour at 350&ordm; (6 to 10 coals bottom, 14 to 18 top).  Turn often.", "ingredients": [
		{"description": "chickens", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "onion", "quantity": "1/4", "measure": "c", "quantityBaseNumeric": 0.25},
		{"description": "garlic", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "oil", "quantity": "1", "measure": "tbsp", "quantityBaseNumeric": 0.0625},
		{"description": "ginger", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "honey", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "soy sauce", "quantity": "3/4", "measure": "c", "quantityBaseNumeric": 0.75}
	]},
	{"name": "Dutch Oven Potatoes", "image": "Dutch Oven Potatoes.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 36, "rating": 3, "genre": ["dutch oven", "side dish"], "content": {"grains": 2.25, "fruits": 2.0, "vegetables": 1.75, "dairy": 1.0, "protein": 1.0, "calories": 461}, "directions": "Fry bacon in dutch oven until nearly crisp.  Add onions and saute' for 2 to 3 minutes.  Add potatoes and mix together very well.  Cover and remove from heat.  Completely cover the lid with coals (the bigger the pile, the better).  Bake for 45 to 50 minutes, or until tender", "ingredients": [
		{"description": "bacon", "quantity": "1/4", "measure": "lb", "quantityBaseNumeric": 113.398},
		{"description": "onions", "quantity": "3", "measure": null, "quantityBaseNumeric": 3.0},
		{"description": "potatoes", "quantity": "8", "measure": "c", "quantityBaseNumeric": 8.0}
	]},
	{"name": "Chicken Potato Carrot Casserole", "image": "Chicken Potato Carrot Casserole.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 38, "rating": 5, "genre": ["dinner", "dutch oven"], "content": {"grains": 2.75, "fruits": 1.75, "vegetables": 1.25, "dairy": 0.5, "protein": 1.25, "calories": 437}, "directions": "Saute the onion in the margarine in a large dutch oven. Add the potatoes, carrots, and chicken and mix well.  Cook at 350 or hotter.  The hotter it is cooked the better it turns out.  Preferably cook in a fire rather than with coals.  Cook until done, stirring occasionally (30 minutes to an hour, based on cooking temperature)", "ingredients": [
		{"description": "chicken", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "onion", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "margarine", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "carrots", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "potatoes", "quantity": "6", "measure": "c", "quantityBaseNumeric": 6.0}
	]},
	{"name": "Simple Ragu", "image": "Simple Ragu.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 5, "rating": 2, "genre": ["dinner", "pasta", "sauce"], "content": {"grains": 3.0, "fruits": 2.0, "vegetables": 0.75, "dairy": 0.75, "protein": 1.5, "calories": 503}, "directions": "Chop the celery, carrot, and onion into small pieces.  In a large frying pan, combine the oil and the chopped vegetables.  Cook over medium heat until the onion becomes transparent.  Add the ground beef (you can substitute sausage or any other ground meat), peperoncini, and pepper.  Continue cooking until the meat is browned.  Add the tomato puree, sugar, salt, and basil let simmer for at least 30 minutes, but a few hours is better.", "ingredients": [
		{"description": "ground beef", "quantity": "200", "measure": "g", "quantityBaseNumeric": 200.0},
		{"description": "celery", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "carrot", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "onion", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "olive oil", "quantity": "20", "measure": "ml", "quantityBaseNumeric": 0.02},
		{"description": "tomato puree", "quantity": "700", "measure": "g", "quantityBaseNumeric": 700.0},
		{"description": "sugar", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664},
		{"description": "salt", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "peperoncini", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "black pepper", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "basil leaves", "quantity": "6", "measure": null, "quantityBaseNumeric": 6.0}
	]},
	{"name": "Carbonara", "image": "Carbonara.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 56, "rating": 3, "genre": ["dinner", "pasta"], "content": {"grains": 2.25, "fruits": 1.25, "vegetables": 1.0, "dairy": 0.75, "protein": 1.0, "calories": 433}, "directions": "Cut the bacon into small pieces, and dice the onion.  In a frying pan, combine the oil, bacon, and onion.  Cook until the bacon is mostly done.  Reduce heat to low and add half the basil and half the salt.  Continue cooking until the pasta is done, checking frequently to make sure it isn't burning (if it starts to, just turn it off, but be sure it is warm before using).<br /><br />In a large pot, bring enough water to a boil to cook the pasta.  The general rule is 1 liter of water, 100 grams pasta, 10 grams salt.  When it comes to a boil, add the pasta plus the salt (based on the previous formula -- using the amount of water, not pasta).<br /><br />While the pasta is cooking, mix the egg, cream, cheese, and the remaining basil and pepper.  When the pasta is done, strain and immediately dump it back into the pan.  Add the bacon mixture and the egg mixture and stir.  Turn the burner to medium low and stir constantly until the egg mixture is cooked.  You still want it to be creamy, but not raw.<br /><br />Serve immediately.", "ingredients": [
		{"description": "bacon", "quantity": "3/4", "measure": "lb", "quantityBaseNumeric": 340.19399999999996},
		{"description": "onion", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "pasta", "quantity": "500", "measure": "g", "quantityBaseNumeric": 500.0},
		{"description": "eggs", "quantity": "6", "measure": null, "quantityBaseNumeric": 6.0},
		{"description": "parmigiano reggiano", "quantity": "125", "measure": "g", "quantityBaseNumeric": 125.0},
		{"description": "cream", "quantity": "100", "measure": "ml", "quantityBaseNumeric": 0.1},
		{"description": "basil", "quantity": "1", "measure": "tbsp", "quantityBaseNumeric": 0.0625},
		{"description": "pepper", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664},
		{"description": "olive oil", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664}
	]},
	{"name": "Turkey Feather Rolls", "image": "Turkey Feather Rolls.jpg", "isSnack": true, "isBreakfast": true, "isLunch": true, "isDinner": true, "preparationTime": 52, "rating": 2, "genre": ["bread"], "content": {"grains": 2.0, "fruits": 1.75, "vegetables": 1.25, "dairy": 0.75, "protein": 1.25, "calories": 356}, "directions": "In large mixing bowl combine flour (part 1) and yeast.<br />Heat milk, sugar, shortening, and salt -- just until warm -- stirring constantly till shortening almost melts.  Add to dry mixture, and mix.  Add eggs and beat at low speed with an electric mixer for 30 seconds, scraping bowl.  Beat 3 minutes at high speed.  By hand, stir in flour (part 2) to make a soft dough.  Knead on lightly floured surface until smooth and elastic, 5-8 minutes.  Shape in a ball.<br /><br />Place in greased bowl; turn once.  Cover; let rise in warm place until doubled in size, about 2.25 hours.  (A warm oven is a good place to let the dough raise.)  Punch dough down; divide into thirds.  Cover, let rest 10 minutes.  On floured surface roll each third of dough to a 12-inch circle.  Cut each circle into 12 triangles and then roll each triangle up into a crescent shape.  Arrange, point down, on greased baking sheets.  Brush with melted butter.  Cover; let rise until very light, about 1 hour.<br /><br />Bake at 400&deg; for 8-12 minutes.  Makes 3 dozen rolls.", "ingredients": [
		{"description": "flour", "quantity": "5/2", "measure": "c", "quantityBaseNumeric": 2.5},
		{"description": "yeast", "quantity": "1", "measure": "tbsp", "quantityBaseNumeric": 0.0625},
		{"description": "milk", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "sugar", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "shortening", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "salt", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664},
		{"description": "eggs", "quantity": "3", "measure": null, "quantityBaseNumeric": 3.0},
		{"description": "flour", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0}
	]},
	{"name": "Cool Lime Pie", "image": "Cool Lime Pie.jpg", "isSnack": true, "isBreakfast": true, "isLunch": false, "isDinner": false, "preparationTime": 46, "rating": 5, "genre": ["dessert", "pie"], "content": {"grains": 3.0, "fruits": 2.0, "vegetables": 1.5, "dairy": 0.75, "protein": 1.25, "calories": 450}, "directions": "Combine pie filling mix, gelatin, sugar and water in saucepan.  Cook and stir over medium heat until mixture comes to a full boil.  Add lime rind and juice.  Pour into bowl, cover with plastic wrap and chill until cold and slightly thickened.  Fold in the whipped topping.  Spoon into crust.  Freeze 1 hour or chill in refrigerator 3 hours before serving.  Garnish with whipped topping and lime slices, if desired.", "ingredients": [
		{"description": "vanilla pudding mix", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "lime gelatin", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "water", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "sugar", "quantity": "1/4", "measure": "c", "quantityBaseNumeric": 0.25},
		{"description": "lime rind", "quantity": "3/2", "measure": "tsp", "quantityBaseNumeric": 0.03125},
		{"description": "lime juice", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "cool whip", "quantity": "5/2", "measure": "c", "quantityBaseNumeric": 2.5},
		{"description": "oreo pie crust", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0}
	]},
	{"name": "Cream Puffs", "image": "Cream Puffs.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 56, "rating": 5, "genre": ["dessert", "pastry"], "content": {"grains": 3.0, "fruits": 1.75, "vegetables": 0.75, "dairy": 1.25, "protein": 1.25, "calories": 355}, "directions": "Add shortening and salt to boiling water and heat to boiling; reduce heat.  Add flour all at once and stir vigorously until mixture forms ball around spoon, leaving pan clean.  Remove from heat.  Add eggs one at a time, beating very thoroughly after each addition.  Continue beating until mixture is thick and shiny and breaks from spoon.  Shape on ungreased cookie sheet using one teaspoon or one tablespoon of pastry for each one for one puff.  Bake at 450&deg; for 20 minutes.  Reduce heat to 350&deg; and bake about 20 minutes longer.  Cool.  Make slit on one side of each puff and fill with pudding or custard.  Makes 1 dozen large.", "ingredients": [
		{"description": "shortening", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "flour", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "salt", "quantity": "1/8", "measure": "tsp", "quantityBaseNumeric": 0.0026041666666666665},
		{"description": "eggs", "quantity": "4", "measure": null, "quantityBaseNumeric": 4.0},
		{"description": "water", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0}
	]},
	{"name": "Pastry Custard", "image": "Pastry Custard.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 12, "rating": 4, "genre": ["dessert", "pastry"], "content": {"grains": 2.25, "fruits": 1.5, "vegetables": 0.75, "dairy": 0.75, "protein": 1.5, "calories": 253}, "directions": "Mix flour, sugar, and salt in top of a double boiler.  Add milk, slowly blending until smooth.  Heat and stir over direct medium heat until thickened and smooth.  Mix about 1/6 of the hot mixture into eggs, then return to pan.  Set over simmering water and cook, stirring for 2 to 3 minutes until thick.  Off heat, stir in vanilla.  Place a piece of wax paper flat on sauce to prevent a skin from forming and cool.  Stir well, cover, and chill until ready to use.", "ingredients": [
		{"description": "flour", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "eggs", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "egg yolks", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "sugar", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "salt", "quantity": "1/8", "measure": "tsp", "quantityBaseNumeric": 0.0026041666666666665},
		{"description": "milk", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "vanilla", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332}
	]},
	{"name": "Ghosts in the Graveyard Cake", "image": "Ghosts in the Graveyard Cake.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 33, "rating": 2, "genre": ["cake", "dessert"], "content": {"grains": 2.75, "fruits": 1.75, "vegetables": 1.25, "dairy": 1.0, "protein": 1.5, "calories": 374}, "directions": "Prepare pudding as directed on package using only the milk indicated in this recipe; let stand 5 minutes.  Stir in the whipped topping and 1/2 of the crushed cookies.  Spoon into 13x9inch baking dish.  Sprinkle with remaining crushed cookies.  <br />Refrigerate for 1 hour.  Decorate with candy, rectangular sandwich cookies (tombstones), and spoonfuls of whipped topping (ghosts).", "ingredients": [
		{"description": "instant chocolate pudding mix", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "milk", "quantity": "7/2", "measure": "c", "quantityBaseNumeric": 3.5},
		{"description": "cool whip", "quantity": "3", "measure": "c", "quantityBaseNumeric": 3.0},
		{"description": "oreos", "quantity": "16", "measure": "oz", "quantityBaseNumeric": 453.592}
	]},
	{"name": "Butter Frosting", "image": "Butter Frosting.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 55, "rating": 4, "genre": ["frosting"], "content": {"grains": 2.75, "fruits": 1.5, "vegetables": 1.75, "dairy": 1.25, "protein": 1.5, "calories": 205}, "directions": "Cream butter.  Add remaining ingredients (adjust cream to get desired frosting consistency) and continue creaming until mixture is well blended and fluffy.  Will cover tops and sides of 2 (8-inch) layers.  (Cut recipe in half for a flat 9-by-13-inch cake)", "ingredients": [
		{"description": "butter", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "powdered sugar", "quantity": "3", "measure": "c", "quantityBaseNumeric": 3.0},
		{"description": "cream", "quantity": "5/2", "measure": "tbsp", "quantityBaseNumeric": 0.15625},
		{"description": "vanilla", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332}
	]},
	{"name": "Cherry Frosting", "image": "Cherry Frosting.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 48, "rating": 3, "genre": ["frosting"], "content": {"grains": 2.75, "fruits": 1.5, "vegetables": 0.75, "dairy": 0.75, "protein": 1.25, "calories": 502}, "directions": "Combine margarine, salt, vanilla, and about 1/2 the sugar.  Blend in cherry juice.  Add milk and rest of sugar alternately; mix until smooth and creamy.  Add more sugar to thicken or milk to thin if needed for good spreading consistency.", "ingredients": [
		{"description": "shortening or margarine", "quantity": "1/3", "measure": "c", "quantityBaseNumeric": 0.3333333333333333},
		{"description": "salt", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "powdered sugar", "quantity": "7/2", "measure": "c", "quantityBaseNumeric": 3.5},
		{"description": "vanilla", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "maraschino cherry juice", "quantity": "3", "measure": "tbsp", "quantityBaseNumeric": 0.1875},
		{"description": "milk", "quantity": "3", "measure": "tbsp", "quantityBaseNumeric": 0.1875}
	]},
	{"name": "Gyoza", "image": "Gyoza.jpg", "isSnack": true, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 36, "rating": 1, "genre": ["dinner"], "content": {"grains": 2.0, "fruits": 1.75, "vegetables": 1.0, "dairy": 0.5, "protein": 1.25, "calories": 531}, "directions": "Mix pork, cabbage, green onion, onion and ginger by hand. In a separate bowl, mix the sugar, soy sauce, salt, oil, pepper, and corn starch. Then add to meat mixture. Mix together lightly. Put about 1 spoonful (depending on wrap size) of the meat mixture on the wrap. Fold in half and wet edges so that they stick together.<br />Cook in frying pan on medium to medium high heat with a little peanut oil, turning occasionally until meat is cooked. Eat while still warm.<br />Makes about 60 gyoza if you are good at packing in the meat mixture, or 120 if you are average.", "ingredients": [
		{"description": "ground pork", "quantity": "3/2", "measure": "lb", "quantityBaseNumeric": 680.3879999999999},
		{"description": "cabbage", "quantity": "1/4", "measure": null, "quantityBaseNumeric": 0.25},
		{"description": "green onion", "quantity": "3/2", "measure": null, "quantityBaseNumeric": 1.5},
		{"description": "onion", "quantity": "1/2", "measure": null, "quantityBaseNumeric": 0.5},
		{"description": "ginger piece", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "sugar", "quantity": "3", "measure": "tbsp", "quantityBaseNumeric": 0.1875},
		{"description": "soy sauce", "quantity": "1", "measure": "tbsp", "quantityBaseNumeric": 0.0625},
		{"description": "salt", "quantity": "3/4", "measure": "tsp", "quantityBaseNumeric": 0.015625},
		{"description": "sesame oil", "quantity": "3", "measure": "tbsp", "quantityBaseNumeric": 0.1875},
		{"description": "pepper", "quantity": "1", "measure": "pinch", "quantityBaseNumeric": 0.0013020833333333333},
		{"description": "corn starch", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "egg roll wraps", "quantity": "120", "measure": null, "quantityBaseNumeric": 120.0}
	]},
	{"name": "Oven-Fried Chicken", "image": "Oven-Fried Chicken.jpg", "isSnack": false, "isBreakfast": false, "isLunch": false, "isDinner": true, "preparationTime": 4, "rating": 5, "genre": ["dinner"], "content": {"grains": 3.0, "fruits": 1.25, "vegetables": 1.5, "dairy": 1.0, "protein": 1.5, "calories": 573}, "directions": "Combine flour, salt, pepper, and paprika.  Roll each piece of chicken in flour mixture until well coated.  Meanwhile, melt butter in large baking pan and heat oven to 400&ordm;.  Put chicken in hot butter skin side down.  Bake uncovered for 30 minutes.  Turn chicken and bake 30 minutes longer, or until well browned.", "ingredients": [
		{"description": "flour", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "paprika", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "salt", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664},
		{"description": "butter", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "pepper", "quantity": "1/4", "measure": "tsp", "quantityBaseNumeric": 0.005208333333333333},
		{"description": "chicken", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0}
	]},
	{"name": "Potato Carrot Casserole", "image": "Potato Carrot Casserole.jpg", "isSnack": false, "isBreakfast": false, "isLunch": false, "isDinner": true, "preparationTime": 19, "rating": 4, "genre": ["casserole", "dinner"], "content": {"grains": 2.5, "fruits": 1.25, "vegetables": 1.75, "dairy": 0.5, "protein": 1.25, "calories": 383}, "directions": "Brown hamburger with onion.  Drain grease.   Put the browned hamburger in a greased casserole dish.  Peel potatoes and grate them up. Put the grated potatoes on top of the hamburger/onion mixture and sprinkle with salt and pepper.  Peel carrots and grate them up.  Put the grated carrots on top of the potatoes and sprinkle with salt and pepper.  If you want to put some bacon slices on top of the potatoes you can or if you don't want to, then you don't have to, but then I would leave a little grease in the hamburger if you are not going to use bacon.<br /><br />Cover the casserole with foil and cook at 400&deg; for 45 minutes to an hour depending.  Casserole is done when you can put a fork in it and the potatoes and carrots are tender.", "ingredients": [
		{"description": "hamburger", "quantity": "1", "measure": "lb", "quantityBaseNumeric": 453.592},
		{"description": "onion", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "potatoes", "quantity": "10", "measure": null, "quantityBaseNumeric": 10.0},
		{"description": "carrots", "quantity": "4", "measure": null, "quantityBaseNumeric": 4.0},
		{"description": "bacon", "quantity": "1/2", "measure": "lb", "quantityBaseNumeric": 226.796}
	]},
	{"name": "Scalloped Potatoes", "image": "Scalloped Potatoes.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 18, "rating": 3, "genre": ["side dish"], "content": {"grains": 3.0, "fruits": 1.75, "vegetables": 1.25, "dairy": 1.25, "protein": 1.0, "calories": 491}, "directions": "Sauce:<br />Cook onion in margarine until tender.  Stir in flour, salt, and pepper.  Add milk all at once.  Cook and stir until thickened and bubbly.  Remove from heat.<br /><br />Peel and slice the potatoes (about 2-3 mm thick). Place half the slices of potatoes in a greased 1 quart casserole dish.  Cover with half the sauce.  Add the remaining potatoes and then the remaining sauce.  Optionally you can try to stir it up at this point (I prefer to mix it, but technically you don't have to).<br /><br />Bake covered at 350&deg; for 35 minutes.  Uncover; bake 35 minutes more or until potatoes are tender.", "ingredients": [
		{"description": "onion", "quantity": "1/4", "measure": "c", "quantityBaseNumeric": 0.25},
		{"description": "butter", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "flour", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "milk", "quantity": "5/4", "measure": "c", "quantityBaseNumeric": 1.25},
		{"description": "potatoes", "quantity": "3", "measure": null, "quantityBaseNumeric": 3.0},
		{"description": "salt", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "pepper", "quantity": "1/8", "measure": "tsp", "quantityBaseNumeric": 0.0026041666666666665}
	]},
	{"name": "Twice-Baked Potatoes", "image": "Twice-Baked Potatoes.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 20, "rating": 5, "genre": ["side dish"], "content": {"grains": 2.5, "fruits": 2.0, "vegetables": 0.75, "dairy": 1.0, "protein": 1.5, "calories": 354}, "directions": "Bake the potatoes.  Cut off a small top section from each potato.  Scoop out potato pulp and put into a mixing bowl.  Add butter, milk, 2/3 of the cheese (optional), salt, and pepper to the potato pulp.  Mash until well blended.  Scoop potato mixture into potato shells.  Place stuffed potatoes in a baking dish.  (If you have a microwave, cover with plastic wrap and microwave on high for 2 minutes.)  If no microwave, you would heat for a few minutes in the oven until warm enough.  Sprinkle with remaining cheese, if desired.", "ingredients": [
		{"description": "potatoes", "quantity": "4", "measure": null, "quantityBaseNumeric": 4.0},
		{"description": "butter", "quantity": "1/4", "measure": "c", "quantityBaseNumeric": 0.25},
		{"description": "milk", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "salt", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "pepper", "quantity": "1", "measure": "dash", "quantityBaseNumeric": 0.0026041666666666665},
		{"description": "cheese", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5}
	]},
	{"name": "Sweet and Sour Meatballs", "image": "Sweet and Sour Meatballs.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 50, "rating": 4, "genre": ["dinner"], "content": {"grains": 2.5, "fruits": 1.5, "vegetables": 1.25, "dairy": 0.75, "protein": 1.5, "calories": 232}, "directions": "Combine ground beef, onion, crumbs, salt, pepper, and egg; mix well.  Shape into 1-inch balls.  Brown in hot oil, turning occasionally.  Drain pineapple, reserving 1/2 cup syrup (per 20 oz pineapple).  Add sugar and cornstarch to browned meatballs in frying pan.  Stir in soy sauce, vinegar, water, and pineapple syrup.  Cook, stirring constantly, until mixture boils and thickens.  Add green pepper and pineapple.  Cover and simmer for 15 to 20 minutes.  Serve over fluffy rice.", "ingredients": [
		{"description": "hamburger", "quantity": "1", "measure": "lb", "quantityBaseNumeric": 453.592},
		{"description": "onion", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "cracker crumbs", "quantity": "1/4", "measure": "c", "quantityBaseNumeric": 0.25},
		{"description": "salt", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "pepper", "quantity": "1/8", "measure": "tsp", "quantityBaseNumeric": 0.0026041666666666665},
		{"description": "egg", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "oil", "quantity": "1", "measure": "tbsp", "quantityBaseNumeric": 0.0625},
		{"description": "pineapple chunks", "quantity": "20", "measure": "oz", "quantityBaseNumeric": 566.99},
		{"description": "sugar", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "corn starch", "quantity": "1", "measure": "tbsp", "quantityBaseNumeric": 0.0625},
		{"description": "soy sauce", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "vinegar", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "water", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "green peppers", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0}
	]},
	{"name": "Pistachio Salad", "image": "Pistachio Salad.jpg", "isSnack": true, "isBreakfast": true, "isLunch": false, "isDinner": false, "preparationTime": 37, "rating": 3, "genre": ["side dish"], "content": {"grains": 2.75, "fruits": 1.75, "vegetables": 1.5, "dairy": 1.25, "protein": 1.0, "calories": 270}, "directions": "Mix the pudding mix and the pineapple (with syrup) together.  Add the rest of the ingredients and mix well.  Keep refrigerated until ready to serve.", "ingredients": [
		{"description": "pistachio pudding mix", "quantity": "4", "measure": "oz", "quantityBaseNumeric": 113.398},
		{"description": "crushed pineapple", "quantity": "20", "measure": "oz", "quantityBaseNumeric": 566.99},
		{"description": "marshmallows", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "nuts", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "cool whip", "quantity": "8", "measure": "oz", "quantityBaseNumeric": 226.796}
	]},
	{"name": "Focaccia alle Cipolle", "image": "Focaccia alle Cipolle.jpg", "isSnack": true, "isBreakfast": true, "isLunch": true, "isDinner": false, "preparationTime": 12, "rating": 2, "genre": ["bread"], "content": {"grains": 2.25, "fruits": 1.25, "vegetables": 1.5, "dairy": 0.5, "protein": 1.5, "calories": 527}, "directions": "Dough<br />In a small cup put some of the water.  Add the yeast and sugar.  Stir until the yeast is dissolved in the water.  Let rest for 1 to 2 minutes.  Place the flour in a large mixing bowl, and then add the yeast mixture and the rest of the water.  Mix until the liquid is mostly gone, and then add the salt and extra virgin olive oil (first amount).  Mix until the dough is soft and elastic (about 12 - 15 minutes at medium speed).  Let rise for 60 minutes, covered.<br /><br />Brush the top with some olive oil, and let raise an additional 15 minutes, covered.<br /><br />Gently work the dough, then let rise another 15 minutes.  In the meantime prepare the topping as follows.<br /><br />Topping<br />Slice the onions into thin slices, and fry them in some olive oil over medium heat until the onions are soft.  Salt them and add the red pepper.<br /><br />Dough, continued<br />Grease a pan with olive oil, and spread the dough out on it.  The dough should be between 1 and 2 cm thick.  Spread the topping over it, and brush with seasoning (3 parts olive oil, 1 part water, pinch of salt).  Let rest for about 30 minutes.  During this time preheat the oven to 220 &ordm;C (430 &ordm;F).<br /><br />Cook for about 20 minutes.  Remove from oven and brush immediately with the seasoning.", "ingredients": [
		{"description": "flour", "quantity": "500", "measure": "g", "quantityBaseNumeric": 500.0},
		{"description": "water", "quantity": "300", "measure": "ml", "quantityBaseNumeric": 0.3},
		{"description": "yeast", "quantity": "20", "measure": "g", "quantityBaseNumeric": 20.0},
		{"description": "sugar", "quantity": "10", "measure": "g", "quantityBaseNumeric": 10.0},
		{"description": "extra virgin olive oil", "quantity": "25", "measure": "ml", "quantityBaseNumeric": 0.025},
		{"description": "salt", "quantity": "10", "measure": "g", "quantityBaseNumeric": 10.0},
		{"description": "onion", "quantity": "300", "measure": "g", "quantityBaseNumeric": 300.0},
		{"description": "red pepper", "quantity": "1", "measure": "pinch", "quantityBaseNumeric": 0.0013020833333333333},
		{"description": "olive oil", "quantity": "-150", "measure": null, "quantityBaseNumeric": -150.0}
	]},
	{"name": "Gelato al Cioccolato", "image": "Gelato al Cioccolato.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 27, "rating": 1, "genre": ["dessert", "ice cream"], "content": {"grains": 2.5, "fruits": 1.75, "vegetables": 1.0, "dairy": 1.0, "protein": 1.25, "calories": 494}, "directions": "Combine the milk and sugar in a small pot.  Bring to a boil, stirring constantly.  Add the cocoa and the chocolate.  Remove from heat and stir until the chocolate is completely melted and the mixture has thickened slightly.  Let cool for 20 minutes.<br /><br />Whip the cream to peaks, and then fold in the chocolate mixture.  Place in the freezer for 4 hours, stirring at least once every hour; alternately freeze in a gelatiera.", "ingredients": [
		{"description": "milk", "quantity": "6", "measure": "dl", "quantityBaseNumeric": 0.6000000000000001},
		{"description": "cane sugar", "quantity": "120", "measure": "g", "quantityBaseNumeric": 120.0},
		{"description": "cocoa", "quantity": "60", "measure": "g", "quantityBaseNumeric": 60.0},
		{"description": "dark chocolate", "quantity": "200", "measure": "g", "quantityBaseNumeric": 200.0},
		{"description": "whipping cream", "quantity": "3", "measure": "dl", "quantityBaseNumeric": 0.3}
	]},
	{"name": "Pastry Cream", "image": "Pastry Cream.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 11, "rating": 5, "genre": ["dessert", "pastry"], "content": {"grains": 3.0, "fruits": 2.0, "vegetables": 0.75, "dairy": 1.25, "protein": 1.25, "calories": 284}, "directions": "Peel the lemon with a potato peeler, being careful to only peel off the yellow portion.  Bring the milk, 1/2 the sugar, lemon peel, vanilla, and salt to a boil.<br /><br />In a separate dish, beat the egg yolks with the other half of the sugar.  Mix in the flour.  Remove the lemon peel from the milk and add the egg mixture.<br /><br />Continue cooking the milk/egg mixture, mixing carefully with a whisk.  As it gets closer to boiling, increase the speed you stir it.  Once it begins to boil continue cooking it for about 1 minute.<br /><br />Turn down heat to medium and continue to cook until the cream is the consistency you want for what you are making.<br /><br />Remove from heat, and add the butter if desired.  Stir until the butter is mixed in well.", "ingredients": [
		{"description": "milk", "quantity": "5", "measure": "dl", "quantityBaseNumeric": 0.5},
		{"description": "powdered sugar", "quantity": "175", "measure": "g", "quantityBaseNumeric": 175.0},
		{"description": "lemon", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "vanilla bean", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "flour", "quantity": "40", "measure": "g", "quantityBaseNumeric": 40.0},
		{"description": "butter", "quantity": "30", "measure": "g", "quantityBaseNumeric": 30.0},
		{"description": "salt", "quantity": "1", "measure": "pinch", "quantityBaseNumeric": 0.0013020833333333333},
		{"description": "eggs", "quantity": "4", "measure": null, "quantityBaseNumeric": 4.0}
	]},
	{"name": "Red Sauce", "image": "Red Sauce.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 22, "rating": 4, "genre": ["dinner", "pasta", "sauce"], "content": {"grains": 2.5, "fruits": 1.5, "vegetables": 0.75, "dairy": 0.75, "protein": 1.5, "calories": 516}, "directions": "Chop the onion, carrot, and celery into small pieces.  Combine them in a frying pan with the oil.  Saute over medium heat until the vegetables are cooked, then add the salt, basil, and sugar and stir.  Let simmer over low to medium heat for at least 20 minutes, stirring occasionally.", "ingredients": [
		{"description": "tomato puree", "quantity": "500", "measure": "g", "quantityBaseNumeric": 500.0},
		{"description": "onion", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "carrot", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "celery", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "salt", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "basil", "quantity": "3/2", "measure": "tsp", "quantityBaseNumeric": 0.03125},
		{"description": "olive oil", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "sugar", "quantity": "2", "measure": "tsp", "quantityBaseNumeric": 0.041666666666666664}
	]},
	{"name": "Amatriciana Sauce", "image": "Amatriciana Sauce.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 36, "rating": 2, "genre": ["dinner", "pasta", "sauce"], "content": {"grains": 2.0, "fruits": 1.25, "vegetables": 1.0, "dairy": 0.75, "protein": 1.0, "calories": 320}, "directions": "In a sauce pan combine the oil and the pancetta (or bacon) cut into small pieces.  Cook until the pancetta is done.  Remove the bacon from the oil and add the onion and the peperoncino.  Once the onion is clear, add the crushed tomato (this should have very little liquid in it).  Add the salt and continue cooking for 5 to 6 minutes.  Stir the pancetta pieces back in.", "ingredients": [
		{"description": "pancetta", "quantity": "200", "measure": "g", "quantityBaseNumeric": 200.0},
		{"description": "tomato", "quantity": "200", "measure": "g", "quantityBaseNumeric": 200.0},
		{"description": "olive oil", "quantity": "250", "measure": "ml", "quantityBaseNumeric": 0.25},
		{"description": "salt", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "onions", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "peperoncini", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0}
	]},
	{"name": "Simple Chocolate Mousse", "image": "Simple Chocolate Mousse.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 57, "rating": 3, "genre": ["dessert"], "content": {"grains": 2.25, "fruits": 1.5, "vegetables": 1.0, "dairy": 0.75, "protein": 1.25, "calories": 521}, "directions": "In a sauce pan combine the chocolate and the water.  Over low heat melt the chocolate, stirring constantly.  Once the chocolate begins to melt, add the butter and continue stirring until the chocolate has melted completely.  Remove from heat and set aside.<br /><br />Separate the egg yolks from the egg whites.  Mix the yolks together with a fork or whisk, and whip the egg whites to stiff peaks.  Mix the egg yolks into the chocolate, then carefully fold in the egg whites.  Once the whites are mixed in, separate the chocolate into serving-sized containers and refrigerate for 6 hours.", "ingredients": [
		{"description": "dark chocolate", "quantity": "200", "measure": "g", "quantityBaseNumeric": 200.0},
		{"description": "eggs", "quantity": "6", "measure": null, "quantityBaseNumeric": 6.0},
		{"description": "butter", "quantity": "30", "measure": "g", "quantityBaseNumeric": 30.0},
		{"description": "water", "quantity": "30", "measure": "ml", "quantityBaseNumeric": 0.03}
	]},
	{"name": "Pizza dough", "image": "Pizza dough.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": true, "preparationTime": 24, "rating": 4, "genre": ["bread"], "content": {"grains": 2.25, "fruits": 1.5, "vegetables": 1.25, "dairy": 0.5, "protein": 1.5, "calories": 568}, "directions": "In a pot, warm the water to 25-30&ordm;C (77-86&ordm;F).  Dump the water into a cup or bowl, and add the yeast and the sugar.  Stir gently and then let sit for 5 minutes.<br /><br />In a mixing bowl combine the flour and the yeast mixture and mix on low speed.  Once the yeast is mostly mixed into the flour, add the salt.  Mix briefly and then add the oil.  Mix on low speed for about 10 minutes.  You should end up with a moist and sticky dough.<br /><br />Cover and let rise in a non-ventilated area at 25-30&ordm;C (77-86&ordm;F) for about an hour (or until doubled in size).  Whatever you don't use can be refrigerated and used within 2 days.", "ingredients": [
		{"description": "flour", "quantity": "500", "measure": "g", "quantityBaseNumeric": 500.0},
		{"description": "water", "quantity": "310", "measure": "g", "quantityBaseNumeric": 310.0},
		{"description": "yeast", "quantity": "12", "measure": "g", "quantityBaseNumeric": 12.0},
		{"description": "sugar", "quantity": "10", "measure": "g", "quantityBaseNumeric": 10.0},
		{"description": "salt", "quantity": "10", "measure": "g", "quantityBaseNumeric": 10.0},
		{"description": "olive oil", "quantity": "30", "measure": "g", "quantityBaseNumeric": 30.0}
	]},
	{"name": "Pizza", "image": "Pizza.jpg", "isSnack": true, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 53, "rating": 5, "genre": ["dinner"], "content": {"grains": 2.5, "fruits": 1.5, "vegetables": 1.25, "dairy": 1.25, "protein": 1.0, "calories": 364}, "directions": "Divide the pizza dough into 4 parts, or enough parts for one part per pan.  Each pizza should be about 26 cm in diameter.<br /><br />Put some oil on each pizza pan.  You want just enough to cover the entire surface (after rubbing it around with your hand).  Place one part of the pizza dough in the center of the pan and begin spreading the dough with your hand until it covers the pan.  It will be very thin.<br /><br />Cover with the tomato (leaving a small amount of crust around the edges).  Sprinkle the oregano and basil on the top.  You may also add other toppings.<br /><br />Grate the mozzarella and sprinkle it on top of the pizza and toppings.<br /><br />Cook for about 15-20 minutes at 250&ordm;C (480&ordm;F).", "ingredients": [
		{"description": "basil", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "oregano", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "olive oil", "quantity": "-1/4", "measure": "c", "quantityBaseNumeric": -0.25},
		{"description": "mozzarella", "quantity": "250", "measure": "g", "quantityBaseNumeric": 250.0},
		{"description": "tomato", "quantity": "250", "measure": "g", "quantityBaseNumeric": 250.0},
		{"description": "pizza dough", "quantity": "450", "measure": "g", "quantityBaseNumeric": 450.0}
	]},
	{"name": "Besciamella", "image": "Besciamella.jpg", "isSnack": false, "isBreakfast": false, "isLunch": false, "isDinner": true, "preparationTime": 4, "rating": 2, "genre": ["pasta", "sauce"], "content": {"grains": 2.25, "fruits": 2.0, "vegetables": 1.25, "dairy": 1.0, "protein": 1.5, "calories": 441}, "directions": "Put the butter in a sauce pan over medium heat.  Once it begins to melt, add the flour.  Stir constantly until the butter is completely melted and the mixture has a golden color (it should be just slightly darker than the yellow color of the butter, but not much).  Add the milk and the nutmeg, stirring constantly.<br /><br />Continue cooking until the desired consistency is reached for the dish you are making.  It will start to thicken rapidly as it approaches boiling.  In general, you will want to heat it to just under boiling.", "ingredients": [
		{"description": "flour", "quantity": "100", "measure": "g", "quantityBaseNumeric": 100.0},
		{"description": "butter", "quantity": "100", "measure": "g", "quantityBaseNumeric": 100.0},
		{"description": "milk", "quantity": "10", "measure": "dl", "quantityBaseNumeric": 1.0},
		{"description": "nutmeg", "quantity": "-500", "measure": "mg", "quantityBaseNumeric": -0.5}
	]},
	{"name": "Ragu alla Bolognese", "image": "Ragu alla Bolognese.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 44, "rating": 1, "genre": ["pasta", "sauce"], "content": {"grains": 2.75, "fruits": 1.5, "vegetables": 1.0, "dairy": 0.5, "protein": 1.5, "calories": 514}, "directions": "Place the mushrooms in the water and let sit.<br /><br />Cut the lard into small pieces and beat it with the blade of a knife that has been heated in boiling water.  Continue until the lard is semi-liquid (something like the consistency of a smoothie).<br /><br />In a sauce pan combine the lard, butter, and the diced vegetables.  Cover and let cook over medium heat for about 10 minutes, stirring frequently.<br /><br />Add the meat and let it brown.  Add the wine and parsley.  Let it simmer for a few minutes, then add the tomato puree and nutmeg.  Salt and pepper to taste.  Also add the sugar (if desired).  Strain the mushrooms but save the water.  Dice the mushrooms and the chicken liver, and add that to the sauce.  Cover and bring to a boil.<br /><br />Reduce the heat and let the sauce simmer for about an hour, stirring occasionally.  Leave the lid slightly open so the steam can escape.<br /><br />Add the water the mushrooms soaked in and continue cooking, uncovered, until the sauce has thickened.", "ingredients": [
		{"description": "ground beef", "quantity": "200", "measure": "g", "quantityBaseNumeric": 200.0},
		{"description": "mushrooms", "quantity": "20", "measure": "g", "quantityBaseNumeric": 20.0},
		{"description": "lard", "quantity": "30", "measure": "g", "quantityBaseNumeric": 30.0},
		{"description": "butter", "quantity": "20", "measure": "g", "quantityBaseNumeric": 20.0},
		{"description": "chicken livers", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0},
		{"description": "onion", "quantity": "1/2", "measure": null, "quantityBaseNumeric": 0.5},
		{"description": "carrot", "quantity": "1/2", "measure": null, "quantityBaseNumeric": 0.5},
		{"description": "celery", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "parsley", "quantity": "1", "measure": null, "quantityBaseNumeric": 1.0},
		{"description": "tomato puree", "quantity": "120", "measure": "g", "quantityBaseNumeric": 120.0},
		{"description": "white wine", "quantity": "1", "measure": "dl", "quantityBaseNumeric": 0.1},
		{"description": "sugar", "quantity": "1", "measure": "pinch", "quantityBaseNumeric": 0.0013020833333333333},
		{"description": "nutmeg", "quantity": "1", "measure": "pinch", "quantityBaseNumeric": 0.0013020833333333333},
		{"description": "salt", "quantity": "-1", "measure": "pinch", "quantityBaseNumeric": -0.0013020833333333333},
		{"description": "pepper", "quantity": "-1", "measure": "pinch", "quantityBaseNumeric": -0.0013020833333333333},
		{"description": "water", "quantity": "-350", "measure": "ml", "quantityBaseNumeric": -0.35000000000000003}
	]},
	{"name": "Lasagne alla Bolognese", "image": "Lasagne alla Bolognese.jpg", "isSnack": false, "isBreakfast": false, "isLunch": false, "isDinner": true, "preparationTime": 6, "rating": 5, "genre": ["dinner", "pasta"], "content": {"grains": 2.75, "fruits": 1.75, "vegetables": 1.0, "dairy": 0.75, "protein": 1.25, "calories": 597}, "directions": "In a 9x13 pan, put a small amount of oil on the bottom of the pan and spread it around.  Then add about 1/6 of the rag&ugrave; and spread it out.  Put down a layer of noodles and top with about 1/5 the besciamella, and spread it to cover the layer.  Add another 6th of the rag&ugrave; and spread it around.  If desired, add some butter.  Then add about 1/5 the cheese.  Continue layering noodles, besciamella, sauce, butter, and cheese.  You should end up with about 5 layers.  You want to end with a layer of cheese on top.<br /><br />For the last layer, mix the besciamella and rag&ugrave; together and apply as a single layer.  Cover with the remaining cheese.<br /><br />Bake at 160&ordm;C (320&ordm;F) for about one hour.  Remove from the oven and let sit for about 10 minutes before serving.", "ingredients": [
		{"description": "besciamella", "quantity": "1", "measure": "kg", "quantityBaseNumeric": 1000.0},
		{"description": "ragù alla bolognese", "quantity": "13/10", "measure": "kg", "quantityBaseNumeric": 1300.0},
		{"description": "parmigiano reggiano", "quantity": "300", "measure": "g", "quantityBaseNumeric": 300.0},
		{"description": "lasagna noodles", "quantity": "600", "measure": "g", "quantityBaseNumeric": 600.0},
		{"description": "butter or olive oil", "quantity": "-120", "measure": "g", "quantityBaseNumeric": -120.0}
	]},
	{"name": "Orange Sauce", "image": "Orange Sauce.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 15, "rating": 3, "genre": ["dinner", "sauce"], "content": {"grains": 2.5, "fruits": 1.75, "vegetables": 0.75, "dairy": 1.0, "protein": 1.25, "calories": 421}, "directions": "Pour 1 1/2 cups water, orange juice, lemon juice, rice vinegar, and soy sauce into a saucepan and set over medium-high heat. Stir in the orange zest, brown sugar, ginger, garlic, chopped onion, and red pepper flakes. Bring to a boil.  Let boil for 5 to 10 minutes.<br /><br />Store in the fridge for use later, or use immediately.<br /><br />Before use, add cornstarch (either mix with a little water or with some of the sauce in a separate bowl and add to the rest).  Bring to a boil to thicken.", "ingredients": [
		{"description": "water", "quantity": "3/2", "measure": "c", "quantityBaseNumeric": 1.5},
		{"description": "orange juice", "quantity": "3", "measure": "tbsp", "quantityBaseNumeric": 0.1875},
		{"description": "lemon juice", "quantity": "1/4", "measure": "c", "quantityBaseNumeric": 0.25},
		{"description": "soy sauce", "quantity": "5/2", "measure": "tbsp", "quantityBaseNumeric": 0.15625},
		{"description": "orange zest", "quantity": "3/2", "measure": "tbsp", "quantityBaseNumeric": 0.09375},
		{"description": "ginger", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "garlic", "quantity": "1/2", "measure": "tsp", "quantityBaseNumeric": 0.010416666666666666},
		{"description": "green onion", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "cornstarch", "quantity": "3", "measure": "tbsp", "quantityBaseNumeric": 0.1875},
		{"description": "red pepper", "quantity": "1/8", "measure": "tsp", "quantityBaseNumeric": 0.0026041666666666665},
		{"description": "rice vinegar", "quantity": "1/3", "measure": "c", "quantityBaseNumeric": 0.3333333333333333},
		{"description": "brown sugar", "quantity": "1", "measure": "scant cup", "quantityBaseNumeric": 0.9375}
	]},
	{"name": "Orange Chicken", "image": "Orange Chicken.jpg", "isSnack": false, "isBreakfast": false, "isLunch": true, "isDinner": true, "preparationTime": 43, "rating": 2, "genre": ["dinner"], "content": {"grains": 2.75, "fruits": 1.5, "vegetables": 1.5, "dairy": 0.75, "protein": 1.5, "calories": 227}, "directions": "Combine the flour, salt, and pepper into a large plastic bag.  Cut the chicken into pieces (about 1/2 inch cubes) and add to the bag.  Shake well to coat the chicken.<br /><br />Add the oil to a frying pan and turn on to medium-high.  Once the oil is warm (not smoking) add the chicken pieces.  Cook until the chicken is no longer pink in the center (about 8 minutes).  Add the sauce and bring to a boil.  Cook for an additional 5 minutes, stirring occasionally.  Serve with rice.", "ingredients": [
		{"description": "flour", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "salt", "quantity": "1/4", "measure": "tsp", "quantityBaseNumeric": 0.005208333333333333},
		{"description": "pepper", "quantity": "1/4", "measure": "tsp", "quantityBaseNumeric": 0.005208333333333333},
		{"description": "oil", "quantity": "2", "measure": "tbsp", "quantityBaseNumeric": 0.125},
		{"description": "orange sauce", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "chicken breasts", "quantity": "2", "measure": null, "quantityBaseNumeric": 2.0}
	]},
	{"name": "Easy Rolls", "image": "Easy Rolls.jpg", "isSnack": true, "isBreakfast": true, "isLunch": true, "isDinner": true, "preparationTime": 5, "rating": 3, "genre": ["bread"], "content": {"grains": 2.75, "fruits": 2.0, "vegetables": 1.25, "dairy": 1.0, "protein": 1.5, "calories": 429}, "directions": "Beat together the eggs, sugar, salt, potato flakes, and milk.  Then add the first measure of flour and the water water.  Mix well and add the yeast. Mix together and add the remaining flour until the dough is soft. This may be slightly more or less than the amount specified.  Knead well.<br /><br />Put in greased pans and let rise.  Bake at 350&ordm; F for 15 minutes.", "ingredients": [
		{"description": "eggs", "quantity": "4", "measure": null, "quantityBaseNumeric": 4.0},
		{"description": "sugar", "quantity": "2/3", "measure": "c", "quantityBaseNumeric": 0.6666666666666666},
		{"description": "salt", "quantity": "3", "measure": "tsp", "quantityBaseNumeric": 0.0625},
		{"description": "potato flakes", "quantity": "2/3", "measure": "c", "quantityBaseNumeric": 0.6666666666666666},
		{"description": "milk", "quantity": "3", "measure": "c", "quantityBaseNumeric": 3.0},
		{"description": "flour", "quantity": "4", "measure": "c", "quantityBaseNumeric": 4.0},
		{"description": "water", "quantity": "2", "measure": "c", "quantityBaseNumeric": 2.0},
		{"description": "yeast", "quantity": "3", "measure": "tbsp", "quantityBaseNumeric": 0.1875},
		{"description": "flour", "quantity": "10", "measure": "c", "quantityBaseNumeric": 10.0}
	]},
	{"name": "Muddy Buddies", "image": "Muddy Buddies.jpg", "isSnack": true, "isBreakfast": false, "isLunch": false, "isDinner": false, "preparationTime": 6, "rating": 1, "genre": ["dessert", "snack"], "content": {"grains": 2.5, "fruits": 1.25, "vegetables": 1.0, "dairy": 0.5, "protein": 1.0, "calories": 233}, "directions": "Place cereal into a large bowl<br /><br />In 1-quart microwavable bowl, microwave chocolate chips, peanut butter and butter uncovered on High 1 minute; stir. Microwave about 30 seconds longer or until mixture can be stirred smooth. Stir in vanilla. Pour mixture over cereal, stirring until evenly coated. Pour into 2-gallon resealable food-storage plastic bag.<br /><br />Add powdered sugar. Seal bag; shake until well coated. Spread on waxed paper to cool. Store in airtight container in refrigerator.", "ingredients": [
		{"description": "Chex", "quantity": "9", "measure": "c", "quantityBaseNumeric": 9.0},
		{"description": "Chocolate Chips", "quantity": "1", "measure": "c", "quantityBaseNumeric": 1.0},
		{"description": "Peanut Butter", "quantity": "1/2", "measure": "c", "quantityBaseNumeric": 0.5},
		{"description": "Vanilla", "quantity": "1", "measure": "tsp", "quantityBaseNumeric": 0.020833333333333332},
		{"description": "Powdered Sugar", "quantity": "3/2", "measure": "c", "quantityBaseNumeric": 1.5},
		{"description": "Butter", "quantity": "4", "measure": "tbsp", "quantityBaseNumeric": 0.25}
	]},
	{"name": "Pane Paesano", "image": "Pane Paesano.jpg", "isSnack": true, "isBreakfast": true, "isLunch": true, "isDinner": true, "preparationTime": 2, "rating": 2, "genre": ["bread"], "content": {"grains": 2.5, "fruits": 2.0, "vegetables": 0.75, "dairy": 1.25, "protein": 1.0, "calories": 446}, "directions": "Dissolve the yeast and sugar in the water (1) and let sit for 5 minutes.  Add the flour and the water (2) and mix / knead the dough for about 20 minutes.<br /><br />Add the salt to the water (3) and dissolve the salt, then add to the dough and knead for another 10 minutes.  It can be hard to get the salt mixed in since by this point the dough is 'tough'.<br /><br />Let the dough rise until it has doubled in size (about an anywhere from 1 hour to 1.5 hours).<br /><br />Put the dough on a well-floured surface and let rest for about 10 minutes.<br /><br />Carefully form the dough into a round ball by gently pushing in the bottom of the dough until a ball is formed.  Place the loaf on floured oven paper (so it won't stick) and coat the top with flour as well.  Cover with a dish towel and let rise for 45 minutes.<br /><br />Bake at 220&deg; C (430&deg; F) for 45 minutes with steam.", "ingredients": [
		{"description": "yeast", "quantity": "11", "measure": "g", "quantityBaseNumeric": 11.0},
		{"description": "water", "quantity": "40", "measure": "ml", "quantityBaseNumeric": 0.04},
		{"description": "flour", "quantity": "500", "measure": "g", "quantityBaseNumeric": 500.0},
		{"description": "salt", "quantity": "10", "measure": "g", "quantityBaseNumeric": 10.0},
		{"description": "sugar", "quantity": "10", "measure": "g", "quantityBaseNumeric": 10.0},
		{"description": "water", "quantity": "120", "measure": "ml", "quantityBaseNumeric": 0.12},
		{"description": "water", "quantity": "200", "measure": "ml", "quantityBaseNumeric": 0.2}
	]}
];

var foods = [
	{"name": "bacon", "quantity": "1 lb", "fruits": 1, "vegetables": 1, "protein": 0, "dairy": 0, "grains": 2, "calories": 403},
	{"name": "baker's chocolate", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 0, "dairy": 2, "grains": 0, "calories": 509},
	{"name": "baking chocolate", "quantity": "1 whole", "fruits": 1, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 2, "calories": 447},
	{"name": "baking powder", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 0, "dairy": 2, "grains": 1, "calories": 421},
	{"name": "baking soda", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 2, "dairy": 0, "grains": 2, "calories": 590},
	{"name": "banana", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 1, "grains": 0, "calories": 525},
	{"name": "bananas", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 2, "dairy": 2, "grains": 0, "calories": 487},
	{"name": "basil", "quantity": "1 whole", "fruits": 1, "vegetables": 2, "protein": 1, "dairy": 2, "grains": 2, "calories": 406},
	{"name": "basil leaves", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 1, "dairy": 1, "grains": 0, "calories": 579},
	{"name": "besciamella", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 1, "dairy": 0, "grains": 2, "calories": 430},
	{"name": "black pepper", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 0, "dairy": 1, "grains": 1, "calories": 425},
	{"name": "brown sugar", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 1, "dairy": 2, "grains": 2, "calories": 562},
	{"name": "butter", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 1, "grains": 2, "calories": 518},
	{"name": "butter or olive oil", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 1, "dairy": 0, "grains": 2, "calories": 506},
	{"name": "cabbage", "quantity": "1 head", "fruits": 1, "vegetables": 1, "protein": 0, "dairy": 0, "grains": 2, "calories": 440},
	{"name": "cane sugar", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 1, "dairy": 0, "grains": 0, "calories": 574},
	{"name": "carrot", "quantity": "1 whole", "fruits": 1, "vegetables": 2, "protein": 1, "dairy": 2, "grains": 0, "calories": 438},
	{"name": "carrots", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 2, "dairy": 2, "grains": 0, "calories": 450},
	{"name": "celery", "quantity": "1 stalk", "fruits": 0, "vegetables": 1, "protein": 2, "dairy": 1, "grains": 2, "calories": 517},
	{"name": "cheddar cheese", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 34.0, "grains": 0, "calories": 75.0},
	{"name": "cheese", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 1, "dairy": 1, "grains": 2, "calories": 509},
	{"name": "Chex", "quantity": "1 lb", "fruits": 2, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 2, "calories": 532},
	{"name": "chicken", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 2, "dairy": 1, "grains": 2, "calories": 472},
	{"name": "chicken breasts", "quantity": "1 lb", "fruits": 2, "vegetables": 0, "protein": 0, "dairy": 1, "grains": 1, "calories": 478},
	{"name": "chicken broth", "quantity": "1 whole", "fruits": 1, "vegetables": 2, "protein": 2, "dairy": 1, "grains": 1, "calories": 402},
	{"name": "chicken livers", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 2, "dairy": 2, "grains": 2, "calories": 547},
	{"name": "chickens", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 0, "dairy": 2, "grains": 1, "calories": 500},
	{"name": "chocolate chips", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 0, "dairy": 2, "grains": 0, "calories": 535},
	{"name": "cocoa", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 0, "calories": 525},
	{"name": "cool whip", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 2, "dairy": 1, "grains": 0, "calories": 517},
	{"name": "corn starch", "quantity": "1 lb", "fruits": 0, "vegetables": 0, "protein": 1, "dairy": 1, "grains": 0, "calories": 460},
	{"name": "cornstarch", "quantity": "1 lb", "fruits": 2, "vegetables": 1, "protein": 2, "dairy": 0, "grains": 2, "calories": 438},
	{"name": "cracker crumbs", "quantity": "1 lb", "fruits": 0, "vegetables": 2, "protein": 2, "dairy": 0, "grains": 2, "calories": 529},
	{"name": "cream", "quantity": "1 pint", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 1, "grains": 2, "calories": 557},
	{"name": "cream of chicken soup", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 2, "dairy": 0, "grains": 0, "calories": 437},
	{"name": "cream of mushroom soup", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 0, "calories": 548},
	{"name": "crushed pineapple", "quantity": "1 can", "fruits": 1, "vegetables": 2, "protein": 0, "dairy": 0, "grains": 0, "calories": 496},
	{"name": "dark cherries", "quantity": "1 lb", "fruits": 1, "vegetables": 2, "protein": 2, "dairy": 2, "grains": 2, "calories": 460},
	{"name": "dark chocolate", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 0, "calories": 401},
	{"name": "dry ice", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 2, "dairy": 0, "grains": 2, "calories": 406},
	{"name": "egg", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 1, "calories": 401},
	{"name": "egg roll wraps", "quantity": "1 whole", "fruits": 1, "vegetables": 1, "protein": 1, "dairy": 1, "grains": 0, "calories": 501},
	{"name": "egg yolks", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 1, "dairy": 2, "grains": 1, "calories": 581},
	{"name": "eggs", "quantity": "1 dozen", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 442},
	{"name": "evaporated milk", "quantity": "1 whole", "fruits": 2, "vegetables": 2, "protein": 2, "dairy": 2, "grains": 0, "calories": 515},
	{"name": "extra virgin olive oil", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 0, "calories": 503},
	{"name": "flour", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 2, "dairy": 2, "grains": 0, "calories": 491},
	{"name": "garlic", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 0, "dairy": 2, "grains": 2, "calories": 477},
	{"name": "garlic powder", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 0.0},
	{"name": "ginger", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 2, "dairy": 0, "grains": 2, "calories": 535},
	{"name": "ginger piece", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 2, "dairy": 0, "grains": 0, "calories": 473},
	{"name": "green chilies", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 2, "calories": 584},
	{"name": "green onion", "quantity": "1 bunch", "fruits": 2, "vegetables": 2, "protein": 1, "dairy": 1, "grains": 0, "calories": 562},
	{"name": "green peppers", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 1, "dairy": 1, "grains": 0, "calories": 494},
	{"name": "ground beef", "quantity": "1 lb", "fruits": 2, "vegetables": 2, "protein": 2, "dairy": 1, "grains": 0, "calories": 539},
	{"name": "ground pork", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 2, "dairy": 1, "grains": 2, "calories": 435},
	{"name": "hamburger", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 2, "dairy": 2, "grains": 1, "calories": 535},
	{"name": "honey", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 64.0},
	{"name": "instant chocolate pudding mix", "quantity": "1 whole", "fruits": 2, "vegetables": 2, "protein": 1, "dairy": 0, "grains": 1, "calories": 530},
	{"name": "kikoman teriyaki sauce", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 0, "dairy": 0, "grains": 2, "calories": 419},
	{"name": "lard", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 104.0},
	{"name": "lasagna noodles", "quantity": "1 whole", "fruits": 1, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 0, "calories": 535},
	{"name": "lemon", "quantity": "1 lb", "fruits": 0, "vegetables": 2, "protein": 0, "dairy": 2, "grains": 1, "calories": 505},
	{"name": "lemon juice", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 460},
	{"name": "lime gelatin", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 1, "dairy": 1, "grains": 2, "calories": 454},
	{"name": "lime juice", "quantity": "1 whole", "fruits": 1, "vegetables": 1, "protein": 0, "dairy": 2, "grains": 1, "calories": 485},
	{"name": "lime rind", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 1, "dairy": 1, "grains": 1, "calories": 557},
	{"name": "mango chunks", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 1, "dairy": 1, "grains": 0, "calories": 544},
	{"name": "mango juice", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 1, "dairy": 1, "grains": 0, "calories": 510},
	{"name": "maraschino cherry juice", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 1, "dairy": 2, "grains": 0, "calories": 593},
	{"name": "margarine", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 2, "dairy": 1, "grains": 0, "calories": 599},
	{"name": "marshmallows", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 16.0},
	{"name": "milk", "quantity": "1 gallon", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 1, "grains": 0, "calories": 480},
	{"name": "mozzarella", "quantity": "1 whole", "fruits": 1, "vegetables": 2, "protein": 0, "dairy": 1, "grains": 1, "calories": 514},
	{"name": "mozzarella cheese", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 2, "dairy": 2, "grains": 0, "calories": 545},
	{"name": "mushrooms", "quantity": "1 whole", "fruits": 2, "vegetables": 2, "protein": 0, "dairy": 2, "grains": 1, "calories": 527},
	{"name": "nutmeg", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 2, "dairy": 1, "grains": 2, "calories": 525},
	{"name": "nuts", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 0, "dairy": 2, "grains": 0, "calories": 409},
	{"name": "oil", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 0, "dairy": 0, "grains": 0, "calories": 456},
	{"name": "olive oil", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 0.0},
	{"name": "onion", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 1, "dairy": 0, "grains": 1, "calories": 540},
	{"name": "onions", "quantity": "1 whole", "fruits": 2, "vegetables": 2, "protein": 2, "dairy": 2, "grains": 0, "calories": 474},
	{"name": "orange juice", "quantity": "1 whole", "fruits": 2, "vegetables": 2, "protein": 2, "dairy": 1, "grains": 2, "calories": 596},
	{"name": "orange sauce", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 2, "dairy": 0, "grains": 2, "calories": 474},
	{"name": "orange zest", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 1, "dairy": 1, "grains": 1, "calories": 477},
	{"name": "oregano", "quantity": "1 whole", "fruits": 1, "vegetables": 2, "protein": 2, "dairy": 1, "grains": 0, "calories": 495},
	{"name": "oreo pie crust", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 0, "dairy": 2, "grains": 1, "calories": 547},
	{"name": "oreos", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 0, "dairy": 0, "grains": 2, "calories": 554},
	{"name": "pancetta", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 1, "calories": 507},
	{"name": "paprika", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 1, "dairy": 1, "grains": 2, "calories": 449},
	{"name": "parmigiano reggiano", "quantity": "1 lb", "fruits": 1, "vegetables": 2, "protein": 1, "dairy": 0, "grains": 1, "calories": 566},
	{"name": "parsley", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 1, "dairy": 1, "grains": 1, "calories": 456},
	{"name": "pasta", "quantity": "1 lb", "fruits": 0, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 2, "calories": 548},
	{"name": "peach chunks", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 1, "dairy": 0, "grains": 0, "calories": 599},
	{"name": "peach juice", "quantity": "1 whole", "fruits": 1, "vegetables": 2, "protein": 0, "dairy": 1, "grains": 1, "calories": 474},
	{"name": "Peanut Butter", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 1.0, "dairy": 0, "grains": 0, "calories": 4.0},
	{"name": "peperoncini", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 1, "dairy": 2, "grains": 1, "calories": 488},
	{"name": "pepper", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 1, "dairy": 1, "grains": 1, "calories": 442},
	{"name": "pineapple chunks", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 0, "dairy": 0, "grains": 1, "calories": 432},
	{"name": "pineapple juice", "quantity": "1 whole", "fruits": 1.0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 0.0},
	{"name": "pistachio pudding mix", "quantity": "1 whole", "fruits": 1, "vegetables": 2, "protein": 2, "dairy": 1, "grains": 1, "calories": 493},
	{"name": "pizza dough", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 1, "dairy": 0, "grains": 0, "calories": 566},
	{"name": "potato flakes", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 2, "dairy": 0, "grains": 0, "calories": 564},
	{"name": "potatoes", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 1, "dairy": 0, "grains": 2, "calories": 403},
	{"name": "powdered sugar", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 2, "dairy": 0, "grains": 0, "calories": 416},
	{"name": "ragù alla bolognese", "quantity": "1 whole", "fruits": 2, "vegetables": 2, "protein": 2, "dairy": 2, "grains": 0, "calories": 587},
	{"name": "red pepper", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 2, "dairy": 0, "grains": 1, "calories": 597},
	{"name": "rice vinegar", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 2, "calories": 415},
	{"name": "root beer extract", "quantity": "1 whole", "fruits": 2, "vegetables": 1, "protein": 2, "dairy": 0, "grains": 1, "calories": 420},
	{"name": "salt", "quantity": "1 whole", "fruits": 2, "vegetables": 2, "protein": 1, "dairy": 0, "grains": 0, "calories": 406},
	{"name": "sesame oil", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 0.0},
	{"name": "shortening", "quantity": "1 whole", "fruits": 2, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 434},
	{"name": "shortening or margarine", "quantity": "1 whole", "fruits": 0, "vegetables": 2, "protein": 2, "dairy": 1, "grains": 1, "calories": 554},
	{"name": "sour cream", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 24.0},
	{"name": "sour milk", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 0, "dairy": 2, "grains": 1, "calories": 529},
	{"name": "soy sauce", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 0.0},
	{"name": "strawberries", "quantity": "1 whole", "fruits": 1, "vegetables": 2, "protein": 1, "dairy": 1, "grains": 1, "calories": 504},
	{"name": "stuffing mix", "quantity": "1 box", "fruits": 2, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 1, "calories": 460},
	{"name": "sugar", "quantity": "1 whole", "fruits": 2, "vegetables": 2, "protein": 0, "dairy": 0, "grains": 0, "calories": 400},
	{"name": "swiss cheese", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 34.0, "grains": 0, "calories": 63.0},
	{"name": "tomato", "quantity": "1 whole", "fruits": 1, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 2, "calories": 570},
	{"name": "tomato puree", "quantity": "1 whole", "fruits": 0, "vegetables": 2.0, "protein": 0, "dairy": 0, "grains": 0, "calories": 0.0},
	{"name": "tortillas", "quantity": "1 lb", "fruits": 2, "vegetables": 2, "protein": 1, "dairy": 1, "grains": 0, "calories": 532},
	{"name": "vanilla", "quantity": "1 whole", "fruits": 2, "vegetables": 2, "protein": 0, "dairy": 0, "grains": 1, "calories": 465},
	{"name": "vanilla bean", "quantity": "1 whole", "fruits": 1, "vegetables": 0, "protein": 1, "dairy": 2, "grains": 1, "calories": 499},
	{"name": "vanilla pudding mix", "quantity": "1 whole", "fruits": 1, "vegetables": 1, "protein": 2, "dairy": 1, "grains": 0, "calories": 537},
	{"name": "vinegar", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 0.0},
	{"name": "water", "quantity": "1 whole", "fruits": 1, "vegetables": 1, "protein": 0, "dairy": 0, "grains": 1, "calories": 542},
	{"name": "whipping cream", "quantity": "1 whole", "fruits": 0, "vegetables": 1, "protein": 2, "dairy": 2, "grains": 2, "calories": 538},
	{"name": "white wine", "quantity": "1 whole", "fruits": 1, "vegetables": 1, "protein": 0, "dairy": 1, "grains": 0, "calories": 461},
	{"name": "yeast", "quantity": "1 whole", "fruits": 0, "vegetables": 0, "protein": 0, "dairy": 0, "grains": 0, "calories": 0.0}
];

var Collection=function()
{
	this.count = 0;
	this.collection = {};

	this.add = function(key)
	{
		if(this.collection[key] != undefined)
		{
			return undefined;
		}
		this.collection[key] = true;
		this.count++;
		return true;
	};

	this.remove = function(key)
	{
		if(this.collection[key] == undefined)
			return undefined;

		delete this.collection[key];
		this.count--;
		return true;
	};

	this.contains = function(key)
	{
		return this.collection[key] != undefined;
	};

	this.asArray = function()
	{
		var result = [];
		for(var key in this.collection)
		{
			if(this.collection.hasOwnProperty(key))
			{
				result.push(key);
			}
		}
		return result;
	}
};

/**
 * Returns the meal preferences for the user
 * @returns {*} The preferences for the user
 */
function getMealPreferences()
{
	return user.preferences;
}

/**
 * Updates the rating for a recipe
 * @param name The name of the recipe
 * @param rating {int} The new rating
 */
function rateRecipe(name, rating)
{
	var recipe = findRecipe(name);
	if(recipe != null)
	{
		recipe.rating = rating;
	}
}

/**
 * Returns an array of all the possible meal preference values
 * @return {Array} All possible meal preferences
 */
function getMealPreferencePossibilities()
{
	var collection = new Collection();
	for(var key in recipes)
	{
		if(recipes.hasOwnProperty(key))
		{
			var recipe = recipes[key];

			for(var genre in recipe.genre)
			{
				if(recipe.genre.hasOwnProperty(genre))
				{
					collection.add(recipe.genre[genre]);
				}
			}
		}
	}

	return collection.asArray();
}

/**
 * Gets an array of recipes of the given type that the user might want
 *
 * @param type string The type of food (snack, breakfast, lunch, dinner)
 *
 * @return {Array} An array of recipes to suggest for the given meal
 */
function getRecipeSuggestions(type)
{
	var result = [];
	for(var key in recipes)
	{
		if(recipes.hasOwnProperty(key))
		{
			var recipe = recipes[key];

			// Check the type first
			var isCorrectType = false;
			switch(type)
			{
				case "snack":
					isCorrectType = recipe.isSnack;
					break;
				case "breakfast":
					isCorrectType = recipe.isBreakfast;
					break;
				case "lunch":
					isCorrectType = recipe.isLunch;
					break;
				case "dinner":
					isCorrectType = recipe.isDinner;
					break;
				default:
					isCorrectType = false;
			}

			if(isCorrectType)
			{
				isCorrectType = false;
				// Now check the genre
				if(getMealPreferences().length == 0)
				{
					result.push(recipe);
				}
				else
				{
					var preferences = getMealPreferences();
					for(var genre in preferences)
					{
						if(preferences.hasOwnProperty(genre))
						{
							genre = preferences[genre];
							for(var mealType in recipe.genre)
							{
								if(recipe.genre.hasOwnProperty(mealType))
								{
									mealType = recipe.genre[mealType];
									isCorrectType = mealType === genre;
									if(isCorrectType)
										break;
								}
							}
							if(isCorrectType)
								break;
						}
					}
				}

				if(isCorrectType)
				{
					result.push(recipe);
				}
			}
		}
	}

	if(result.length == 0)
	{
		// Add recipes anyway
		for(var key in recipes)
		{
			if(recipes.hasOwnProperty(key))
			{
				var recipe = recipes[key];

				// Check the type first
				var isCorrectType = false;
				switch(type)
				{
					case "snack":
						isCorrectType = recipe.isSnack;
						break;
					case "breakfast":
						isCorrectType = recipe.isBreakfast;
						break;
					case "lunch":
						isCorrectType = recipe.isLunch;
						break;
					case "dinner":
						isCorrectType = recipe.isDinner;
						break;
					default:
						isCorrectType = false;
				}

				if(isCorrectType)
				{
					result.push(recipe);
				}
			}
		}
	}
	return result;
}

/**
 * Searches for foods and recipes that match the input string
 *
 * @param text string The text entered by the user
 *
 * @return Array An array of strings representing the names of the items
 */
function searchForFoodAndRecipes(text)
{
	var result = [];
	for(var food in foods)
	{
		if(foods.hasOwnProperty(food))
		{
			food = foods[food];
			var name = food.name.toLowerCase();

			if(name.indexOf(text.toLowerCase()) !== -1)
			{
				result.push(name);
			}
		}
	}
	for(var recipe in recipes)
	{
		if(recipes.hasOwnProperty(recipe))
		{
			recipe = recipes[recipe];
			var recipeName = recipe.name.toLowerCase();

			if(recipeName.indexOf(text.toLowerCase()) !== -1)
			{
				result.push(recipeName);
			}
		}
	}

	return result;
}

/**
 * Searches for a recipe with the specified text, and returns an array of recipes
 * @param text The text to search for
 * @returns {Array} An array of recipe objects
 */
function searchForRecipe(text)
{
	var result = [];
	for(var recipe in recipes)
	{
		if(recipes.hasOwnProperty(recipe))
		{
			recipe = recipes[recipe];
			var recipeName = recipe.name.toLowerCase();

			if(recipeName.indexOf(text.toLowerCase()) !== -1)
			{
				result.push(recipe);
			}
		}
	}
	return result;
}

/**
 * Searches for a food with the given name and returns it
 *
 * @param text string The name of the food
 *
 * @returns {*} The food object, or null if it wasn't found
 */
function findFood(text)
{
	for(var food in foods)
	{
		if(foods.hasOwnProperty(food))
		{
			food = foods[food];
			var name = food.name.toLowerCase();

			if(name.toUpperCase() === text.toUpperCase())
			{
				return food;
			}
		}
	}

	return null;
}

/**
 * Updates the data structures to reflect the user eating a food
 *
 * @param name The name of the food
 */
function eatFood(name)
{
	var food = findFood(name);
	if(food === null)
	{
		return;
	}

	var qty = 1;
	if(arguments[1] != undefined && arguments[1] != null)
	{
		try
		{
			qty = parseInt(arguments[1]);
		}
		catch(e)
		{
			// Do nothing
		}
	}

	// Update the day's values for each category
	var values = getValuesEatenToday();
	values.grains += food.grains * qty;
	values.fruits += food.fruits * qty;
	values.vegetables += food.vegetables * qty;
	values.dairy += food.dairy * qty;
	values.protein += food.protein * qty;
	values.calories += food.calories * qty;

	for(var key in user.cupboard)
	{
		if(user.cupboard.hasOwnProperty(key))
		{
			var cupboardFood = user.cupboard[key];
			if(cupboardFood.name === food.name)
			{
				cupboardFood.quantity -= qty;
			}
		}
	}

	cleanMissingFoodsFromCupboard();
}

/**
 * Removes all foods from the user's cupboard that have 0 or negative quantities
 */
function cleanMissingFoodsFromCupboard()
{
	for(var cKey in user.cupboard)
	{
		if(user.cupboard.hasOwnProperty(cKey))
		{
			var temp = user.cupboard[cKey];

			if(temp.quantity <= 0)
				delete user.cupboard[cKey];
		}
	}
}

/**
 * Searches for a recipe with the given name and returns it
 *
 * @param text string The name of the recipe
 *
 * @returns {*} The recipe object, or null if it wasn't found
 */
function findRecipe(text)
{
	for(var recipe in recipes)
	{
		if(recipes.hasOwnProperty(recipe))
		{
			recipe = recipes[recipe];
			var name = recipe.name.toLowerCase();

			if(name.toUpperCase() === text.toUpperCase())
			{
				return recipe;
			}
		}
	}

	return null;
}

/**
 * Updates the data structures to reflect the user eating a recipe
 *
 * @param name The name of the recipe
 */
function eatRecipe(name)
{
	var recipe = findRecipe(name);
	if(recipe === null)
	{
		return;
	}

	// Update the day's values for each category
	var values = getValuesEatenToday();
	values.grains += recipe.content.grains;
	values.fruits += recipe.content.fruits;
	values.vegetables += recipe.content.vegetables;
	values.dairy += recipe.content.dairy;
	values.protein += recipe.content.protein;
	values.calories += recipe.content.calories;

	for(var iKey in recipe.ingredients)
	{
		if(recipe.ingredients.hasOwnProperty(iKey))
		{
			var ingredient = recipe.ingredients[iKey];


			for(var key in user.cupboard)
			{
				if(user.cupboard.hasOwnProperty(key))
				{
					var cupboardFood = user.cupboard[key];
					if(cupboardFood.name === ingredient.name)
					{
						cupboardFood.quantity -= ingredient.quantityBaseNumeric;
					}
				}
			}
		}
	}

	cleanMissingFoodsFromCupboard();
}

/**
 * Gets a JSON object {grains, fruits, etc...} representing the current progress for the week (as averaged per day)
 *
 * @return A JSON object with a property for each type of nutrition value, as averaged over the days this week
 */
function getActualValuesEatenThisWeek()
{
	// Iterate over the goals and get the last values
	var today = convertDateToString(new Date());

	var valuesArray = user.goals;
	for(var key in valuesArray)
	{
		if(valuesArray.hasOwnProperty(key))
		{
			var date = valuesArray[key];
			if(date.startDay <= today && date.endDay >= today)
			{
				today = date.startDay;
				break;
			}
		}
	}

	// Today now contains the start of the week date
	var days = 0;
	var results = {fruits:0,dairy:0,grains:0,protein:0,vegetables:0,calories:0};
	for(var dayKey in user.foodEaten)
	{
		if(user.foodEaten.hasOwnProperty(dayKey))
		{
			var stats = user.foodEaten[dayKey];
			if(stats.day >= today)
			{
				days++;
				results.fruits += stats.foods.fruits;
				results.dairy += stats.foods.dairy;
				results.grains += stats.foods.grains;
				results.protein += stats.foods.protein;
				results.vegetables += stats.foods.vegetables;
				results.calories += stats.foods.calories;
			}
		}
	}

	for(var resultKey in results)
	{
		if(results.hasOwnProperty(resultKey))
		{
			results[resultKey] /= days;
		}
	}

	return results;
}

/**
 * Returns a JSON object of the values eaten today
 *
 * @return {*} A JSON object with a property for each type of nutrition value, for today only
 */
function getValuesEatenToday()
{
	var dateString = convertDateToString(new Date());
	var valuesArray = user.foodEaten;
	for(var key in valuesArray)
	{
		if(valuesArray.hasOwnProperty(key))
		{
			var date = valuesArray[key];
			if(date.day === dateString)
			{
				return date.foods;
			}
		}
	}

	// Didn't find it, so create it with zero values
	var result = {day: dateString, foods: {grains:0, fruits:0, vegetables:0, dairy:0, protein:0, calories:0}};
	valuesArray.push(result);
	return result.foods;
}

/**
 * Returns a JSON object of the values representing the goals the user has set for the current work
 *
 * @return {*} A JSON object with a property for each type of nutrition value, representing the goals for this week
 */
function getCurrentGoals()
{
	// Iterate over the goals and get the last values
	var today = convertDateToString(new Date());

	var valuesArray = user.goals;
	for(var key in valuesArray)
	{
		if(valuesArray.hasOwnProperty(key))
		{
			var date = valuesArray[key];
			if(date.startDay <= today && date.endDay >= today)
			{
				return date;
			}
		}
	}

	// We didn't find goals for right now, so create some!
	setNewGoals({grains:10,fruits:7,vegetables:6,dairy:5,protein:4,calories:2000});
	return getCurrentGoals();
}

/**
 * Converts a date to a string
 *
 * @returns {string} The string representation of the date, as yyyy-MM-dd
 */
function convertDateToString(date)
{
	var today = date;
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10)
	{
		dd='0'+dd;
	}
	if(mm<10)
	{
		mm='0'+mm;
	}

	return yyyy + "-" + mm + "-" + dd;
}

/**
 * Updates the data structures to reflect new goals starting today
 *
 * @param goals JSON Object of new goals that start today
 */
function setNewGoals(goals)
{
	var temp = new Date();
	goals.startDay = convertDateToString(temp);
	goals.endDay = convertDateToString(new Date(temp.getFullYear(), temp.getMonth(), temp.getDay() + 7, temp.getHours(), temp.getMinutes(), temp.getSeconds(), temp.getMilliseconds()));

	// TODO: End the previous goals if they went into now.
	// TODO: Check for and remove the old goals if they started and ended on the same day

	user.goals.push(goals);
}

/**
 * Gets a set of data {goals:{fruits, etc...}, actual:{fruits, etc...}} representing values for the specific date.  The function will
 * determine based on the given date what the time period and goals were, and return the correct averages for the actual value
 * on this page
 *
 * @param date string The date, as a string "yyyy-MM-dd" representing when to get data for
 */
function getHistoricData(date)
{
	var goalTime = null;
	// Iterate over the goals and get the last values
	var today = date;

	var valuesArray = user.goals;
	for(var key in valuesArray)
	{
		if(valuesArray.hasOwnProperty(key))
		{
			var goalDate = valuesArray[key];
			if(goalDate.startDay <= today && goalDate.endDay >= today)
			{
				goalTime = goalDate;
				break;
			}
		}
	}

	if(goalTime == null)
	{
		return {actual:{grains:0,fruits:0,vegetables:0,dairy:0,protein:0,calories:0}, goals:{grains:0,fruits:0,vegetables:0,dairy:0,protein:0,calories:0}};
	}

	var results = {grains:0,fruits:0,vegetables:0,dairy:0,protein:0,calories:0};
	var days = 0;
	for(var eatenKey in user.foodEaten)
	{
		if(user.foodEaten.hasOwnProperty(eatenKey))
		{
			var stats = user.foodEaten[eatenKey];
			if(stats.day >= goalTime.startDay && stats.day <= goalTime.endDay)
			{
				days++;
				results.fruits += stats.foods.fruits;
				results.dairy += stats.foods.dairy;
				results.grains += stats.foods.grains;
				results.protein += stats.foods.protein;
				results.vegetables += stats.foods.vegetables;
				results.calories += stats.foods.calories;
			}
		}
	}

	for(var resultKey in results)
	{
		if(results.hasOwnProperty(resultKey))
		{
			results[resultKey] /= days;
		}
	}

	return {goals:goalTime, actual:results};
}

/**
 * Adds a new recipe to the database
 *
 * @param recipe JSON The recipe to add (formatted already like the data structure)
 */
function addRecipe(recipe)
{
	for(var key in recipes)
	{
		if(recipes.hasOwnProperty(key))
		{
			var temp = recipes[key];
			if(temp.name.toLowerCase() === recipe.name.toLowerCase())
			{
				// Don't add duplicate food
				return;
			}
		}
	}
	recipes.push(recipe);
}

/**
 * Gets the shopping list.  This will be an object with categories and quantities {fruits:{needed:6,options:[{name:"food",size:"1 whole"}]}}
 * return {*} A shopping list
 */
function getShoppingList()
{
	// TODO: Figure out how to generate this
	return {
		Fruits: {
			needed: 20, options: [
				{name: "banana", size: "1 whole"},
				{name: "crushed pineapple", size: "1 can"},
				{name: "dark cherries", size: "1 lb"},
				{name: "lemon", size: "1 lb"}
			]},
		Vegetables: {
			needed: 20, options: [
				{name: "carrot", size: "1 whole"},
				{name: "cabbage", size: "1 head"},
				{name: "celery", size: "1 stalk"},
				{name: "green onion", size: "1 bunch"}
			]},
		Protein: {
			needed: 3, options: [
				{name: "bacon", size: "1 lb"},
				{name: "chicken breasts", size: "1 lb"},
				{name: "eggs", size: "1 dozen"},
				{name: "ground beef", size: "1 lb"}
			]},
		Dairy: {
			needed: 4, options: [
				{name: "cream", size: "1 pint"},
				{name: "milk", size: "1 gallon"},
				{name: "parmigiano reggiano", size: "1 lb"}
			]},
		Grains: {
			needed: 18, options: [
				{name: "stuffing mix", size: "1 box"},
				{name: "tortillas", size: "1 lb"},
				{name: "pasta", size: "1 lb"},
				{name: "cracker crumbs", size: "1 lb"},
				{name: "corn starch", size: "1 lb"},
				{name: "Chex", size: "1 lb"}
			]}
	};
}

/**
 * Returns all the recipes that are available
 * @returns {Array} All the recipes
 */
function getAllRecipes()
{
	return recipes;
}

/**
 * Returns the user's cupboard contents
 * @returns {*} The contents of the cupboard for this user
 */
function getCupboard()
{
	return user.cupboard;
}

/**
 * Adds foods to the cupboard (such as from the shopping list, or negative values to remove from cupboard)
 * @param foods JSON[] {name:"banana",quantity:5}
 */
function addFoodsToCupboard(foods)
{
	for(var key in foods)
	{
		if(foods.hasOwnProperty(key))
		{
			var food = foods[key];

			var actual = findFood(food.name);

			// No such food
			if(actual == null)
				continue;

			// See if they already have this food in the cupboard
			var inCupboard = false;
			for(var cKey in user.cupboard)
			{
				if(user.cupboard.hasOwnProperty(cKey))
				{
					var cupFood = user.cupboard[cKey];
					if(cupFood.name === actual.name)
					{
						cupFood.quantity += food.quantity;
						inCupboard = true;
						break;
					}
				}
			}

			if(!inCupboard)
			{
				// TODO: deal with measurement sizes
				user.cupboard.push({name:actual.name,quantity:food.quantity,measure:"1 whole"});
			}
		}
	}
	cleanMissingFoodsFromCupboard();
}
