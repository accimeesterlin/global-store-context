import React, { createContext, useReducer, useContext } from 'react';

export const SearchContext = createContext();
const { Provider } = SearchContext;

const initialState = {
   users: [] 
};

function searchReducer(state = initialState, action) {
    console.log('Action Name: ', action.type);
    console.log('Action Payload: ', action.payload);
    console.log('Full Action Payload: ', action);
    
    if (action.type === 'ADD_USERS') {
        return {
            ...state,
            users: [...action.payload]
        }
    }
    else if (action.type === 'ADD_USER') {
        return {
            ...state,
            users: [
                ...state.users,
                ...action.payload
            ]
        }
    }
    else {
        return state;
    }
}

export const useSearchContext = () => {
    return useContext(SearchContext);
}


export const SearchProvider = ({ value = {}, ...props }) => {
    const [state, dispatch] = useReducer(searchReducer, {
        users: []
    });

    return <Provider value={[state, dispatch]} {...props} />
};