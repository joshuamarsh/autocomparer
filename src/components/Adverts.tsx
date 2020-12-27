import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../store';
import NumberFormat from 'react-number-format';
import { withRouter } from "react-router-dom";
import queryString from 'query-string';
import { AdvertSearchParams } from '../actions/AdvertActionTypes'
import { GetAdvert } from '../actions/AdvertActions';
import {ReactComponent as CarSpinner} from '../images/car-spinner.svg';

export const Adverts = withRouter(({ location }) => {
  const advertsState = useSelector((state: RootStore) => state.adverts);

  const dispatch = useDispatch()

  React.useEffect(() => {
    const params: AdvertSearchParams = queryString.parse(location.search)
    if (params) {
      params.provider = ['ebay', 'autotrader'];
      dispatch(GetAdvert(params))
    }
  }, [location, dispatch])

  return (
    <div className="search-container">
      {(() => {
        if (advertsState.loading) {
          return (
          <div className="search-results-loading">
            <CarSpinner className="search-results-loading__spinner car-spinner"/>
            <h3 className="search-results-loading__text">Finding the perfect car.</h3>
          </div>
          );
        }
      })()}
      {advertsState.adverts && (
        <ul className="search-results">
          {advertsState.adverts.adverts?.map(advert => {
            return (
              <li className="search-results__item" data-advert-id={advert.id} key={advert.id}>
                <div className="search-result">
                  <a className="search-result__image" href={ advert.link } rel="noreferrer" target="_blank">
                    <img src={advert.image} alt=""/>
                  </a>
                  <div className="search-result__container"> 
                    <a className="search-result__title" href={ advert.link } rel="noreferrer" target="_blank">{ advert.title }</a>
                    <p className="search-result__price">
                      <NumberFormat value={advert.price / 100} displayType={'text'} thousandSeparator={true} prefix={'£'} />
                    </p>
                    <p className="search-result__description">{ advert.description }</p>
                    <p className="search-result__mileage">{advert.mileage}</p>
                    <div className="search-result-location">
                      <span className="search-result-location__town">{ advert.location }</span>
                      <span className="search-result-location__distance"> - { advert.distance } miles away</span>
                    </div>
                    <div className="search-result-provider">
                      {/* <img src="./images/external-link.svg" alt=""/> */}
                      <a className="search-result-provider__provider" href={ advert.link } rel="noreferrer" target="_blank">Open { advert.provider } listing</a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});
