import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { loadingCityAction } from '../store/actions/actions';
import { IState } from '../store/initialState'
import styles from './WeatherPage.module.css';

const store = (state: IState) => state.dayTemp;

const WeatherPage: React.FC = () => {
  const weatherDay = useSelector(store)
  const dispatch = useDispatch();
  const params = useParams()
  const { cityId } = params;
  const temperature = Math.round(weatherDay.main.temp - 273);
  const request: any = () => {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Penza&appid=f595fef9007f65f8157c0faa1ce3c95e')
      .then(resp => {
        console.log(resp.data.list)
      })
  }
  useEffect(() => {
    request();
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
                <div className={ styles.loader }>
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              ) : (
                <p style={{ fontSize: '47px' }}>
                  {temperature}
                  &#176;
                </p>
              )}
            </div>
          </div>
          <div className={ styles.weather_flex }>
            <p>Pressure:</p>
            {weatherDay.loading ? (
              <div className={ styles.loader }>
                <div />
                <div />
                <div />
                <div />
              </div>
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
              <div className={ styles.loader }>
                <div />
                <div />
                <div />
                <div />
              </div>
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
