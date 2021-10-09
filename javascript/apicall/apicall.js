var url = "https://developerfunnel.herokuapp.com/location";


function getLocation(){
    // call api
    fetch(url)
    // it will return the promise
    .then((res) =>  res.json())
    // it will return the data
    .then((data) => {
        for(i=0;i<data.length;i++){
            // console.log(data[i])
            var element = document.createElement('p') // <p></p>
            var TextNode = document.createTextNode(data[i].city_name) //delhi
            element.appendChild(TextNode) // <p>Delhi</p>
            document.getElementById('output').appendChild(element) // <div><p>Delhi</p></div>
        }
    })
}
