import style from './SearchPage.module.css'
import { useParams } from 'react-router'

import { places } from '../Data/Place'
import { PlaceLink } from './SearchPage.tsx';

export const CityPage = () => {
    const {city} = useParams<{city: string}>();

    const cityPlaces = places.filter(place => place.location.includes(city as string));
    console.log(cityPlaces)

  return (
    <div className={style.search}>
      <h1>Результати пошуку в місті {city}</h1>
      <div className={style.list}>
        {cityPlaces.map((place, i) => (
          <PlaceLink key={i} place={place}/>
        ))}
      </div>
      
    </div>
  )
}
