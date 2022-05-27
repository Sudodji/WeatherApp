export enum EActionsTypes {
  LOADING_CITY = 'LOADING_CITY',
  SAVE_TEMP = 'SAVE_TEMP',
  ERROR_TEMP = 'ERROR_TEMP',
  LOADING_AUTO_COMPLETE = 'LOADING_AUTO_COMPLETE',
  SAVE_AUTO_RESULTS = 'SAVE_AUTO_RESULTS',
  ERROR_AUTO_RESULTS = 'ERROR_AUTO_RESULTS',
  LOADING_GEO = 'LOADING_GEO',
  SAVE_COORDS = 'SAVE_COORDS',
  ERROR_COORDS = 'ERROR_COORDS',
}
type dataDay = {
  main: {
    temp: number,
    pressure: number,
    humidity: number,
  },
  weather: [{
    icon: string,
  }],
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
type dataGeoPosition = {
  name:{
  name: string,
  }
}
export const loadingCityAction = (payload: string) => ({
  type: EActionsTypes.LOADING_CITY,
  payload,
})

export const saveTempAction = (data: dataDay) => ({
  type: EActionsTypes.SAVE_TEMP,
  payload: [ data.main, data.weather ],
})

export const errorTempAction = () => ({
  type: EActionsTypes.ERROR_TEMP,
})

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

export const loadingGeoAction = () => ({
  type: EActionsTypes.LOADING_GEO,
})

export const saveCoordsAction = (data: dataGeoPosition) => ({
  type: EActionsTypes.SAVE_COORDS,
  payload: data,
})

export const errorCoordsAction = () => ({
  type: EActionsTypes.ERROR_COORDS,
})
