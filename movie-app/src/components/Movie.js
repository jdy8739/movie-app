import '../App.css';
import { Link } from 'react-router-dom';

function Movie({ movieImg, title, year, summary, genres, bg, id }) {
    return (
        <>
            <div className="movie-box">
                <div className='movie-content'>
                    <img src={ `${ movieImg }` }></img>
                    <div>
                        <h3><Link to={ `/detail/${ id }` }>{ title } { year }</Link></h3>
                        {/* a 태그는 새로고침되므로 Link to 가 좋음 */}
                        <p>{ summary.length > 450 ? `${summary.slice(0, 450)}...` : summary }</p>
                        <ul>
                        {
                            genres.map((genre, i) => {
                                return (
                                    <li key={i}>{ genre }</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className='movie-bg-img' style={{ backgroundImage: `url(${bg})` }}></div>
            </div>
        </>
    )
}

export default Movie;