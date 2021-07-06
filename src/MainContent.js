import React from "react";

function MainContent(props) {
  let data = props.data;
  const product = data.map((item) => (
    <div className="product_block">
      <div className="product_img">
        <img src={item.img} />
      </div>
      <div className="price">{item.price}</div>
      <div className="title">{item.title}</div>
      <button className="button">Купить</button>
    </div>
  ));
  return (
    <div className="content_container">
      <div className="nav_menu">
        <div className="nav_item">Гаджеты и аксессуары</div>
        <div className="nav_item">Бытовая техника</div>
        <div className="nav_item">Прочее</div>
      </div>
      <div className="content_product">{product}</div>
    </div>
  );
}

export default MainContent;
