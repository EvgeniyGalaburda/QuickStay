import { NavLink, useParams } from 'react-router'
import style from './SearchPage.module.css'
import { Place, places } from '../Data/Place';
import React from 'react';

import { IoLocation } from "react-icons/io5";

export const SearchPage = () => {
    const {request} = useParams<string>();


    const results = places.filter(place => {
        const value = request?.toLocaleLowerCase();
        return(
            place.name.toLowerCase().includes(value as string) || 
            place.location.toLowerCase().includes(value as string)
        )
    })

  return (
    <div className={style.search}>
        <h1>Результати пошуку "{request}"</h1>
        <div className={style.list}>
            {results.map((result, i) => (
                <PlaceLink key={i} place={result}/>
            ))}
        </div>
    </div>
  )
}



export const PlaceLink: React.FC<{place: Place}> = ({place}) => {
    return(
        <NavLink to={`/${place.name}`} className={style.placeLink}>
            <div className={style.imgHolder}><img src={place.img} alt="" /></div>
            <div className={style.info}>
                <h4>{place.name}</h4>
                <p><IoLocation /> {place.location}</p>
            </div>
            <div className={style.price}>
                <h3 className={style.newPrice}>UAH {place.price}</h3>
            </div>
        </NavLink>
    )
}
