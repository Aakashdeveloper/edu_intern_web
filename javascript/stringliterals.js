var name = "Avengers"
var rating = 4.5
var ind ="Hollywood"
var type="Action"

//es5
var out = "An "+name+" is an "+type+" movies with rating of "+rating+" from ind "+ind+"."
'An Avengers is an Action movies with rating of 4.5 from ind Hollywood.'

//es6
var out = `An ${name} is an ${type} movies with rating of ${rating} from ind ${ind}.`
'An Avengers is an Action movies with rating of 4.5 from ind Hollywood.'