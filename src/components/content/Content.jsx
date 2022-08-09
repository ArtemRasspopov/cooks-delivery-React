import React from 'react'
import style from './Content.module.scss'
import Сategories from '../categories/Сategories'
import Sorting from '../sorting/Sorting'
import ProductCurd from '../productCurd/ProductCurd'
import Footer from '../footer/Footer'

const Content = () => {
  return (
    <div className={style.content}>
      <div className='container'>
        <Сategories/>
        <Sorting/>
        <div className={style.product_list}>
          <ProductCurd/>
          <ProductCurd/>
          <ProductCurd/>
          <ProductCurd/>
          <ProductCurd/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Content