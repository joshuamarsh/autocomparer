import {Dispatch} from 'redux'
import { MakesDisptachTypes, MAKES_LOADING, MAKES_FAIL, MAKES_SUCCESS } from './MakeActionTypes';
import axios from 'axios';

export const GetMakes = () => async (dispatch: Dispatch<MakesDisptachTypes>) => {
  try {
    dispatch({
      type: MAKES_LOADING
    })

    const res = await axios.get(`http://localhost:8090/api/GetMakes?provider[]=ebay&provider[]=autotrader`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });

    dispatch({
      type: MAKES_SUCCESS,
      payload: res.data
    })
  } catch(e) {
    dispatch({
      type: MAKES_FAIL
    })
  }
};