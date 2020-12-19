import React from 'react';

import { AdvertsSearchForm } from './AdvertsSearchForm';

export interface IHomeProps {
}

export function Home (props: IHomeProps) {
  return (
    <div>
      <div className="banner">
        <div className="wrapper">
          <div className="banner__text">
            <h1>The UK’s biggest car search engine</h1>
            <p>Bringing together listings from all the major car sites</p>
          </div>
          <AdvertsSearchForm />
        </div>
      </div>
    </div>
  );
}
