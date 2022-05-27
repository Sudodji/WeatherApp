import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { loadingCityAction } from '../store/actions/actions';
import { getDayTempState } from '../store/selectors/tagsSelectors';
import styles from './weatherPage.module.css';

const WeatherPage: React.FC = () => {
  const weatherDay = useSelector(getDayTempState)
  const dispatch = useDispatch();
  const params = useParams()
  const { cityId } = params;

  useEffect(() => {
    if (cityId) {
      dispatch(loadingCityAction(cityId))
    }
  }, [ cityId ])
  return (
    <div className={ styles.weather }>
      {!weatherDay.error ? (
        <div className={ styles.weather_wrapper }>
          <h1 style={{ margin: '10px' }}>{cityId}</h1>
          <div className={ styles.weather_flex }>
            <p style={{ fontSize: '18px' }}>Temperature:</p>
            <div style={{ display: 'flex' }}>
              {weatherDay.weather[0].icon ? (
                // eslint-disable-next-line max-len
                <img src={ `https://openweathermap.org/img/wn/${weatherDay.weather[0].icon}@2x.png` } alt="weather_img" />
              ) : null}
              {weatherDay.loading ? (
                <Loader />
              ) : (
                <p style={{ fontSize: '47px' }}>
                  {weatherDay.main.temp}
                  &#176;
                </p>
              )}
            </div>
          </div>
          <div className={ styles.weather_flex }>
            <p>Pressure:</p>
            {weatherDay.loading ? (
              <Loader />
            ) : (
              <p>
                {weatherDay.main.pressure}
                {' '}
                mmHg
              </p>
            )}
          </div>
          <div className={ styles.weather_flex }>
            <p>Humidity:</p>
            {weatherDay.loading ? (
              <Loader />
            ) : (
              <p>
                {weatherDay.main.humidity}
                %
              </p>
            )}
          </div>
          <button className={ styles.weather_button }>weekTemp(click)</button>
        </div>
      ) : <div><h1 style={{ lineHeight: '8' }}>City not found</h1></div>}

    </div>
  )
};

export default WeatherPage;
