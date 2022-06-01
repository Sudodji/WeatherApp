import { toDate } from '../../helper';
import { IState } from '../initialState';

const getAutoCompleteState = (state:IState) => state.autoComplete;
const getGeoPositionState = (state:IState) => state.geoPosition;
const getDayTempState = (state:IState) => state.dayTemp;
const getWeekTempState = (state: IState) => {
  const _ = require('lodash');
  const forecastArray = state.weekTemp.main.list;
  const newArray = forecastArray.map((elem: any) => (
    { ...elem, dt: toDate(elem.dt) }
  ))
  const groupDate = _.groupBy(newArray, 'dt')
  const info = Object.keys(groupDate).map(date => {
    const maxObj = _.maxBy(groupDate[date], 'main.temp_max');
    const minObj = _.minBy(groupDate[date], 'main.temp_min');
    const weekObj = {
      dt: '',
      main: {
        temp_max: 0,
        temp_min: 0,
      },
    }
    weekObj.dt = maxObj.dt;
    weekObj.main.temp_max = maxObj.main.temp_max;
    weekObj.main.temp_min = minObj.main.temp_min;
    return weekObj
  })
  return info
};

export {
  getAutoCompleteState, getGeoPositionState, getDayTempState, getWeekTempState,
}
