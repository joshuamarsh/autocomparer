export const MODELS_LOADING = 'MODELS_LOADING';
export const MODELS_FAIL = 'MODELS_FAIL';
export const MODELS_SUCCESS = 'MODELS_SUCCESS';

export type Model = {
    id: string
    name: string
}

export interface ModelsLoading {
  type: typeof MODELS_LOADING
}

export interface ModelsFail {
  type: typeof MODELS_FAIL
}

export interface ModelsSuccess {
  type: typeof MODELS_SUCCESS,
  payload: Model[]
}

export type ModelsDisptachTypes = ModelsLoading | ModelsFail | ModelsSuccess