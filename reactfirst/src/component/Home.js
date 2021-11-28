import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <button className="btn btn-danger">
                Click
            </button>
            <button className="btn btn-success">
                Click
            </button>
            <h1>Hii From React</h1>
            <h2>Edureka</h2>
            <Footer/>
        </React.Fragment>
    )
}

export default Home