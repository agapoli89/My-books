import { useState } from 'react';

import './styles/Form.css'

const Form = ({
    author = '',
    callback,
    comment = '',
    id,
    rate= 5,
}) => {
    const [authorInput, setAuthorInput] = useState(author);
    const [rateInput, setRateInput] = useState(rate);
    const [commentInput, setCommentInput] = useState(comment);

    const handleOnChangeAuthorInput = e => setAuthorInput(e.target.value);
    const handleOnChangeRateInput = e => setRateInput(e.target.value);
    const handleOnChangeCommentInput = e => setCommentInput(e.target.value);
    const handleFormSubmit = e => {
        e.preventDefault();
        
        if (!authorInput.length) return;

        const rateObject = {
            author: authorInput,
            comment: commentInput,
            id,
            rate: Number(rateInput),
        };

        console.log(rateObject);

        id ? console.log('Edycja oceny') : console.log('Dodanie oceny');

        if (id) {
            callback();
        }
    }

    return (  
        <form onSubmit={handleFormSubmit} className="form">
            <label>
                Autor:
                <input
                    onChange={handleOnChangeAuthorInput}
                    type="text"
                    value={authorInput}
                />
            </label>
            <label>
                Ocena:
                <input
                    onChange={handleOnChangeRateInput}
                    type="number"
                    value={rateInput}
                />
            </label>
            <label>
                Komentarz:
                <input
                    onChange={handleOnChangeCommentInput}
                    type="textarea"
                    value={commentInput}
                />
            </label>
            <button type="submit">
                {id ? 'Edytuj' : 'Dodaj'}
            </button>
        </form>
    );
}
 
export default Form;