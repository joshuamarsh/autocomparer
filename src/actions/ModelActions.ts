import {Dispatch} from 'redux'
import { ModelsDisptachTypes, MODELS_LOADING, MODELS_FAIL, MODELS_SUCCESS } from './ModelActionTypes';
import axios from 'axios';

export const GetModels = (make: string) => async (dispatch: Dispatch<ModelsDisptachTypes>) => {
  try {
    dispatch({
      type: MODELS_LOADING
    })

    const res = await axios.get(`http://localhost:8090/api/GetModels?provider[]=ebay&provider[]=autotrader`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        make: make,
      }
    });

    dispatch({
      type: MODELS_SUCCESS,
      payload: res.data
    })
  } catch(e) {
    dispatch({
      type: MODELS_FAIL
    })
  }
};