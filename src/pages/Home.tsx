import { SearchByType } from '../components/SearchByType/SearchByType'
import { Suggestions } from '../components/suggestions/Suggestions'
import style from './Home.module.css'

export const Home = () => {
  return (
    <main className={style.home}>
        <SearchByType/>
        <Suggestions/>
    </main>
  )
}
