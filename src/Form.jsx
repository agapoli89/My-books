import { useState } from 'react';

import './styles/Form.css'

const Form = ({
    author = '',
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
        console.log('formSubmit');
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
                    type="text"
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