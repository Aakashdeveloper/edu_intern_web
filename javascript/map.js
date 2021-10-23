var city = ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'London', 'Dubai'];
city.map((data) => {console.log(data)})

var a = [1,2,3,4]
a.map((data) => {return data*2})
[2, 4, 6, 8]
> always return the same length of output array as input array

////filter

var a = [5,6,3,7,9,1,8,2]
a.filter((data) => {return data>5})
[6, 7, 9, 8]

> only return those value for which condition or output is true



var a = [0,1,2,3]
a.map((data) => {return data*2})
[0, 2, 4, 6]

var a = [0,1,2,3]
a.filter((data) => {return data*2})
[1, 2, 3]

var a = [-1,0,1,2,3]
a.filter((data) => {return data*2})
 [-1, 1, 2, 3]