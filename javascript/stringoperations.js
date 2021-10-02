var name = "kaNIka"
undefined
name.toLowerCase()
'kanika'
name.toUpperCase()
'KANIKA'


var city = "Amsterdam"
city.length
9
city[0]
'A'
city[1]
'm'
city[city.length-1]
'm'

var city = "    Paris    "
city.length
13
city.trim()
'Paris'
city.trim().length
5
var city = " Helsinki .    "
city.trim().length
10
city.trim()
'Helsinki .'


/// JS is case sensitive
var name = "John"
var name1 = "john"
undefined
name == name1
false
name.toLowerCase() == name1.toLowerCase()
true

var city = "amSTerDaM"
undefined
city.charAt(0)
'a'
city[0]
'a'
city.charAt(6)
'D'
var city = "amSTerDaM"
city.charAt(0).toUpperCase()
'A'

var city = "amSTerDaM"
undefined
city.slice(1)
'mSTerDaM'
city.slice(2)
'STerDaM'
city.slice(2,6)
'STer'
city.slice(-1)
'M'
city.slice(0,-1)
'amSTerDa'
city.slice(0,-2)
'amSTerD'
city.slice(-1,-2)
''
city.slice(-4,-2)


var city = "amSTerDaM"
city.charAt(0).toUpperCase()
'A'
city.slice(1)
'mSTerDaM'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()

'Amsterdam'

var a = "i am learning Javascript"
a.replace(/Javascript/,'JS')
'i am learning JS'

var a = "Javascript i am learning Javascript"
var a = "i am learning Javascript"
undefined
a.replace(/Javascript/,'JS')
'i am learning JS'
var a = "Javascript i am learning Javascript"
undefined
a.replace(/Javascript/,'JS')
'JS i am learning Javascript'
a.replace(/Javascript/g,'JS')


var city = " Helsinki .    "
city.replace(/ /g,'')
'Helsinki.'

var url ="https://github.com/Aakashdeveloper/edu_july_intern"
url.split('/')

var url ="https://github.com/Aakashdeveloper/edu_july_intern"
url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'edu_july_intern']0: "https:"1: ""2: "github.com"3: "Aakashdeveloper"4: "edu_july_intern"length: 5[[Prototype]]: Array(0)
var out = url.split('/')
undefined
out
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'edu_july_intern']
out[4]
'edu_july_intern'
out[out.length-1]
'edu_july_intern'
var a = "Javascript i am learning Javascript"
undefined
a.split(' ')
(5) ['Javascript', 'i', 'am', 'learning', 'Javascript']
a.split(' ')[0]
'Javascript'

var name = "javaScript"
undefined
name.split('')
(10) ['j', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
var out = name.split('')
undefined
out
(10) ['j', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
out.toString()
'j,a,v,a,S,c,r,i,p,t'
out.toString().replace(/,/g,'')
'javaScript'

var a = 4364554
undefined
a.toString()
'4364554'
a.toString().slice(0,-1)
'436455'
a.toString().slice(0,-1)
'436455'