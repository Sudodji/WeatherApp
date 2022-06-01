import React from 'react';
import { useSelector } from 'react-redux';
import { getWeekTempState } from '../store/selectors/tagsSelectors';
import styles from './weekTable.module.css'

const WeekTable: React.FC = () => {
  const color = (temp: number) => {
    if (temp > 0) {
      return `rgba(255, 0, 0, ${0.02 * temp})`
    }
    return `rgba(0, 0, 255, ${0.02 * Math.abs(temp)})`
  }
  const weatherWeek = useSelector(getWeekTempState);

  return (
    <div>
      {weatherWeek.length ? (
        <table className={ styles.table }>
          <tbody>
            <tr>
              <th>{weatherWeek[0].dt}</th>
              <th>{weatherWeek[1].dt}</th>
              <th>{weatherWeek[2].dt}</th>
              <th>{weatherWeek[3].dt}</th>
              <th>{weatherWeek[4].dt}</th>
              <th>{weatherWeek[5].dt}</th>
            </tr>
            <tr>
              <td style={{ backgroundColor: color(weatherWeek[0].main.temp_max) }}>
                {weatherWeek[0].main.temp_max}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[1].main.temp_max) }}>
                {weatherWeek[1].main.temp_max}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[2].main.temp_max) }}>
                {weatherWeek[2].main.temp_max}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[3].main.temp_max) }}>
                {weatherWeek[3].main.temp_max}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[4].main.temp_max) }}>
                {weatherWeek[4].main.temp_max}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[5].main.temp_max) }}>
                {weatherWeek[5].main.temp_max}
                &#176;
              </td>
            </tr>
            <tr>
              <td style={{ backgroundColor: color(weatherWeek[0].main.temp_min) }}>
                {weatherWeek[0].main.temp_min}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[1].main.temp_min) }}>
                {weatherWeek[1].main.temp_min}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[2].main.temp_min) }}>
                {weatherWeek[2].main.temp_min}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[3].main.temp_min) }}>
                {weatherWeek[3].main.temp_min}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[4].main.temp_min) }}>
                {weatherWeek[4].main.temp_min}
                &#176;
              </td>
              <td style={{ backgroundColor: color(weatherWeek[5].main.temp_min) }}>
                {weatherWeek[5].main.temp_min}
                &#176;
              </td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </div>
  )
}
export default WeekTable;
