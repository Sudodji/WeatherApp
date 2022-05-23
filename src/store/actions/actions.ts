export enum EActionsTypes {
  LOADING_CITY = 'LOADING_CITY',
  SAVE_TEMP = 'SAVE_TEMP',
  ERROR_TEMP = 'ERROR_TEMP',
  LOADING_FORECAST = 'LOADING_FORECAST',
  SAVE_FORECAST = 'SAVE_FORECAST',
  ERROR_FORECAST = 'ERROR_FORECAST'
}
export const loadingCityAction = (payload: string) => ({
  type: EActionsTypes.LOADING_CITY,
  payload,
})

export const saveTempAction = (data: any) => ({
  type: EActionsTypes.SAVE_TEMP,
  payload: [ data.main, data.weather ],
})

export const errorTempAction = () => ({
  type: EActionsTypes.ERROR_TEMP,
})

export const loadingForecastAction = () => ({
  type: EActionsTypes.LOADING_FORECAST,
})

export const saveForecastAction = (data:any) => ({
  type: EActionsTypes.SAVE_FORECAST,
  payload: data,
})

export const errorForecastAction = () => ({
  type: EActionsTypes.ERROR_FORECAST,
})
