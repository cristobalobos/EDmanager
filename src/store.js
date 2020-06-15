import { createStore } from 'redux';

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: 'Juan Carlitos',
      foto: 'https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg',
    },
    {
      id: 2,
      nombre: 'Beto Quiroga',
      foto: 'https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg',
    },
    {
      id: 3,
      nombre: 'Alejo Garcia',
      foto: 'https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg',
    },
  ],
  titulares: [],
  suplentes: [],
};

/**
 * fuction reducer do change in app
 * @param {object} state stored data
 * @param {object} action change in state
 */
const reducerManager = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default createStore(reducerManager);
