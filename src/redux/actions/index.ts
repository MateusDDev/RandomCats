import { Dispatch } from '../../types';

export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const FAILED_PICTURE = 'FAILED_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

const requestPicture = () => {
  return {
    type: REQUEST_API,
  };
};

const getPicture = (image: string) => ({
  type: GET_PICTURE,
  payload: image,
});

const failedPicture = (errorMsg: string) => {
  return {
    type: FAILED_PICTURE,
    payload: errorMsg,
  };
};

export function fetchAPI() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestPicture);
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      dispatch(getPicture(data[0].url));
    } catch (error: any) {
      dispatch(failedPicture(error.message));
    }
  };
}
