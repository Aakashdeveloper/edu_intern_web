// to print the series
// to iterate over data

// for
for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'London', 'Dubai']
for(i=0;i<city.length;i++) {
    console.log(city[i])
}
'Delhi'
'Mumbai'
'Pune'
'Amsterdam'
'London'
'Dubai'


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

for(i=0;i<movies.length;i++){
    console.log(movies[i].name)
}

Avengers
Jab We Met


// for of
// for in

var city = ['Delhi', 'Mumbai', 'Pune', 'Amsterdam', 'London', 'Dubai']

for(mycity of city){
    console.log(mycity)
}

var a = {
    "id":1,
    "name":"SBI",
    "logo":"https://i.ibb.co/VYz7T0X/sbi.png",
    "payload": {}
}

for(key in a){
    console.log(key)
}

for(key in a){
    console.log(a[key])
}