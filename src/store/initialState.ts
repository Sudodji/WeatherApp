export interface IState {
  dayTemp: IDayTemp,
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
interface ICommonReducer{
  loading: boolean,
  error: boolean
}
