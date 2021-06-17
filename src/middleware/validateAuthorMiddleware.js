import { ADD } from '../actions/appActions';

export const validateAuthorMiddleware = store => next => action => {
    console.log(action);

    if (action.type === ADD && !action.payload.author.length) {
        console.warn('Proszę wpisz autora')
        return;
    }
    next(action);
};