import { useParams } from 'react-router'
import { Place, places } from '../Data/Place';
import style from './PlacePage.module.css'
import { JSX, useState } from 'react';

import { IoLocation } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import Calendar from 'react-calendar';

type ViewType = 'Огляд' | 'Бронювання' | 'Відгуки';

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomottowDate = {day: tomorrow.getDate(), month: tomorrow.toLocaleString('uk-UA', {month: 'long'})};
const formattedDate = `${tomottowDate.day} ${tomottowDate.month}`;

export const PlacePage = () => {
    const { place } = useParams<{ place: string }>();
    const placeItem = places.find(p => p.name === place);
    
    const [currentView, setCurrentView] = useState<ViewType>('Огляд');

    const views: Record<ViewType, JSX.Element> = {
        'Огляд': <Overview place={placeItem} setView={setCurrentView} />,
        'Бронювання': <Booking occupiedDays={placeItem?.occupiedDates as Date[]} price={placeItem?.price as number}/>,
        'Відгуки': <FeedBack/>
      };
  
    return (
      <div className={style.page}>
        <nav className={style.nav}>
            {Object.keys(views).map((view, i) => (
            <a
                key={i}
                onClick={() => setCurrentView(view as ViewType)}
                className={currentView === view ? `${style.menu} ${style.active}` : `${style.menu}`}
            >
                {view}
            </a>
            ))}
        </nav>
        <div className={style.main}>
          {views[currentView]}
        </div>
      </div>
    );
}

interface OverviewProps {
    place: Place | undefined;
    setView: React.Dispatch<React.SetStateAction<ViewType>>;
  }

const Overview: React.FC<OverviewProps> = ({place, setView}) => {
    return(
        <>
            <h1 className={style.title}>{place?.name}</h1>
            <a 
                href={`https://www.google.com/maps/search/?q=${encodeURIComponent(place?.location as string)}`}
                className={style.location}
                target='_blank'>
                    <IoLocation />{place?.location}
            </a>
            <div className={style.center}>
                <div className={style.imgHolder}><img src={place?.img} alt="" /></div>
                <section className={style.sideFeatures}>
                    <div className={style.price}>
                        <h2>Ціна за добу</h2>
                        <div className={style.rowPrice}>
                            <p className={style.date}>{formattedDate}</p>
                            <p className={style.priceValue}>UAH {place?.price}</p>
                        </div>
                        {place?.oldPrice && (<p className={style.oldPriceValue}>UAH {place?.oldPrice}</p>)}
                        <button onClick={() => setView('Бронювання')}>Забронювати</button>
                    </div>
                    <div className={style.features}>
                        {place?.features.map((f, i) => (<div key={i} className={style.feature}>
                            {f.status ? <IoMdCheckmark className={style.true}/> :<FaXmark className={style.false} />}
                            <p key={i}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div className={style.desc}>
                <h2>Опис</h2>
                <p>Світла та затишна кімната, оформлена в сучасному стилі, ідеально підходить для комфортного відпочинку після
                    насиченого дня. В номері є зручне ліжко, свіжа постільна білизна, місце для зберігання речей, а також робоча зона.
                    Для вашої зручності передбачено безкоштовний Wi-Fi, кондиціонер, рушники та засоби особистої гігієни.
                    Кімната регулярно прибирається, забезпечуючи приємну атмосферу протягом усього перебування.</p>
            </div>
        </>
    )
}

const Booking: React.FC<{occupiedDays: Date[], price: number}> = ({occupiedDays, price}) => {
    const [selectedDate, setSelectedDate] = useState<Date[]>([]);
    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

    const handleDateClick = (date: Date) => {
      const formattedDate = formatDate(date);
      const isOccupied = occupiedDays.some(occupiedDate => formatDate(occupiedDate) === formattedDate);
      if (!isOccupied) {
        setSelectedDate(p => {
        const isAlreadySelected = p.some(selected => formatDate(selected) === formattedDate);
        if (isAlreadySelected) {
          return p.filter(selected => formatDate(selected) !== formattedDate);
        } else {
          return [...p, date];
        }
        });
      }
    };
    return (
        <div className={style.calendar}>
            <Calendar tileClassName={({date}) => {
                const formattedDate = formatDate(date);
                if (selectedDate.some(selected => formatDate(selected) === formattedDate)) {
                    return style.activeDate;
                }
                if (occupiedDays.some(occupiedDate => formatDate(occupiedDate) === formattedDate)) {
                    return style.disabledDate;
                }
                return null;
            }}
             tileDisabled={({date}) => {
                const formattedDate = formatDate(date);
                return occupiedDays.some(occupiedDate => formatDate(occupiedDate) === formattedDate);
            }}
            onClickDay={handleDateClick}/>{
                selectedDate.length > 0 && (<><p>{selectedDate.length * price} UAH за {selectedDate.length} днів</p>
            <button className={style.book}>Забронювати</button></>)}
        </div>
    )
}

const FeedBack = () => {
    return (
        <p>Тут будуть відгуки</p>
    )
}
