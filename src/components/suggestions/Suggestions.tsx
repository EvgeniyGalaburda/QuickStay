import style from './Suggestions.module.css'
import { places } from '../../Data/Place'
import { NavLink } from 'react-router';

export const Suggestions = () => {
    const suggestions = places.filter(i => 'oldPrice' in i).slice(0, 4);

  return (
    <div className={style.suggestions}>
        <h3>Гарячі пропозицї</h3>
        <div className={style.list}>
            {suggestions.map((item, i) => (
                <CardPlace key={i} name={item.name} price={item.price} oldPrice={item.oldPrice} location={item.location} img={item.img}/>
            ))}
        </div>
    </div>
  )
}

const CardPlace: React.FC<{name: string; price: number ; img: string; location: string; oldPrice: number | undefined}> = ({name, price, img, location, oldPrice}) => {
    return (
        <NavLink to={`/${name}`} className={style.card}>
            <div className={style.top}>
                <div className={style.imgHolder}><img src={img} alt="" /></div>
                <div className={style.info}>
                    <h4 className={style.title}>{name}</h4>
                    <p className={style.location}>{location}</p>
                </div>
            </div>
            <div className={style.prices}>
                <h4 className={style.oldPrice}>UAH {oldPrice}</h4>
                <h4 className={style.price}>UAH {price}</h4>
            </div>

        </NavLink>
    )
}
