import { useState } from 'react';

import { connect } from 'react-redux';

import { addRate, editRate } from './actions/appActions';

import './styles/Form.css'

const Form = ({
    addRate,
    author = '',
    callback,
    comment = '',
    editRate,
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

        const rateObject = {
            author: authorInput,
            comment: commentInput,
            id,
            rate: Number(rateInput),
        };

        id ? editRate(rateObject) : addRate(rateObject);

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

const connectActionsToProps = ({
    addRate,
    editRate,
})

const FormConsumer = connect(null, connectActionsToProps)(Form);

export default FormConsumer;