import React from 'react'
import style from './WhatsAppButton.module.scss'

//svg
import { ReactComponent as WatsAppSvg } from "../../../sources/images/footer/whatsapp.svg";

const WhatsAppButton = () => {
  return (
    <button className={style.whats_app_button}><WatsAppSvg/>WhatsApp</button>
  )
}

export default WhatsAppButton