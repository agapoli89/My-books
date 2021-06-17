import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addRate, editRate } from './actions/appActions';

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

    const dispatch = useDispatch();

    const handleOnChangeAuthorInput = e => setAuthorInput(e.target.value);
    const handleOnChangeRateInput = e => setRateInput(e.target.value);
    const handleOnChangeCommentInput = e => setCommentInput(e.target.value);
    const handleFormSubmit = e => {
        e.preventDefault();

        const rateObject = {
            author: authorInput,
            comment: commentInput,
            id,
            rate: Number(rateInput),
        };

        id 
            ? dispatch(editRate(rateObject)) 
            : dispatch(addRate(rateObject));

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
                <textarea
                    onChange={handleOnChangeCommentInput}
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