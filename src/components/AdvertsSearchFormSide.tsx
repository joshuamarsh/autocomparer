import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { RootStore } from '../store'
import { GetMakes } from '../actions/MakeActions'
import { GetModels } from '../actions/ModelActions'
import { AdvertSearchParams } from '../actions/AdvertActionTypes'
import { withRouter } from "react-router-dom"
import queryString from 'query-string'

export const AdvertsSearchFormSide = withRouter(({ location, history }) => {
  const {register, handleSubmit, setValue, errors} = useForm<AdvertSearchParams>()

  const dispatch = useDispatch()

  const makesState = useSelector((state: RootStore) => state.makes)
  const modelsState = useSelector((state: RootStore) => state.models)

  const getModels = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(GetModels(event.target.value))
  }

  const searchAdverts = handleSubmit((data) => {
    // dispatch(GetAdvert(data))
    history.push('/results?' + queryString.stringify(data))
  })

  const params: AdvertSearchParams = queryString.parse(location.search)

  useEffect(() => {
    dispatch(GetMakes())

    if (params.make) {
      dispatch(GetModels(params.make))
    }
  }, [dispatch, params.make])

  useEffect(() => {
    (Object.keys(params) as Array<keyof AdvertSearchParams>).forEach(key => {
      setValue(key, params[key], { shouldDirty: true })
    })
  })

  return (
    <form onSubmit={searchAdverts} className="search-form-side">
      {/* <div className="form-item">
        <label htmlFor="provider">Ebay</label>
        <input ref={register} type="checkbox" name="provider" id="provider" value="ebay" defaultChecked/>
        <label htmlFor="provider">Autotrader</label>
        <input ref={register} type="checkbox" name="provider" id="provider" value="autotrader" defaultChecked/>
        <label htmlFor="provider">Facebook</label>
        <input ref={register} type="checkbox" name="provider" id="provider" value="facebook" defaultChecked/>
      </div> */}
      <div className="form-item">
        <label htmlFor="make">Make</label>
        <select ref={register} onChange={e => getModels(e)} name="make" id="make" defaultValue="">
          <option value="">Any Make</option>
          <option value="_separator" disabled>----</option>
          <option value="_other">Other Make - Please specify</option>
          <option value="_separator" disabled>----</option>
          {makesState.makes?.map(make => {
            return (
              <option key={make.id} value={make.id}>{make.name}</option>
            );
          })}
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="model">Model</label>
        <select ref={register} name="model" id="model" defaultValue="">
          <option value="">Any Model</option>
          <option value="_separator" disabled>----</option>
          <option value="_other">Other Model - Please specify</option>
          <option value="_separator" disabled>----</option>
          {modelsState.models?.map(model => {
            return (
              <option key={model.id} value={model.id}>{model.name}</option>
            );
          })}
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="postcode">Postcode</label>
        <input ref={register({ required: true})} placeholder="ex M1 2AB" id="postcode" name="postcode" type="text"/>
        {
          errors.postcode && <div className="error">Please enter your postcode</div>
        }
      </div>
      <div className="form-item">
        <label htmlFor="radius">Radius</label>
        <select ref={register} name="radius" id="radius" defaultValue="1500">
          <option value="1500">National</option>
          <option value="1">Within 1 mile</option>
          <option value="5">Within 5 miles</option>
          <option value="10">Within 10 miles</option>
          <option value="15">Within 15 miles</option>
          <option value="20">Within 20 miles</option>
          <option value="25">Within 25 miles</option>
          <option value="30">Within 30 miles</option>
          <option value="35">Within 35 miles</option>
          <option value="40">Within 40 miles</option>
          <option value="45">Within 45 miles</option>
          <option value="50">Within 50 miles</option>
          <option value="55">Within 55 miles</option>
          <option value="60">Within 60 miles</option>
          <option value="70">Within 70 miles</option>
          <option value="80">Within 80 miles</option>
          <option value="90">Within 90 miles</option>
          <option value="100">Within 100 miles</option>
          <option value="200">Within 200 miles</option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="sort">Sort By</label>
        <select ref={register} name="sort" id="sort" defaultValue="best_match">
          <option value="source">Source</option>
          <option value="best_match">Best Match</option>
          <option value="date_desc">Newest Posted</option>
          <option value="date_asc">Oldest Posted</option>
          <option value="dist_asc">Nearest to me</option>
          <option value="year_desc">Model Year</option>
          <option value="price_asc">Lowest Price</option>
          <option value="price_desc">Highest Price</option>
          <option value="miles_asc">Lowest Mileage</option>
        </select>
      </div>
      <div className="form-actions">
        <button className="button" type="submit">Search</button>
      </div>
    </form>
  );
});
