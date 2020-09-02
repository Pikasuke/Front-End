// setup data layer
// Need to track the basket
import React, { useContext, useReducer, createContext } from 'react';

// Data Layer
export const StateContext = createContext();

//Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//How to use inside a component
export const useStateValue = () => useContext(StateContext);