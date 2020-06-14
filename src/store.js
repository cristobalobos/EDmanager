import { createStore } from 'redux';

const initialState = {
  jugadores: [],
  titulares: [],
  suplentes: [],
};

/**
 * fuction reducer do change in app
 * @param {object} state stored data
 * @param {object} action change in state
 */
const reducerManager = (state = initialState, action) => {
  return state;
};

export default createStore(reducerManager);
