import { ADVERTS_FAIL, ADVERTS_LOADING, ADVERTS_SUCCESS, AdvertDisptachTypes, AdvertSearchResponse } from "../actions/AdvertActionTypes";

interface DefaultStateI {
  loading: boolean,
  adverts?: AdvertSearchResponse
}

const defaultState: DefaultStateI = {
  loading: false
};

const advertsReducer = (state: DefaultStateI = defaultState, action: AdvertDisptachTypes) : DefaultStateI => {
  switch (action.type) {
    case ADVERTS_FAIL:
      return {
        loading: false
      }
    case ADVERTS_LOADING:
      return {
        loading: true
      }
    case ADVERTS_SUCCESS:
      return {
        loading: false,
        adverts: action.payload
      }
    default:
      return state
  }
}

export default advertsReducer