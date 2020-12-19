import { MODELS_FAIL, MODELS_LOADING, MODELS_SUCCESS, ModelsDisptachTypes, Model } from "../actions/ModelActionTypes";

interface DefaultStateI {
  loading: boolean,
  models?: Model[]
}

const defaultState: DefaultStateI = {
  loading: false
};

const modelsReducer = (state: DefaultStateI = defaultState, action: ModelsDisptachTypes) : DefaultStateI => {
  switch (action.type) {
    case MODELS_FAIL:
      return {
        loading: false
      }
    case MODELS_LOADING:
      return {
        loading: true
      }
    case MODELS_SUCCESS:
      return {
        loading: false,
        models: action.payload
      }
    default:
      return state
  }
}

export default modelsReducer