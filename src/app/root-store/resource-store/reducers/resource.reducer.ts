import { Actions, ActionTypes } from '../actions/resource.actions';
import { featureAdapter, initialState, State } from '../states/resource.state';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_RESOURCES: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      return featureAdapter.addAll(action.payload.resources, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
