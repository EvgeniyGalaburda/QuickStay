import { useState, useRef } from 'react'
import style from './Search.module.css'

import { MdOutlineHotel } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import { NavLink } from 'react-router';
import { places } from '../../Data/Place';

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const filteredPlaces = places.filter(place => {
    const value = searchValue.toLowerCase();
    if (value.length < 2) return false;
    return (
      place.name.toLowerCase().includes(value) ||
      place.location.toLowerCase().includes(value)
    );
  });

  const filteredLocation = [...new Set(places.filter(place => {
    const value = searchValue.toLowerCase();
    if (value.length < 2) return false;
    return place.location.toLowerCase().includes(value);
  }))];

  const shouldShowResults =
    (filteredPlaces.length || filteredLocation.length) &&
    isFocused &&
    searchValue.length >= 2;

  return (
    <div className={style.search}>
      <div className={style.searchBar}>
        <MdOutlineHotel />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsFocused(true);
          }}
          onBlur={() => {
            timeoutRef.current = setTimeout(() => {
              setIsFocused(false);
            }, 150);
          }}
          type="text"
        />
        <IoMdClose onClick={() => setSearchValue('')} />
        <NavLink to={`/search/${searchValue}`}>
          <button>Шукати</button>
        </NavLink>
      </div>

      {(shouldShowResults == true) && 
        <div className={style.results}>
          {filteredPlaces.map((place, i) => (
            <NavLink key={i} to={`/${place.name}`}>
              <RiHotelFill />
              <div className={style.resultRight}>
                <h5>{place.name}</h5>
                <p>{place.location}</p>
              </div>
            </NavLink>
          ))}
          {filteredLocation.map((place, i) => (
            <NavLink key={i} to={`/city/${place.location.split(',')[0]}`}>
              <IoLocation />
              <div className={style.resultRight}>
                <h5>{place.location}</h5>
              </div>
            </NavLink>
          ))}
        </div>
      }
    </div>
  );
};
