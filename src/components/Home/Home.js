import React, { useEffect } from 'react';
import MovieList from '../MovieList/Movielist';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/Movies/MovieSlice'

const Home = () => {
   
    const dispatch = useDispatch();
    const movieText = "Harry Potter";
    const showtext = "Spider Man"
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showtext));
    }, [dispatch]);
    return (
        <div>
            <div className='banner-img'>

            </div>
            <MovieList />
        </div>
    );
};

export default Home;