// Estos actions les van a llegar a los reducers y les van a informar como deben modificar el state

import { DECREMENT, INCREMENT, SIGN_IN_OUT } from '../types/index';

export const increment = (num) => {
    return {
        type: INCREMENT,
        payload: num
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const singInOut = () => {
	return {
		type: SIGN_IN_OUT,
	};
};
