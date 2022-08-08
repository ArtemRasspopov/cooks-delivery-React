import React from 'react'
import style from './ToCartButton.module.scss'

const ToCartButton = ({title}) => {
  return (
    <button className={style.to_cart_button}>
      {title}
    </button>
  )
}

export default ToCartButton