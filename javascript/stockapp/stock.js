function getStocks(){
    var url = "http://localhost:1234/stocks";
    var url2 = "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.map((api1Data) => {{
            fetch(`${url2}/${api1Data.name}`)
            .then((res) =>  res.json())
            .then((api2data) => {
                var element=`
                    <div class="col">
                        <div class="card h-100">
                            <img src='${api1Data.logo}' class="card-img-top" style="height:250px"/>
                            <hr/>
                            <div class="card-body">
                                <h5 class="card-title">${api2data.data.company}</h5>
                                <h5 class="card-title">${api2data.data.HN}-${api2data.data.SC_SUBSEC}</h5>
                                <hr/>
                                <p class="card-text">Current Price: ${api2data.data.pricecurrent}</p>
                                <p class="card-text">Price Change: ${api2data.data.pricechange}</p>
                                <p class="card-text">Price % Change: ${api2data.data.pricepercentchange}</p>
                            </div>
                        </div>
                    </div>
                `
                $('#display').append(element)
            })
        }})
    })
}