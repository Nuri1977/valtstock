import fetchPicsumApi from '../../api/picsum-api';

export const GET_PICSUM = 'valstock/images/PICSUM';

const initialState = [];

export const setPicsum = (payload) => ({
  type: GET_PICSUM,
  payload,
});

export const getPixum = () => async (dispatch) => {
  const dataResponse = await fetchPicsumApi();
  dispatch(setPicsum(dataResponse));
};

const picsumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PICSUM:
      return action.payload;
    default:
      return state;
  }
};

export default picsumReducer;
