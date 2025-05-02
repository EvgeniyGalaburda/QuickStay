import odesa from '../assets/places/sunset-inn.jpg'
import kyiv from '../assets/places/palace-hotel-kyiv.jpeg'
import dnipro from '../assets/places/Stay-Dnipro.jpg'
import lviv from '../assets/places/lviv-lights.jpg'
import carpathians from '../assets/places/carpathians-escape.jpg'
import blackSea from '../assets/places/black-sea-breeze.jpg'
import urbanHub from '../assets/places/urban-hub.jpg'
import dnister from '../assets/places/dnister-view.png'
import vinnytsia from '../assets/places/vinnytsia-comfort.jpg'
import ivanoStay from '../assets/places/ivano-stay.jpg'
import poltava from '../assets/places/polvata-rest.jpg'
import chernihiv from '../assets/places/chernihiv-nights.jpg'
import khmelnytskyi from '../assets/places/khmelnytskyi-plaza.jpg'
import zhytomir from '../assets/places/zhytomyr-lodge.jpg'
import ternopil from '../assets/places/ternopil-lake-view.jpg'
import rivne from '../assets/places/rivne-breeze.jpg'
import cherkasy from '../assets/places/cherkasy-retreat.jpg'
import mykolaiv from '../assets/places/mykolaiv-inn.png'
import uzhgorod from '../assets/places/uzhgorod-stay.jpg'
import zaporizhia from '../assets/places/zaporizhia-view.jpg'


type Type = "Готель"|"Апартаменти"|"Курорт"|"Хостел"|"Котедж"

export interface Place {
    name: string;
    location: string;
    img: string;
    occupiedDates: Date[];
    price: number;
    type: Type;
    oldPrice?: number;
    features: {
      desc: string,
      status: boolean
    }[];
}


export const places: Place[] = [
  {
    name: "Sunset Inn",
    location: "Одеса, Україна",
    img: odesa,
    occupiedDates: [new Date("2025-04-10"), new Date("2025-04-12")],
    price: 1200,
    oldPrice: 1800,
    type: 'Курорт',
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Kyiv Palace",
    location: "Київ, Україна",
    img: kyiv,
    occupiedDates: [new Date("2025-04-15"), new Date("2025-04-18")],
    price: 1800,
    type: "Готель",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: false },
      { desc: "Куріння", status: true },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Dnipro Stay",
    location: "Дніпро, Україна",
    img: dnipro,
    occupiedDates: [new Date("2025-04-08")],
    price: 900,
    type: "Апартаменти",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: false }
    ]
  },
  {
    name: "Lviv Lights",
    location: "Львів, Україна",
    img: lviv,
    occupiedDates: [new Date("2025-04-20"), new Date("2025-04-21")],
    price: 1500,
    oldPrice: 2000,
    type: "Готель",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: false },
      { desc: "Куріння", status: true },
      { desc: "Харчування", status: false },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Carpathian Escape",
    location: "Яремче, Україна",
    img: carpathians,
    occupiedDates: [],
    price: 1100,
    oldPrice: 2000,
    type: "Котедж",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Black Sea Breeze",
    location: "Чорноморськ, Україна",
    img: blackSea,
    occupiedDates: [new Date("2025-04-11")],
    price: 1300,
    oldPrice: 1500,
    type: "Курорт",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: false },
      { desc: "Куріння", status: true },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Urban Hub",
    location: "Харків, Україна",
    img: urbanHub,
    occupiedDates: [new Date("2025-04-19")],
    price: 1250,
    type: "Апартаменти",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: false },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Dnister View",
    location: "Галич, Україна",
    img: dnister,
    occupiedDates: [],
    price: 1000,
    type: "Готель",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: false },
      { desc: "Куріння", status: true },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: false }
    ]
  },
  {
    name: "Vinnytsia Comfort",
    location: "Вінниця, Україна",
    img: vinnytsia,
    occupiedDates: [new Date("2025-04-17"), new Date("2025-04-18")],
    price: 950,
    type: "Апартаменти",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: false },
      { desc: "Куріння", status: true },
      { desc: "Харчування", status: false },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Ivano Stay",
    location: "Івано-Франківськ, Україна",
    img: ivanoStay,
    occupiedDates: [new Date("2025-04-13")],
    price: 1050,
    type: "Хостел",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: false }
    ]
  },
  {
    name: "Poltava Rest",
    location: "Полтава, Україна",
    img: poltava,
    occupiedDates: [],
    price: 980,
    type: "Готель",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Chernihiv Nights",
    location: "Чернігів, Україна",
    img: chernihiv,
    occupiedDates: [new Date("2025-04-16")],
    price: 1020,
    type: "Хостел",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: false },
      { desc: "Куріння", status: true },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: false }
    ]
  },
  {
    name: "Khmelnytskyi Plaza",
    location: "Хмельницький, Україна",
    img: khmelnytskyi,
    occupiedDates: [],
    price: 1120,
    type: "Готель",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Zhytomyr Lodge",
    location: "Житомир, Україна",
    img: zhytomir,
    occupiedDates: [new Date("2025-04-10"), new Date("2025-04-11")],
    price: 940,
    oldPrice: 1300,
    type: "Котедж",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: false },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Ternopil Lake View",
    location: "Тернопіль, Україна",
    img: ternopil,
    occupiedDates: [new Date("2025-04-20")],
    price: 1000,
    type: "Готель",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: false },
      { desc: "Куріння", status: true },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: false }
    ]
  },
  {
    name: "Rivne Breeze",
    location: "Рівне, Україна",
    img: rivne,
    occupiedDates: [],
    price: 970,
    type: "Апартаменти",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Cherkasy Retreat",
    location: "Черкаси, Україна",
    img: cherkasy,
    occupiedDates: [new Date("2025-04-14")],
    price: 990,
    type: "Курорт",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Mykolaiv Inn",
    location: "Миколаїв, Україна",
    img: mykolaiv,
    occupiedDates: [],
    price: 1010,
    type: "Готель",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: true },
      { desc: "Куріння", status: false },
      { desc: "Харчування", status: false },
      { desc: "Паркування", status: true }
    ]
  },
  {
    name: "Uzhhorod Stay",
    location: "Ужгород, Україна",
    img: uzhgorod,
    occupiedDates: [new Date("2025-04-12")],
    price: 1150,
    type: "Апартаменти",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: false },
      { desc: "Куріння", status: true },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: false }
    ]
  },
  {
    name: "Zaporizhzhia View",
    location: "Запоріжжя, Україна",
    img: zaporizhia,
    occupiedDates: [new Date("2025-04-21")],
    price: 1150,
    type: "Готель",
    features: [
      { desc: "Wi-fi", status: true },
      { desc: "З тваринами", status: false },
      { desc: "Куріння", status: true },
      { desc: "Харчування", status: true },
      { desc: "Паркування", status: false }
    ]
  }
];
