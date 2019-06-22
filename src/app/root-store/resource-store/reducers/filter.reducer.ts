import { Filter } from '@app/resources/models';
import { Actions, ActionTypes } from '../actions/filter.actions';
import { initialState } from '../states/filter.state';

export function reducer(state = initialState, action: Actions): Filter {
  switch (action.type) {
    case ActionTypes.LOAD_FILTER: {
      return {
        ...state
      };
    }
    case ActionTypes.UPDATE_FILTER: {
      return Object.assign({}, action.payload);
    }
    case ActionTypes.UPDATE_FILTER_LEVEL: {
      return Object.assign({}, state, {
        resourceLevel: action.payload
      });
    }
    case ActionTypes.UPDATE_FILTER_TYPE: {
      return Object.assign({}, state, {
        resourceType: action.payload
      });
    }
    default: {
      return state;
    }
  }
}
