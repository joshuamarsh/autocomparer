import { MAKES_FAIL, MAKES_LOADING, MAKES_SUCCESS, MakesDisptachTypes, Make } from "../actions/MakeActionTypes";

interface DefaultStateI {
  loading: boolean,
  makes?: Make[]
}

const defaultState: DefaultStateI = {
  loading: false
};

const makesReducer = (state: DefaultStateI = defaultState, action: MakesDisptachTypes) : DefaultStateI => {
  switch (action.type) {
    case MAKES_FAIL:
      return {
        loading: false
      }
    case MAKES_LOADING:
      return {
        loading: true
      }
    case MAKES_SUCCESS:
      return {
        loading: false,
        makes: action.payload
      }
    default:
      return state
  }
}

export default makesReducer