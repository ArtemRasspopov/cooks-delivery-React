import React from 'react'
import style from './ProductIsSelected.module.scss'

const ProductIsSelected = () => {
  return (
    <div className={`${style.root} unselectable`}>Уже в корзине</div>
  )
}

export default ProductIsSelected