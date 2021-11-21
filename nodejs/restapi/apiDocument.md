Page1(Home Page)
> List Of City (http://localhost:8121/location)
(this will return all the city) >>>>>>>>>>>>>>>>>>Done
> Restaurant wrt to city
(on the basis city return restaurants) >>>>>>>>>>>>>>>>>>Done
> List of all meal (http://localhost:8121/mealType)
(return all the meal types) >>>>>>>>>>>>>>>>>>Done

Page2(Listing Page)
> Find Restaurant on the basis mealType  >>>>>>>>>>>>>>>>>>Done
(this will return all the restaurant of particular meal)
> Filter
>> Cuisine Filter >>>>>>>>>>>>>>>>>>Done
(Search on basis of mealtype and cuisine)(http://localhost:8122/filter/1?cuisine=3)

>> cost Filter (http://localhost:8122/filter/1?lcost=650&hcost=850)
(Search on basis of mealtype and cost)

>> sort filter(http://localhost:8122/filter/1?lcost=500&hcost=2000&sortKey=-1)
(Price high to low and Low to High)

>> Cuisine + Cost(http://localhost:8122/filter/1?lcost=500&hcost=1000&cuisine=2)
((Search on basis of mealtype and cuisine + cost)

Page3(Details Page)
> Get the details of restaurant on basis of Id
(http://localhost:8121/restaurant/12)  >>>>>>>>>>>>>>>>>>Done

> Menu wrt to restaurant (http://localhost:8122/menu/5)
(return all items of menu for particular restaurant)

Page4(Summary Page)
> Menu wrt to all ids (post)> (http://localhost:8122/menuItem)
(provides item in basis of id)

> Post the order
(Insert order details in db)
(http://localhost:8122/placeOrder)

/// update order with payment details
(http://localhost:8122/updateStatus/1)
{
	"status":"Delivered",
	"date":"2021-08-19%2021:32:37.0",
	"bank_status":"TXN_SUCCESS",
	"bank":"Bharat%20Bank"
}



/// delete orders
(http://localhost:8122/deletOrders)

Page5(Order Page)
> List all the order placed >>>>>>>>>>>>>>>>>>Done
(http://localhost:8121/orders)