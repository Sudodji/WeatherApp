import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAutoCompleteState, getGeoPositionState } from '../store/selectors/tagsSelectors';
import { loadingGeoAction } from '../store/actions/actionGeoPosition';
import { loadingAutoCompleteAction } from '../store/actions/actionAutoComplete';
import styles from './inputPlace.module.css';
import { debounce } from '../helper';

const InputPlace: React.FC = () => {
  const autoComplete = useSelector(getAutoCompleteState)
  const geoPosition = useSelector(getGeoPositionState);
  const dispatch = useDispatch();
  const [ location, setLocation ] = useState<string>('');
  const [ isOpen, setIsOpen ] = useState<boolean>(true);
  const arrayCities = autoComplete.data._embedded['city:search-results'];
  const arrayNearCities = arrayCities.slice(0, 5);
  useEffect(() => {
    if (!location) {
      setIsOpen(false)
    }
  }, [ location ])
  const refValue = useRef('');
  refValue.current = location;
  const updateCity = () => {
    dispatch(loadingAutoCompleteAction(refValue.current))
  }
  const debounceCities = useCallback(debounce(updateCity, 1000), []);
  const handleClickSearchLocation = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };
  const handleClickGeoPosition = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(loadingGeoAction());
    setLocation(geoPosition.name.name)
  }
  const handleClickYourPosition = (e: React.MouseEvent<HTMLButtonElement>, name:string): void => {
    e.preventDefault()
    setLocation(name);
  }
  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLocation(event.target.value);
    debounceCities();
    setIsOpen(true);
  }
  const handleClickSuggestedCity = (e: React.MouseEvent<HTMLElement>, name:string): void => {
    e.preventDefault()
    setIsOpen(!isOpen);
    setLocation(name.replace(/,\s.*/, ''));
  }

  return (
    <div className={ styles.input_wrapper }>
      <div>
        <h1>Weather</h1>
        <input
          value={ location }
          onChange={ event => { handleOnChangeInput(event) } }
          className={ styles.search_field }
          placeholder="Weather in your city"
        />
        <button onClick={ handleClickSearchLocation } className={ styles.search_button }>
          <NavLink to={ `/weather/${location}` } className={ styles.search_link }>
            Search
          </NavLink>
        </button>
        {geoPosition.name.name ? (
          <button
            onClick={ e => { handleClickYourPosition(e, geoPosition.name.name) } }
            className={ styles.search_button }
          >
            {geoPosition.name.name}
            (put to input)
          </button>
        )
          : <button onClick={ handleClickGeoPosition } className={ styles.search_button }>Your geoposition</button>}
        {arrayNearCities.length > 0 && isOpen && (
          <ul className={ styles.search_list }>
            {arrayNearCities.map(obj => (
              <a
                href="#!"
                key={ obj.matching_full_name }
                onClick={ e => { handleClickSuggestedCity(e, obj.matching_full_name) } }
              >
                {obj.matching_full_name}

              </a>
            ))}
          </ul>
        ) }
      </div>
    </div>
  );
};

export default InputPlace;
