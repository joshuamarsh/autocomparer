export const ADVERTS_LOADING = 'ADVERTS_LOADING';
export const ADVERTS_FAIL = 'ADVERTS_FAIL';
export const ADVERTS_SUCCESS = 'ADVERTS_SUCCESS';

export type AdvertSearchParams = {
  provider?: string[]
  make?: string
  model?: string
  postcode?: string
  radius?: string
  sort?: string
  page?: number
}

export type AdvertSearchResponse = {
  providers: string[]
  adverts: Advert[]
}

export type Advert = {
  provider: string
  id: string
  link: string
  location: string
  distance: number
  title: string
  price: number
  mileage: string
  description: string
  image: string
}

export interface AdvertsLoading {
  type: typeof ADVERTS_LOADING
}

export interface AdvertsFail {
  type: typeof ADVERTS_FAIL
}

export interface AdvertsSuccess {
  type: typeof ADVERTS_SUCCESS
  payload: AdvertSearchResponse
}

export type AdvertDisptachTypes = AdvertsLoading | AdvertsFail | AdvertsSuccess