import React from "react";
import style from "./Footer.module.scss";

//svg
import { ReactComponent as WhatsApp } from "../../sources/images/footer/whatsapp.svg";
import { ReactComponent as PhoneSvg } from "../../sources/images/footer/phone.svg";
import { ReactComponent as MailSvg } from "../../sources/images/footer/mail.svg";
import { ReactComponent as DishSvg } from "../../sources/images/footer/dish.svg";
import { ReactComponent as DishTwoSvg } from "../../sources/images/footer/dish2.svg";
import { ReactComponent as ScoterSvg } from "../../sources/images/footer/scoter.svg";
import { ReactComponent as FileSvg } from "../../sources/images/footer/file.svg";
import { ReactComponent as SignatureSvg } from "../../sources/images/footer/signature.svg";

const Footer = () => {
  return (
    <div className={style.footer}>
      <ul>
        <li>
          <a href={"/"} className={style.link}>
            <WhatsApp />
            WhatsApp
          </a>
        </li>
        <li>
          <a href={"/"} className={style.link}>
            <PhoneSvg />
            +7 (945) 450-46-60
          </a>
        </li>
        <li>
          <a href={"/"} className={style.link}>
            <MailSvg />
            Написать на E-mail
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href={"/"} className={style.link}>
            <DishSvg />
            Меню для частных клиентов
          </a>
        </li>
        <li>
          <a href={"/"} className={style.link}>
            <DishTwoSvg />
            Меню для корпоративных заказов
          </a>
        </li>
        <li>
          <a href={"/"} className={style.link}>
            <ScoterSvg />О доставке
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href={"/"} className={style.link}>
            <FileSvg />
            Политика конфиденциальности
          </a>
        </li>
        <li>
          <a href={"/"} className={style.link}>
            <SignatureSvg />
            Пользовательское соглашение
          </a>
        </li>
        <li>
          <a href={"/"} className={style.link}>
            © 2022 COOOK service
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
