export enum EActionsTypes {
  LOADING_AUTO_COMPLETE = 'LOADING_AUTO_COMPLETE',
  SAVE_AUTO_RESULTS = 'SAVE_AUTO_RESULTS',
  ERROR_AUTO_RESULTS = 'ERROR_AUTO_RESULTS',
}

type dataAutoComplete = {
  data: {
    _embedded: {
      'city:search-results': [{
        matching_full_name: string,
      }],
    },
  },
}

export const loadingAutoCompleteAction = (payload: string) => ({
  type: EActionsTypes.LOADING_AUTO_COMPLETE,
  payload,
})

export const saveAutoResultsAction = (data: dataAutoComplete) => ({
  type: EActionsTypes.SAVE_AUTO_RESULTS,
  payload: data,
})

export const errorAutoResultsAction = () => ({
  type: EActionsTypes.ERROR_AUTO_RESULTS,
})
