import style from '../header/Header.module.css'
import logoImg from '../../assets/logo.png'
import hotelImg from '../../assets/42105452_8906903.svg'
import { NavLink, useLocation } from 'react-router'
import { Search } from '../Search/Search'

export const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
  return (
    <div className={style.header}>
        <header>
            <NavLink to='/' className={style.logo}>
                <div className={style.imgHolder}><img src={logoImg} alt="QuickStay" /></div>
                <h1>QuickStay</h1>
            </NavLink>
            <section className={style.auth}>
                <button>Зареєструватись</button>
                <button>Увійти</button>
            </section>
        </header>
        {isHome && (
        <article className={style.slogan}>
            <section className={style.top}>
                <h1>ЗНАЙДИ. ЗАБРОНЮЙ. ВІДПОЧИВАЙ.</h1>
                <img src={hotelImg} alt="hotel" />
            </section>
            <p>Все, що потрібно — знайти своє місце. Ми допоможемо.</p>
        </article>
        )}
        <Search/>
    </div>
  )
}
