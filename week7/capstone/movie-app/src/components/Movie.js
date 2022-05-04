import '../Movie.css'
import { useState } from 'react';
import MovieFormHandler from './MovieFormHandler';

function Movie({ title, genre, budgetOverFiftyMillion, stars, yearReleased, _id, editMovie, deleteMovie }) {

    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className='movie'>
            {!editToggle ?
                <>
                    <h1>Title: {title}</h1>
                    <h2>Genre: {genre}</h2>
                    <h3>Year Released: {yearReleased}</h3>
                    <h4>Budget: {budgetOverFiftyMillion === 'true' ? 'Over $50,000,000' : 'Under $50,000,000'}</h4>
                    <p><strong>Stars</strong>: {stars}</p>
                    
                    <button onClick={() => deleteMovie(_id)} className='delete-btn'>Delete</button>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className='edit-btn'>Edit</button>
                </>
                :
                <>
                    <MovieFormHandler 
                        title={title} 
                        genre={genre} 
                        budgetOverFiftyMillion={budgetOverFiftyMillion} 
                        yearReleased={yearReleased}
                        _id={_id}
                        btnText='Submit Edit'
                        submit={editMovie}
                        setEditToggle={setEditToggle}
                    />

                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className='close-btn'>Close</button>
                </>
            }
        </div>
    );
}

export default Movie;