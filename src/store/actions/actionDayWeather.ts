export enum EActionsTypes {
  LOADING_CITY = 'LOADING_CITY',
  SAVE_TEMP = 'SAVE_TEMP',
  ERROR_TEMP = 'ERROR_TEMP',
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
