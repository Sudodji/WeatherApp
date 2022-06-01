export interface IState {
  dayTemp: IDayTemp,
  weekTemp: IWeekTemp,
  autoComplete: IAutoComplete,
  geoPosition: IGeoPosition,
}
export interface IDayTemp extends ICommonReducer {
  main: {
    temp: number,
    pressure: number,
    humidity: number,
  };
  weather: [{
    icon: string,
  }]
}
export interface IWeekTemp extends ICommonReducer {
  main: {
    list: [],
  }
}
export interface IAutoComplete extends ICommonReducer {
  data: {
    _embedded: {
      ['city:search-results']: [{
        matching_full_name: string,
      }],
    }
  }
}
export interface IGeoPosition extends ICommonReducer {
  name:{
  name: string,
  }
}
interface ICommonReducer{
  loading: boolean,
  error: boolean
}
