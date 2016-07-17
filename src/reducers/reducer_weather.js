import { FETCH_WEATHER } from '../actions/index';

const defaultState = {
  city: "No City"
}

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // same as state.concat(action.payload.data)
      return [ action.payload.data, ...state ];
  }
  return state;
}
