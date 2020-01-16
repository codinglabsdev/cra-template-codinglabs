import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { toast } from 'react-toastify';

/* Types and Action Creators */
const { Types, Creators } = createActions({
  // Ducks
  addNotification: ['data'],
});

export const NotificationTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  // notifications: {},
});

/* Reducers */
export const addNotification = (state, { data }) => {
  const { type, content } = data;
  const id = toast[type](content);
  return state.merge({ [id]: { type, content } });
};

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_NOTIFICATION]: addNotification,
});
