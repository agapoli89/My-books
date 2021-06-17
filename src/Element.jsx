import { useState } from 'react';

import { connect } from 'react-redux'

import Form from './Form';
import { deleteRate } from './actions/appActions';

const Element = ({author, comment, deleteRate, id, rate, title}) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleElements = () => setIsFormVisible(prev => !prev);

    const deleteElement = () => deleteRate(id);

    const formOrButtonElement = isFormVisible
        ? (
            <Form
                title={title}
                author={author}
                callback={toggleElements}
                comment={comment}
                id={id}
                rate={rate}
            />
        )
        : (
            <div>
                <button onClick={toggleElements} className="btn btn-secondary mx-1">Edytuj</button>
                <button onClick={deleteElement} className="btn btn-secondary mx-1">Usuń</button>
            </div>
        )

    return (  
        <div className="card m-5">
            <div className="card-body">
                <h5 className="card-title">Tytuł: {title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Autor: {author}</h6>
                <p className="card-text">Ocena: {rate}</p>
                <p className="card-text">Komentarz: {comment}</p>
                {formOrButtonElement}
            </div>
        </div>
    );
}

const ElementConsumer = connect(null, {deleteRate})(Element);
 
export default ElementConsumer;