import React,{Component} from 'react';
import axios from 'axios';
import ViewDisplay from './viewDisplay'

const url = "https://xomato.herokuapp.com/orders";
const putUrl = "https://xomato.herokuapp.com/updateStatus"

class ViewApi extends Component{
    constructor(props){
        super(props);

        this.state={
            orders:'',
            status:'Pending'
        }
    }

    render(){
        return(
            <ViewDisplay bookData={this.state.orders}/>
        )
    }

    componentDidMount(){
        if(this.props.location){
            var qparams = this.props.location.search;
            if(qparams){
                var data = {
                    "date":qparams.split('&')[2].split('=')[1],
                    "bank_status":qparams.split('&')[0].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1],
                }

                var id = qparams.split('&')[1].split('=')[1].split('_')[1]
                fetch(`${putUrl}/${id}`,{
                    method:'PUT',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
                .then((res)=> res.json())
                .then((data) => {
                    this.setState({status:'Delivered'})
                })
            }
        }
        axios.get(url).then((res) => {this.setState({orders:res.data})})
    }
}


export default ViewApi