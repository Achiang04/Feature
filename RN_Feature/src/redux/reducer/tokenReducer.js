import * as types from '../Constant/actionType';

const initialState = {
  loading: true,
  token: null,
};

function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_TOKEN_RESTORE:
      return Object.assign({}, state, {
        loading: false,
        token: action.token,
      });
    case types.GET_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        token: action.token,
      });
    default:
      return state;
  }
}

export default tokenReducer;
