import {combineReducers} from 'redux'
import advertsReducer from './AdvertsReducer'
import makesReducer from './MakesReducer'
import modelsReducer from './ModelsReducer'

const rootReducer = combineReducers({
  adverts: advertsReducer,
  makes: makesReducer,
  models: modelsReducer
});

export default rootReducer