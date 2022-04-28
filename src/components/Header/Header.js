import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/Movies/MovieSlice';
import user from '../../images/user.png';
import "./Header.scss"

const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch();
    const submithander = (e) => {
        e.preventDefault();
        if (term === "") return alert("Please enter Something!");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
        //console.log(term);
    }
    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">Movie App</Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submithander}>
                    <input type='text' value={term} placeholder="search for a Movie or Show" onChange={(e) => setTerm(e.target.value)} />
                    <button type="submit"><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;