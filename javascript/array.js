var a = ['a','b','c','d'] >> array of strings;
var b = [1,2,3,4] >> array of numbers
var c = [true, true, false, true] >> array of boolean

var d = [1,2,3,"a",true,'c',false,true,'d']

///array is collection of hetrogenious as well as homogenous datatype

var city = ["Delhi","Mumbai","Pune","Amsterdam","London"]
undefined
city.length
5
typeof(city)
'object'
city[0]
'Delhi'
city[1]
'Mumbai'
city.length
5
city[city.length-1]
'London'

var city = ["Delhi","Mumbai","Pune","Amsterdam","London"]
undefined
city.push("Dubai")
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'London', 'Dubai']
city.pop()
'Dubai'
city
(5) ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'London']
city.pop(2)
'London'
city.unshift('Helsinki')
5
city
(5) ['Helsinki', 'Delhi', 'Mumbai', 'Pune', 'Amsterdam']
city.shift()
'Helsinki'

push> add the value in the end of array
unshift > add the value in the beginning of the array
pop > remove the last value of array
shift > remove the first value of Array


var city = ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'London', 'Dubai']
undefined
city.slice(1)
(5) ['Mumbai', 'Pune', 'Amsterdam', 'London', 'Dubai']
city.slice(2)
(4) ['Pune', 'Amsterdam', 'London', 'Dubai']
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'London', 'Dubai']
city.slice(2,5)
(3) ['Pune', 'Amsterdam', 'London']



var city = ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'London', 'Dubai']
city.splice('start','deletecount',array)

// all value on third index
city.splice(3,0,"Nice","Paris")
(8) ['Delhi', 'Mumbai', 'Pune', 'Nice', 'Paris', 'Amsterdam', 'London', 'Dubai']

// remove 1 value form index number 4
city.splice(4,1)
(7) ['Delhi', 'Mumbai', 'Pune', 'Nice', 'Amsterdam', 'London', 'Dubai']

// remove 1 value for index number and add 2 values
city.splice(2,1,'Hongkong','Venice')
(8) ['Delhi', 'Mumbai', 'Hongkong', 'Venice', 'Nice', 'Amsterdam', 'London', 'Dubai']

var a = [1,2,3,'a',5]
var b = [6,'c','b']
a+b
'1,2,3,a,56,c,b'
a.concat(b)
(8) [1, 2, 3, 'a', 5, 1, 'c', 'b']


var a  = ['Delhi', 'Mumbai', 'Hongkong', 'Venice', 'Nice', 'Amsterdam', 'London', 'Dubai']
a.sort()
['Amsterdam', 'Delhi', 'Dubai', 'Hongkong', 'London', 'Mumbai', 'Nice', 'Venice']

var a  = ['Delhi',1,false, 'Hongkong', 'Venice',true, 9, 'amsterdam', 'london', 'Dubai',7,'test']

a.sort()
(12) [1, 7, 9, 'Delhi', 'Dubai', 'Hongkong', 'Venice', 'amsterdam', false, 'london', 'test', true]

var a = 10
var b = [10]

var a = 10
var b = [10]

Array.isArray(a)
false
Array.isArray(b)
true