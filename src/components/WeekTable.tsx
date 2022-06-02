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
      {weatherWeek.length && (
        <table className={ styles.table }>
          <tbody>
            <tr>
              {weatherWeek.map(date => (
                <th>{date.dt}</th>
              )) }
            </tr>
            <tr>
              {weatherWeek.map(temp => (
                <td style={{ backgroundColor: color(temp.main.temp_max) }}>
                  {temp.main.temp_max}
                  &#176;
                </td>
              ))}
            </tr>
            <tr>
              {weatherWeek.map(temp => (
                <td style={{ backgroundColor: color(temp.main.temp_min) }}>
                  {temp.main.temp_min}
                  &#176;
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}
export default WeekTable;
