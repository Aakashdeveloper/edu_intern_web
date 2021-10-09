var movieName = "Avengers"
var movieRating = 4.5
var movieType = "Action"

var movieName1 = "Jab We Met"
var movieRating1 = 4.7
var movieType1 = "Romantic"

var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

movie
{name: 'Avengers', rating: 4.5, type: 'Action'}

movie.name
'Avengers'
movie.type
'Action'

movie.ind="Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.5, type: 'Action', ind: 'Hollywood'}

movie.rating = 4.3
4.3
movie
{name: 'Avengers', rating: 4.3, type: 'Action', ind: 'Hollywood'}

delete movie.type
true
{name: 'Avengers', rating: 4.3, ind: 'Hollywood'}

// JSON > JavaScript Object notation
var movies = [
    {
        name:'Avengers',
        rating:4.5,
        type:'Action'
    },
    {
        name:'Jab We Met',
        rating:4.7,
        type:'Romantic'
    }
]

movies[1].name
'Jab We Met'