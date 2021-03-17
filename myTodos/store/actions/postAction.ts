import * as types from '../types';

export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: types.GET_POSTS,
    payload: ['2fessf', '1231jbnkjd', '12jhybjhsdb', 'kdcbiu123'],
  });
};
