import { useState } from 'react';

import { connect } from 'react-redux'

import Form from '../Form';
import { deleteRate } from '../actions/appActions';

const Element = ({author, comment, deleteRate, id, rate}) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleElements = () => setIsFormVisible(prev => !prev);

    const deleteElement = () => deleteRate(id);

    const formOrButtonElement = isFormVisible
        ? (
            <Form
                author={author}
                callback={toggleElements}
                comment={comment}
                id={id}
                rate={rate}
            />
        )
        : (
            <div>
                <button onClick={toggleElements}>Edytuj</button>
                <button onClick={deleteElement}>Usuń</button>
            </div>
        )

    return (  
        <li>
            <p>Autor oceny: {author}</p>
            <p>Ocena: {rate}</p>
            <p>Komentarz: {comment}</p>
            {formOrButtonElement}
        </li>
    );
}

const ElementConsumer = connect(null, {deleteRate})(Element);
 
export default ElementConsumer;