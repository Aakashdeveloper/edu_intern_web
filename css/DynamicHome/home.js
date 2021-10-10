var url = "https://developerfunnel.herokuapp.com/location";
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="
var QuickUrl = "https://developerfunnel.herokuapp.com/booking"

//es6
async function getCity(){
    var response = await fetch(url);
    var data = await response.json()
    data.map((item) => {
        var element = document.createElement('option');
        var text = document.createTextNode(item.city_name)
        element.appendChild(text);
        element.value=item._id;
        document.getElementById('city').appendChild(element)
    })
}

function getHotels(){
    /*Select hotel wrt to city*/
    var selected = document.getElementById('city').value;
    var hotels = document.getElementById('hotels')
    /* remove all the old options first*/
    while(hotels.length>0){
        hotels.remove(0) 
    }
    fetch(`${hotelUrl}${selected}`,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => { 
            var element = document.createElement('option');
            var text = document.createTextNode(`${item.name}|${item.locality}`);
            element.appendChild(text);
            document.getElementById('hotels').appendChild(element)
        })
    })
}

function QuickSearch(){
    fetch(QuickUrl)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var block = `<div class="tileContainer">
            <div class="tileComponent1">
                <img src=${item.image} alt="drinks"/>
            </div>
            <div class="tileComponent2">
                <div class="componentHeading">
                    ${item.name}
                </div>
                <div class="componentSubHeading">
                    Get The Best ${item.name} Places
                </div>
            </div>
        </div>`
        $('.mainTileContainer').append(block)
        })
    })
}

//es5
/*
function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var element = document.createElement('option');
            var text = document.createTextNode(item.city_name)
            element.appendChild(text);
            element.value=item._id;
            document.getElementById('city').appendChild(element)
        
        })
    })
}*/

/*function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var element = document.createElement('option'); //<option></option>
            var text = document.createTextNode(data[i].city_name) // delhi
            element.appendChild(text); //<option>delhi</option>
            element.value=data[i]._id; //<option value="1">delhi</option>
            document.getElementById('city').appendChild(element) //<select><option value="1">delhi</option></select>
        }
    })
}*/