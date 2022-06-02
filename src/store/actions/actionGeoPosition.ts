export enum EActionsTypes {
  LOADING_GEO = 'LOADING_GEO',
  SAVE_COORDS = 'SAVE_COORDS',
  ERROR_COORDS = 'ERROR_COORDS',
}

type dataGeoPosition = {
  name:{
  name: string,
  }
}

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
