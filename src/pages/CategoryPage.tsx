import { useParams } from 'react-router'
import style from './SearchPage.module.css'
import { places } from '../Data/Place';
import { PlaceLink } from './SearchPage';

export const CategoryPage = () => {
    const {category} = useParams<string>();

    const categoryPlaces = places.filter(place => place.type.toLocaleLowerCase() == category?.toLocaleLowerCase())
  return (
    <div className={style.search}>
      <h1>Категорія {`"${category}"`}</h1>
      <div className={style.list}>
        {categoryPlaces.map(place => (
            <PlaceLink place={place}/>
        ))}
      </div>
    </div>
  )
}
