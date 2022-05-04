import '../MovieFormHandler.css';
import { useState } from 'react';

function MovieFormHandler({ title, genre, budgetOverFiftyMillion, stars, yearReleased, _id, submit, btnText, setEditToggle }) {

    const initialInputs = {
        title: title || '',
        genre: genre || '',
        budgetOverFiftyMillion: budgetOverFiftyMillion || '',
        stars: stars || '',
        yearReleased: yearReleased || ''
    };

    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);

        if (btnText === 'Submit Edit') {
            setEditToggle(prevToggle => !prevToggle);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' value={inputs.title} onChange={handleChange} placeholder='Title' className='form-input' required></input>
            <input type='text' name='genre' value={inputs.genre} onChange={handleChange} placeholder='Genre' className='form-input' required></input>
            <input type='text' name='budgetOverFiftyMillion' value={inputs.budgetOverFiftyMillion} onChange={handleChange} placeholder='Budget over 50 million?' className='form-input' required></input>
            <input type='text' name='stars' value={inputs.stars} onChange={handleChange} placeholder='Movie stars (cast)' className='form-input' required></input>
            <input type='text' name='yearReleased' value={inputs.yearReleased} onChange={handleChange} placeholder='Year Released' className='form-input' required></input>

                <button className='add-movie-btn'>{btnText}</button>
        </form>
    );
}

export default MovieFormHandler;