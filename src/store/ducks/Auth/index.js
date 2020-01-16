import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types and Action Creators */
const { Types, Creators } = createActions({
  // Ducks
  signIn: ['auth'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  auth: false,
});

/* Reducers */
export const signIn = (state, { auth }) => {
  return state.merge({ auth });
  // return state.merge({ [id]: { type, content } });
};

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN]: signIn,
});
