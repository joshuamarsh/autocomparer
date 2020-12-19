import React from 'react';
import { AdvertsSearchFormSide } from './AdvertsSearchFormSide';
import { Adverts } from './Adverts';

export function AdvertsResults () {
  return (
    <div className="wrapper">
      <section className="search-page search-page--left">
        <AdvertsSearchFormSide />
      </section>
      <section className="search-page search-page--right">
        <Adverts />
      </section>
    </div>
  );
}
