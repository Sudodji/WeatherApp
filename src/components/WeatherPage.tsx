import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import WeekTable from './WeekTable';
import { loadingForecastAction } from '../store/actions/actionWeekWeather';
import { loadingCityAction } from '../store/actions/actionDayWeather';
import { getDayTempState } from '../store/selectors/tagsSelectors';
import styles from './weatherPage.module.css';

const WeatherPage: React.FC = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const weatherDay = useSelector(getDayTempState)
  const dispatch = useDispatch();
  const params = useParams()
  const { cityId } = params;
  const handleClickButton = () => {
    setIsOpen(!isOpen);
    if (cityId) {
      dispatch(loadingForecastAction(cityId))
    }
  }

  useEffect(() => {
    if (cityId) {
      dispatch(loadingCityAction(cityId))
    }
  }, [ cityId ])
  return (
    <div className={ styles.weather }>

      {!weatherDay.error ? (
        <div className={ styles.weather_wrapper }>
          {weatherDay.loading ? (
            <Loader />
          )
            : (
              <div>
                <h1 className={ styles.weather_city_name }>{cityId}</h1>
                <div className={ styles.weather_flex }>
                  <p className={ styles.temperature }>Temperature:</p>
                  <div className={ styles.temperature_block }>
                    {weatherDay.weather[0].icon && (
                    <img
                      src={ `https://openweathermap.org/img/wn/${weatherDay.weather[0].icon}@2x.png` }
                      alt="weather_img"
                    />
                    )}
                    <p className={ styles.temperature_celsius }>
                      {weatherDay.main.temp}
                      &#176;
                    </p>
                  </div>
                </div>
                <div className={ styles.weather_flex }>
                  <p>Pressure:</p>
                  <p>
                    {weatherDay.main.pressure}
                    {' '}
                    mmHg
                  </p>
                </div>
                <div className={ styles.weather_flex }>
                  <p>Humidity:</p>
                  <p>
                    {weatherDay.main.humidity}
                    %
                  </p>
                </div>
                <button className={ styles.weather_button } onClick={ handleClickButton }>weekTemp(click)</button>
                {isOpen ? (
                  <WeekTable />
                ) : null}
              </div>
            )}
        </div>
      ) : <div><h1 className={ styles.error_header }>City not found</h1></div>}
    </div>
  )
};

export default WeatherPage;
