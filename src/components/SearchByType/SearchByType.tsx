import style from './SearchByType.module.css'
import hotel from '../../assets/hotel.jpg'
import apartaments from '../../assets/apartaments.jpg'
import resort from '../../assets/resort.jpg'
import hostel from '../../assets/hostel.jpg'
import cottage from '../../assets/cottage.jpg'
import { NavLink } from 'react-router'

export const SearchByType = () => {
  return (
    <div className={style.byType}>
        <h3>Тип помешкання</h3>
        <div className={style.types}>
            <CardType type='Готель' img={hotel} />
            <CardType type='Апартаменти' img={apartaments} />
            <CardType type='Курорт' img={resort} />
            <CardType type='Хостел' img={hostel} />
            <CardType type='Котедж' img={cottage} />
        </div>
    </div>
  )
}


const CardType: React.FC<{type: string; img: string}> = ({type, img}) => {
    return (
        <NavLink to={`/category/${type}`} className={style.card}>
            <div className={style.imgHolder}><img src={img} alt="" /></div>
            <h4>{type}</h4>
        </NavLink>
    )
}
