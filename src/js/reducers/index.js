import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
	main: [],
};

function rootReducer(state = initialState, action) {
	if (action.type === ADD_ARTICLE) {
		return Object.assign({}, state, {
			main : state.main.concat(action.payload),
		});
	}
	return state;
}

export default rootReducer;
