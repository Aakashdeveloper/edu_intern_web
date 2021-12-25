Page1(Home Page)
> List Of City (https://xomato.herokuapp.com/location)
(this will return all the city) >>>>>>>>>>>>>>>>>>Done

> Restaurant wrt to city(https://xomato.herokuapp.com/restaurants?city=1)
(on the basis city return restaurants) >>>>>>>>>>>>>>>>>>Done

> List of all meal (https://xomato.herokuapp.com/mealType)
(return all the meal types) >>>>>>>>>>>>>>>>>>Done

Page2(Listing Page)
> Find Restaurant on the basis mealType  >>>>>>>>>>>>>>>>>>Done
(this will return all the restaurant of particular meal)
(https://xomato.herokuapp.com/filter/mealID)

> Filter
>> Cuisine Filter >>>>>>>>>>>>>>>>>>Done
(Search on basis of mealtype and cuisine)(https://xomato.herokuapp.com/filter/1?cuisine=3)

>> cost Filter (https://xomato.herokuapp.com/filter/1?lcost=650&hcost=850)
(Search on basis of mealtype and cost)

>> sort filter(http://xomato.herokuapp.com/filter/1?lcost=500&hcost=2000&sortKey=-1)
(Price high to low and Low to High)

>> Cuisine + Cost(https://xomato.herokuapp.com/filter/1?lcost=500&hcost=1000&cuisine=2)
((Search on basis of mealtype and cuisine + cost)

Page3(Details Page)
> Get the details of restaurant on basis of Id
(https://xomato.herokuapp.com/restaurant/12)  >>>>>>>>>>>>>>>>>>Done

> Menu wrt to restaurant (https://xomato.herokuapp.com/menu/5)
(return all items of menu for particular restaurant)

Page4(Summary Page)
> Menu wrt to all ids (post)> (https://xomato.herokuapp.com/menuItem)
(provides item in basis of id)

> Post the order
(Insert order details in db)
(https://xomato.herokuapp.com/placeOrder)

/// update order with payment details
(https://xomato.herokuapp.com/updateStatus/1)
{
	"status":"Delivered",
	"date":"2021-08-19%2021:32:37.0",
	"bank_status":"TXN_SUCCESS",
	"bank":"Bharat%20Bank"
}



/// delete orders
(https://xomato.herokuapp.com/deletOrders)

Page5(Order Page)
> List all the order placed >>>>>>>>>>>>>>>>>>Done
(https://xomato.herokuapp.com/orders)