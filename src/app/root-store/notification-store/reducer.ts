import { Actions, ActionTypes } from './actions';
import { initialState, State, featureAdapter } from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_NOTIFICATIONS: {
      return {
        ...state
      };
    }
    case ActionTypes.ADD_NOTIFICATION: {
      return featureAdapter.addOne(action.payload, {
        ...state
      });
    }
    case ActionTypes.REMOVE_NOTIFICATION: {
      return featureAdapter.removeOne(action.payload, {
        ...state
      });
    }
    default: {
      return state;
    }
  }
}
