import {Dispatch} from 'redux'
import { AdvertDisptachTypes, ADVERTS_LOADING, ADVERTS_FAIL, ADVERTS_SUCCESS, AdvertSearchParams } from './AdvertActionTypes';
import axios from 'axios';
import queryString from 'query-string';

export const GetAdvert = (AdvertSearch: AdvertSearchParams) => async (dispatch: Dispatch<AdvertDisptachTypes>) => {
  try {
    dispatch({
      type: ADVERTS_LOADING
    })

    const res = await axios.get(`http://localhost:8090/api/adverts`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        provider: ['ebay', 'autotrader'],
        make: AdvertSearch.make,
        model: AdvertSearch.model,
        postcode: AdvertSearch.postcode,
        radius: AdvertSearch.radius,
        sort: AdvertSearch.sort
      },
      
      paramsSerializer: params => {
        return queryString.stringify(params)
      }
    });

    dispatch({
      type: ADVERTS_SUCCESS,
      payload: res.data
    })
  } catch(e) {
    dispatch({
      type: ADVERTS_FAIL
    })
  }
};
