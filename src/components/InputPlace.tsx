import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import styles from './inputPlace.module.css';

const debounce = (fn:Function, ms = 300) => {
  let timeout:ReturnType<typeof setTimeout>;
  return function fnCall(this: any, ...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, args), ms);
  }
}

const InputPlace: React.FC = () => {
  const [ location, setLocation ] = useState<string>('');
  const [ suggestedCities, setSuggestedCities ] = useState<Array<any>>([]);
  const [ isOpen, setIsOpen ] = useState<boolean>(true);
  const handleClickSearchLocation = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };
  useEffect(() => {
    if (!location) {
      setSuggestedCities([]);
      setIsOpen(false)
    }
  }, [ location ])

  const refValue = useRef('')

  const getSuggestedCities:any = () => {
    axios.get(`https://api.teleport.org/api/cities/?search=${refValue.current}`)
      .then(resp => {
        const arrayCities = resp.data._embedded['city:search-results'];
        const arrayNearCities = arrayCities.slice(0, 5);
        setSuggestedCities(arrayNearCities);
      })
  };
  const debounceCities = useCallback(debounce(getSuggestedCities, 1000), []);
  refValue.current = location;
  const itemClickHandler = () => {
    setIsOpen(true)
  }
  return (
    <div className={ styles.input_wrapper }>
      <div>
        <h1>Weather</h1>
        <input
          value={ location }
          onChange={ event => { setLocation(event.target.value); debounceCities() } }
          onClick={ itemClickHandler }
          className={ styles.search_field }
          placeholder="Weather in your city"
        />
        <button onClick={ handleClickSearchLocation } className={ styles.search_button }>
          <NavLink to={ `/weather/${location}` } className={ styles.search_link }>
            Search
          </NavLink>
        </button>
        {suggestedCities.length > 0 && isOpen ? (
          <ul className={ styles.search_list }>
            {suggestedCities.map((obj:any) => (
              // eslint-disable-next-line max-len
              <a href="#!" key={ obj.matching_full_name } onClick={ e => { setLocation(obj.matching_full_name); e.preventDefault(); setIsOpen(!isOpen) } }>{obj.matching_full_name}</a>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default InputPlace;
