import React from 'react';
import senter from '../../assets/img/senter.png'
import image1 from '../../assets/img/image1.png'
import image2 from '../../assets/img/image2.png'
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";


const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">

                    <div className="headerone">
                        
                    <img src={senter} alt="" />

<div className="header-address">
    <a>
    <IoLocationOutline />
    </a>
    <p>Маршала Катукова, д.8</p>

    <a>
    <LuPhone />
    </a>
    <p>+7 (495) 750 05 00</p>
</div>

<button>Заказать звонок</button>
                    </div>

                    <div class="header-nav">

                    <a href="#">О центре</a>
                    <a href="#">Афиша</a>
                    <a href="#">Студии</a>
                    <a href="#">Расписание</a>
                    <a href="#">Пространства</a>
                    <a href="#">Абонементы</a>
                    <a href="#">Организаторам</a>
                    <a href="#">Контакты</a>

                </div>

                <div class="image">
                    <img src={image1} alt="" width="100%"/>

                    <div class="image--two">
                        <img src={image2} alt=""/>
                    </div>
                    <h1>Движение. Творчество. Рост.</h1>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
