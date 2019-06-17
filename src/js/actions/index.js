import { ADD_PLACE } from '../constants/action-types';

export const addPlace = placeName => {
	return {
		type: ADD_PLACE,
		payload: placeName,
	};
};