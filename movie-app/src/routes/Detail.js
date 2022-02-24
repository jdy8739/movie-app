import './Detail.css';
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Link } from 'react-router-dom';


function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState('');
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${ id }`)
            .then(res => {
                const fetchedMovie = res.data.data.movie;
                setMovie(fetchedMovie);
                setGenres(fetchedMovie.genres);
            })
    }, []);

    return (
        <div className='window'>
            <img src={ `${ movie.large_cover_image }` }></img>
            <h2>{ movie.title_long }</h2>
            <div className='flex-box'>
                <p>runtime: { movie.runtime }</p>
                <p>rating: { movie.rating }</p>
                <p>like count: { movie.like_count }</p>
                <p>download count: { movie.download_count }</p>
            </div>
            <div className='flex-box'>
            {
                genres.map((genre, i) => {
                    return (
                        <p key={i}>{genre}</p>
                    )
                })
            }
            </div>
            <div className='desc-container'>
                <p>{ movie.description_intro }</p>
            </div>
            <div className='flex-box'>
            <a href={ movie.url } target='_blank'><p>more</p></a>
            &emsp;
            <p><Link to='/'>back</Link></p>
            </div>
            <div className='bg' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), 
            url(${ movie.background_image_original })` }}></div>
        </div>
    )
}

export default Detail;