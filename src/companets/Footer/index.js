import React from "react";
import footer from "../../img/footer.png";
import { LuEye } from "react-icons/lu";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import icon4 from "../../img/icon4.png";
import icon5 from "../../img/icon5.png";
import play from "../../img/play.png";
import apple from "../../img/apple.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--start">
            <div className="text1">
              <img width={150} src={footer} alt="" />
              <p>
                © 2018 – 2022, Культурный центр <br />
                «Строгино» – учреждение культуры <br /> города Москва
              </p>
              <a>
                <LuEye />
                ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ
              </a>
              <h4>мы работаем</h4>
              <p>с 10:00 до 22:00 без выходных</p>
              <div className="icon">
                <SlSocialVkontakte />
                <FaTelegramPlane />
              </div>
            </div>
            <div className="text">
            <div className="text1">
              <a>О центре</a>
              <a>Пространства</a>
              <a>Студии</a>
              <a>Афиша</a>
              <a>Галерея</a>
              <a>Контакты</a>
              <a>Оплата на сайте</a>
              <a>Партнеры</a>
            </div>
            <div className="text1">
              <a>Документы</a>
              <a>Вакансии</a>
              <a>Запись к директору</a>
              <a>Независимая оценка</a>
              <a>Раздел «Услуги и сервисы» на MOS.RU</a>
              <a>Все новости</a>
              <a>Аренда помещений</a>
            </div>
            </div>
           
            <div className="inputtex">
              <h1>НАПИШИТЕ НАМ</h1>
              <input
                className="inputI"
                type="text"
                placeholder="Ваше сообщение"
              />
              <input className="inputI" type="text" placeholder="Ваше имя" />
              <input
                className="inputI"
                type="text"
                placeholder="Ваш телефон или email"
              />
              <div className="inputIi">
                <input type="checkbox" name="" id="" />
                <p>Я согласен на обработку моих персональных данных</p>
              </div>
              <button>Отправить</button>
            </div>
          </div>
          <div className="footer--and">
            <div className="foottext">
              <h1>Наши партнеры</h1>
              <div className="icons">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
                <img src={icon5} alt="" />
              </div>
            </div>

            <div className="footimg">
              <img src={play} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
