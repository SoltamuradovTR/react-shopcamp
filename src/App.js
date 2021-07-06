import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const product = [
  {
    img: "http://intocode.ru/d/react-project-1/images/1.jpg",
    price: "97000 ₽",
    title: "MacBook",
  },
  {
    img: "http://intocode.ru/d/react-project-1/images/2.jpg",
    price: "35999 ₽",
    title: "Galaxy",
  },
  {
    img: "http://intocode.ru/d/react-project-1/images/3.jpg",
    price: "58950 ₽",
    title: "Скутер",
  },
  {
    img: "http://intocode.ru/d/react-project-1/images/4.jpg",
    price: "12000 ₽",
    title: "Монитор Samsung",
  },
  {
    img: "http://intocode.ru/d/react-project-1/images/5.jpg",
    price: "500 ₽",
    title: "Респераторная маска",
  },
  {
    img: "http://intocode.ru/d/react-project-1/images/6.jpg",
    price: "75000 ₽",
    title: "Стиральная машина",
  },
  {
    img: "http://intocode.ru/d/react-project-1/images/7.jpg",
    price: "21550 ₽",
    title: "Белый холодильник",
  },
  {
    img: "http://intocode.ru/d/react-project-1/images/8.jpg",
    price: "3000 ₽",
    title: "Колонка",
  },
  {
    img: "http://intocode.ru/d/react-project-1/images/9.jpg",
    price: "1275 ₽",
    title: "Наушники",
  },
];

function App() {
  return (
    <>
      <Header />
      <MainContent data={product} />
    </>
  );
}

export default App;
