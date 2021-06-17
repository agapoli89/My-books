import { useState, useRef } from 'react';

import { useDispatch } from 'react-redux';

import { addRate, editRate } from './actions/appActions';

import './styles/Form.css'

const Form = ({
    author = '',
    callback,
    comment = '',
    id,
    rate= 5,
    title = '',
}) => {
    const [authorInput, setAuthorInput] = useState(author);
    const [rateInput, setRateInput] = useState(rate);
    const [commentInput, setCommentInput] = useState(comment);
    const [titleInput, setTitleInput] = useState(title);
    const [addBookFormVisible, setAddBookFormVisible] = useState(false);

    const dispatch = useDispatch();

    const handleAddBookForm = () => {
        setAddBookFormVisible(prev => !prev);
    }
    const handleOnChangeTitleInput = e => setTitleInput(e.target.value);
    const handleOnChangeAuthorInput = e => setAuthorInput(e.target.value);
    const handleOnChangeRateInput = e => setRateInput(e.target.value);
    const handleOnChangeCommentInput = e => setCommentInput(e.target.value);
    const handleFormSubmit = e => {
        e.preventDefault();

        const rateObject = {
            title: titleInput,
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
        <form onSubmit={handleFormSubmit} className="form accordion" id="accordionExample">
            <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                    <button className={`accordion-button ${!addBookFormVisible && 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                    onClick={handleAddBookForm}>
                    Dodaj książkę
                    </button>
                </h3>
                <div id="collapseOne" className={`accordion-collapse collapse ${addBookFormVisible && 'show'}`}aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <div className="mb-3">
                    <label htmlFor="titleInput" className="form-label">Tytuł:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="titleInput" 
                        value={titleInput}
                        onChange={handleOnChangeTitleInput} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="authorInput" className="form-label">Autor:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="authorInput"
                        value={authorInput}
                        onChange={handleOnChangeAuthorInput} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="rateInput" className="form-label">Ocena:</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="rateInput"
                        value={rateInput}
                        onChange={handleOnChangeRateInput} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="commentInput" className="form-label">Komentarz:</label>
                    <textarea 
                        className="form-control" id="commentInput"
                        rows="3"
                        onChange={handleOnChangeCommentInput}
                        value={commentInput}>
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">{id ? 'Edytuj' : 'Dodaj'}</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;