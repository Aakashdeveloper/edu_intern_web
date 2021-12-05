import React from 'react';
import './Search.css';

const Search = () => {
    return(
        <div id="search">
                <div id="logo">
                    <span>e!</span>
                </div>
                <div id="heading">
                    Find Thé Bešt Plače Nêär Yoü
                </div>
                <div id="dropdown">
                    <select>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                    </select>
                    <select>
                        <option>Gulab</option>
                        <option>Wow Momos</option>
                    </select>
                </div>
        </div>
    )
}

export default Search;