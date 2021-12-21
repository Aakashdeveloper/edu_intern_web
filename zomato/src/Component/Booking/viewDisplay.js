import React from 'react';

function ViewDisplay(props){
    const renderTable = ({bookData}) => {
        if(bookData){
            return bookData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.bank_status}</td>
                        <td>{item.bank}</td>
                    </tr>
                )
            })
        }

    }

    return(
        <div className="container">
            <center><h2>Orders List</h2></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>RestName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default ViewDisplay;