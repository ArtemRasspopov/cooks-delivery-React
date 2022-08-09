import React from 'react'
import style from './ProductCounter.module.scss'

//svg
import { ReactComponent as MinusSvg } from '../../sources/images/minus.svg'
import { ReactComponent as PlusSvg } from '../../sources/images/plus.svg'

const ProductCounter = () => {
  return (
    <div className={style.product_counter}>
      <button className={style.button}><MinusSvg/></button>
      <p>1</p>
      <button className={style.button}><PlusSvg/></button>
    </div>
  )
}

export default ProductCounter