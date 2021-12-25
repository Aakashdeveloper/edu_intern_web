import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';

const Home = (props) => {
    console.log("in home>>>>>",props)
    return(
        <>
            <Search/>
            <QuickSearch/>
        </>
    )
}

export default Home;