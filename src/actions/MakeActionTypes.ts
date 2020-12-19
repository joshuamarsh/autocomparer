export const MAKES_LOADING = 'MAKES_LOADING';
export const MAKES_FAIL = 'MAKES_FAIL';
export const MAKES_SUCCESS = 'MAKES_SUCCESS';

export type Make = {
    id: string
    name: string
}

export interface MakesLoading {
  type: typeof MAKES_LOADING
}

export interface MakesFail {
  type: typeof MAKES_FAIL
}

export interface MakesSuccess {
  type: typeof MAKES_SUCCESS,
  payload: Make[]
}

export type MakesDisptachTypes = MakesLoading | MakesFail | MakesSuccess