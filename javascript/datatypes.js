Es > Ecma Script
es5 > Ecma Script5
es6 > Ecma Script6
//es6
let
const

dataTypes

string = "Hi" 'Hey' `hello` "5435" "true"
number = 76 78678676 7676766787 8979.4534 .353 -9878
boolean = true / false


//es5
var a = 10;
var b = "Hiii"
var c = true

typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'


var d = 'hi'
typeof(d)
'string'

var d = '10'
typeof(d)
'string'

var e = -10
typeof(e)
'number'

var f = 10.111
typeof(f)
'number'

var g = true
typeof(g)
'boolean'

var h = false
typeof(h)
'boolean'

var i = "true"
typeof(i)
'string'

var j = `Test`
typeof(j)
'string'

keyword name = value
var age = 10;


var a = 10
undefined
var b = 20
undefined
a+b
30
a-b
-10
b-a
10
a*b
200
a/b
0.5
a/0
Infinity

4%2
0
4%3
1
5%2
1
5%3
2

3%4
3
2%4
2
1%4
1


var a = "Hii"
var b = "JavaScript"

var a = "Hii"
var b = "JavaScript"
a+b (concat)
'HiiJavaScript' 
a-b
NaN (not a number)
a*b
NaN 
a/b
NaN

var a = 10
var b = "hii"
a+b
'10hii'
10-"hi"
NaN

string + string = string
string + number = string
number + string = string
number + number = number


"10"+20+30
"1020"+30
'102030'

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"10"+20+30-1
'102030'-1
102029


10+"20"+30-1
102029
10+20+"30"-1
3029


"10"-1 (if both side only numbers)
9
"10"*2
20
2*"4"
8
6/"3"
2

"20"+"2" (+ will be concat)
'202'
"10"+2
'102'

"10a"-1
NaN
10-"a1"
NaN

"10a"-1
NaN
10-"a1"
NaN
"-5"-1
-6
-5+1
-4

"10a"-1
NaN
10-"a1"
NaN
"-5"-1
-6
-5+1
-4
"-5"-"-1"
-4

/////////////////
isNaN(10)
false

isNaN("hi")
true

isNaN("1")
false

isNaN("1a")
true

isNaN(true)
false
isNaN('true')
true