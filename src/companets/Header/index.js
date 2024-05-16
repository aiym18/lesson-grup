import React from "react";
import headerimg from "../../img/headerimg.png";
import { BsGeoAlt } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="continer">
        <div className="header">
          <div className="header--start">
            <img src={headerimg} alt="" />
            <div className="header--start__nav">
              <a>
                <BsGeoAlt />
                Маршала Катукова, д.8
              </a>
              <a>
                <BsTelephone />
                +7 (495) 750 05 00
              </a>
            </div>
            <button className="btn">Заказать звонок</button>
          </div>
          
        </div>
      </div>
      <div className="and">
          <Link to={""}>О центре</Link>
          <Link to={""}>Афиша</Link>
          <Link to={""}>Студии</Link>
          <Link to={""}>Расписание</Link>
            <Link to={""}>Пространства</Link>
            <Link to={""}>Абонементы</Link>
            <Link to={""}>Организаторам</Link>
            <Link to={""}>Контакты</Link>
          </div>
    </div>
  );
};

export default Header;
