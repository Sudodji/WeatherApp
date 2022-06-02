export enum EActionsTypes {
  LOADING_FORECAST = 'LOADING_FORECAST',
  SAVE_FORECAST = 'SAVE_FORECAST',
  ERROR_FORECAST = 'ERROR_FORECAST',
}

type dataWeek = {
  main: {
    list: [],
  }
}

export const loadingForecastAction = (payload: string) => ({
  type: EActionsTypes.LOADING_FORECAST,
  payload,
})

export const saveForecastAction = (data: dataWeek[]) => ({
  type: EActionsTypes.SAVE_FORECAST,
  payload: data,
})

export const errorForecastAction = () => ({
  type: EActionsTypes.ERROR_FORECAST,
})
