export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

export const addRate = ({author, comment, rate}) => ({
    type: ADD,
    payload: {
        author,
        comment,
        id: Math.floor(Math.random() * 10000),
        rate,
    }
});

export const deleteRate = id => ({
    type: DELETE,
    payload: {
        id,
    }
});

export const editRate = ({author, comment, rate, id}) => ({
    type: EDIT,
    payload: {
        author,
        comment,
        id,
        rate,
    }
});
