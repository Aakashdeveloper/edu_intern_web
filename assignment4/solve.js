var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
]


var distinct = [];
for(i=0;i<ratingData.length;i++){
    if(distinct.indexOf(ratingData[i].restaurant) == -1){
        distinct.push(ratingData[i].restaurant)
    }
}

var unique = ['KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut']
var avRating = [];
var outRating = 0;
var count = 0

// run the loop over unique array
for(i=0;i<unique.length;i++){
    // run the loop over rating array
    for(j=0;j<ratingData.length;j++){
        // when name of restaurant match
        // add the rating and number of counter
        if(unique[i] == ratingData[j].restaurant){
            outRating += ratingData[j].rating;
            count = count+1
        }
    }

    // divide total rating by counter
    outRating = Number(outRating)/count;
    var myobj = {}
    myobj.restaurant = unique[i];
    myobj.avg = outRating
    // push into Array
    avRating.push(myobj)
    count = 0;
    outRating = 0;
}

var output =
[
    {restaurant: 'KFC', avg: 4},
    {restaurant: 'Burger King', avg: 4},
    {restaurant: 'Domino', avg: 1.5},
    {restaurant: 'Subway', avg: 3.5},
    {restaurant: 'Pizza Hut', avg: 5}
]

var final = []
for(i=0;i<output.length;i++){
    if(output[i].avg >= 4){
        final.push(output[i])
    }
}

var output = [
    {restaurant: 'KFC', avg: 4},
    {restaurant: 'Burger King', avg: 4},
    {restaurant: 'Pizza Hut', avg: 5}
]